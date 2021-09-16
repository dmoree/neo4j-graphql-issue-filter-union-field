import { Neo4jGraphQL } from '@neo4j/graphql'
import { config } from '@issue/neo4j/graphql/config'
import { typeDefs } from '@issue/graphql/typeDefs'
import { resolvers } from '@issue/graphql/resolvers'

export const { schema, nodes, document } = new Neo4jGraphQL({
  config,
  typeDefs,
  resolvers,
})
