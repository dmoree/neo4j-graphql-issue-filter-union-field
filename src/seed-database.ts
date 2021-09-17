import {
  clearDatabase,
  connect,
  disconnect,
  debug,
} from '@issue/neo4j/database'
import { ogm } from '@issue/neo4j/graphql'

export const seed = async () => {
  const [Movie, Director, Actor] = ['Movie', 'Director', 'Actor'].map((name) =>
    ogm.model(name)
  )

  const {
    movies: [theMatrix],
  } = await Movie.create({
    input: {
      title: 'The Matrix',
      people: {
        Director: {
          create: [
            {
              node: {
                name: 'Lana Wachowski',
              },
            },
            {
              node: {
                name: 'Lilly Wachowski',
              },
            },
          ],
        },
        Actor: {
          create: [
            {
              node: {
                name: 'Keanu Reeves',
              },
            },
            {
              node: {
                name: 'Carrie-Ann Moss',
              },
            },
          ],
        },
      },
    },
  })
  await Director.update({
    connect: { movies: { where: { node: { id: theMatrix.id } } } },
  })
  await Actor.update({
    connect: { movies: { where: { node: { id: theMatrix.id } } } },
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
