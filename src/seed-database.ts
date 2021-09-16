import faker from 'faker'
import type { User } from '@issue/graphql/types'
import { hashPassword } from '@issue/utils/password'
import {
  clearDatabase,
  connect,
  disconnect,
  debug,
} from '@issue/neo4j/database'
import { ogm } from '@issue/neo4j/graphql'

export const seed = async () => {
  const [User, Blog, Post, Comment] = ['User', 'Blog', 'Post', 'Comment'].map(
    (name) => ogm.model(name)
  )

  const defaultEmail = 'admin@admin.com'
  const defaultPassword = 'password'

  const { users } = await User.create<{ users: User[] }>({
    input: await Promise.all(
      [
        [defaultEmail, defaultPassword],
        [faker.internet.email(), faker.internet.password()],
        [faker.internet.email(), faker.internet.password()],
      ].map(async ([email, password]) => {
        return {
          email,
          password: await hashPassword(password),
        }
      })
    ),
  })

  await Blog.create({
    input: users.map((user) => {
      return {
        name: faker.lorem.word(),
        creator: {
          connect: { where: { node: { id: user.id } } },
        },
        posts: {
          create: new Array(1).fill(null).map(() => ({
            node: {
              title: faker.lorem.word(),
              content: faker.lorem.paragraphs(4),
              author: {
                connect: { where: { node: { id: user.id } } },
              },
              comments: {
                create: new Array(1).fill(null).map(() => {
                  const u = users[Math.floor(Math.random() * users.length)]

                  return {
                    node: {
                      content: faker.lorem.paragraph(),
                      author: {
                        connect: { where: { node: { id: u.id } } },
                      },
                    },
                  }
                }),
              },
            },
          })),
        },
      }
    }),
  })
}

const seedDatabase = async () => {
  try {
    await connect()
    await clearDatabase()
    debug('Seeding started...')
    await seed()
    debug('Seeding Finished')
    await disconnect()
  } catch (error) {
    debug(`Error seeding database: ${error.message}`)
    process.exit(1)
  }
}

seedDatabase()
