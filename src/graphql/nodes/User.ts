import { gql } from 'graphql-tag'
import { RequiredMutationResolvers } from '@issue/graphql/types'
import { comparePassword, encodeJWT, hashPassword } from '@issue/utils'

const typeDefs = gql`
  type User {
    id: ID! @id
    email: String!
    createdBlogs: [Blog!]! @relationship(type: "HAS_BLOG", direction: OUT)
    authorsBlogs: [Blog!]! @relationship(type: "CAN_POST", direction: OUT)
    password: String! @private
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }
  extend type User
    @auth(
      rules: [
        { operations: [CONNECT], isAuthenticated: true }
        {
          operations: [UPDATE]
          allow: { id: "$jwt.sub" }
          bind: { id: "$jwt.sub" }
        }
        { operations: [DELETE], allow: { id: "$jwt.sub" } }
        {
          operations: [DISCONNECT]
          allow: {
            OR: [
              { id: "$jwt.sub" }
              {
                createdBlogs: {
                  OR: [
                    { creator: { id: "$jwt.sub" } }
                    { authors: { id: "$jwt.sub" } }
                  ]
                }
              }
              {
                authorsBlogs: {
                  OR: [
                    { creator: { id: "$jwt.sub" } }
                    { authors: { id: "$jwt.sub" } }
                  ]
                }
              }
            ]
          }
        }
      ]
    )
  type Mutation {
    signUp(email: String!, password: String!): String # JWT
    signIn(email: String!, password: String!): String # JWT
  }
`

const resolvers: RequiredMutationResolvers<'signIn' | 'signUp'> = {
  Mutation: {
    signIn: async (_, { email, password }, context) => {
      const User = context.ogm.model('User')

      const [existing] = await User.find({
        where: { email },
        context: { ...context, adminOverride: true },
      })
      if (!existing) {
        throw new Error('user not found')
      }

      const equal = await comparePassword(password, existing.password)
      if (!equal) {
        throw new Error('Unauthorized')
      }

      const jwt = await encodeJWT({ sub: existing.id })

      return jwt
    },
    signUp: async (_, { email, password }, context) => {
      const User = context.ogm.model('User')

      const [existing] = await User.find({
        where: { email },
        context: { ...context, adminOverride: true },
      })

      if (existing) {
        throw new Error('user with that email already exists')
      }

      const hashedPassword = await hashPassword(password)

      const [user] = (
        await User.create({
          input: [
            {
              email,
              password: hashedPassword,
            },
          ],
        })
      ).users

      const jwt = await encodeJWT({ sub: user.id })

      return jwt
    },
  },
}

export const User = { typeDefs, resolvers }
