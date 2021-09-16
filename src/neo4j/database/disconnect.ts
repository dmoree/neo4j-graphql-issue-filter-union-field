import { Neo4jError } from 'neo4j-driver'
import { debug } from '@issue/neo4j/database/debugger'
import { driver } from '@issue/neo4j/database/driver'

export const disconnect = async () => {
  try {
    debug('Disconnecting...')
    await driver.close()
    debug('Disconnected')
  } catch (error) {
    if (error instanceof Neo4jError) {
      debug(`${error.name}:${error.code}\n${error.message}`)
    } else if (error instanceof Error) {
      debug(`Error disconnecting database: ${error.message}`)
    }
  }
}
