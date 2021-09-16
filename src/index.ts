import { GRAPHQL_PATH, HTTP_HOST_NAME, HTTP_PORT } from '@issue/config'
import { extendIssueDebugger } from '@issue/utils'
import { app } from '@issue/express/app'
import { connect } from '@issue/neo4j/database'

const debug = extendIssueDebugger('http')

const start = async () => {
  debug('Server starting...')

  await connect()

  app.listen(+HTTP_PORT, HTTP_HOST_NAME, () => {
    debug(`Server started on http://${HTTP_HOST_NAME}:${HTTP_PORT}`)
    debug(`GraphQL path ${GRAPHQL_PATH}`)
  })
}

start()
