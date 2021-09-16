import { OGM } from '@neo4j/graphql-ogm'
import { typeDefs } from '@issue/graphql/typeDefs'
import { driver } from '@issue/neo4j/database/driver'
import { config } from '@issue/neo4j/graphql/config'

export const ogm = new OGM({
  typeDefs,
  driver,
  config,
})
