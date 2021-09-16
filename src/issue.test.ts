import { graphql } from 'graphql'
import { gql } from 'graphql-tag'
import {
  clearDatabase,
  connect,
  disconnect,
  driver,
} from '@issue/neo4j/database'
import { ogm, schema } from '@issue/neo4j/graphql'
import { Blog } from '@issue/graphql/types'

describe('Issue', () => {
  const [User, Blog, Post, Comment] = ['User', 'Blog', 'Post', 'Comment'].map(
    (name) => ogm.model(name)
  )

  const blogName = 'blog-name'
  const userEmail = 'email'
  const userPassword = 'password'

  const query = gql`
    {
      blogs {
        name
      }
    }
  `
  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await clearDatabase()
  })

  afterAll(async () => {
    await disconnect()
  })

  test('should have a blog name via OGM', async () => {
    await Blog.create<{ blogs: Blog[] }>({
      input: {
        name: blogName,
        creator: {
          create: {
            node: {
              email: userEmail,
              password: userPassword,
            },
          },
        },
      },
    })

    const result = await graphql({
      schema,
      source: query.loc?.source!,
      contextValue: {
        driver,
      },
    })

    expect(result.errors).toBeUndefined()
    expect((result.data as any).blogs[0].name).toBe(blogName)
  })

  test('should have a blog name via session', async () => {
    const session = driver.session()

    try {
      await session.run(
        `
          CREATE (:Blog {name: $blogName})<-[:HAS_BLOG]-(:User {email: $userEmail, password: $userPassword})
        `,
        {
          blogName,
          userEmail,
          userPassword,
        }
      )

      const result = await graphql({
        schema,
        source: query.loc?.source!,
        contextValue: {
          driver,
        },
      })

      expect(result.errors).toBeUndefined()
      expect((result.data as any).blogs[0].name).toBe(blogName)
    } finally {
      await session.close()
    }
  })
})
