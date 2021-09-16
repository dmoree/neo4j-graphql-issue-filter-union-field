import { debug } from '@issue/neo4j/database/debugger'
import { driver } from '@issue/neo4j/database/driver'

export const clearDatabase = async () => {
  const session = driver.session()
  try {
    debug('Clearing...')
    await session.run(`
      MATCH (n)
      DETACH DELETE n
    `)
    debug('Cleared')
  } finally {
    await session.close()
  }
}
