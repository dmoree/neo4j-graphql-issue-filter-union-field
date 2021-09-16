import { Neo4jGraphQL } from '@neo4j/graphql'
import { NEO4J_GRAPHQL_JWT_SECRET } from '@issue/config'

export const config: NonNullable<Neo4jGraphQL['config']> = {
  jwt: {
    secret: NEO4J_GRAPHQL_JWT_SECRET,
  },
}
