import { Neo4jError } from 'neo4j-driver'
import { debug } from '@issue/neo4j/database/debugger'
import { driver } from '@issue/neo4j/database/driver'

export const connect = async () => {
  try {
    debug('Connecting...')
    const info = await driver.verifyConnectivity()
    debug(`Connected: ${info.version} at ${info.address}`)
    return info
  } catch (error) {
    if (error instanceof Neo4jError) {
      debug(`${error.name}:${error.code}\n${error.message}`)
    }
    process.exit()
  }
}
