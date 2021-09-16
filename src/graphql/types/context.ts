import type { ExpressGraphQLContext } from '@issue/express/graphql'
import type { Neo4jGraphQLContext } from '@issue/neo4j/graphql'

export type GraphQLContext = ExpressGraphQLContext & Neo4jGraphQLContext
