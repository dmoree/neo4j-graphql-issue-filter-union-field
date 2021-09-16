import * as nodes from '@issue/graphql/nodes'

export const typeDefs = Object.values(nodes).map((node) => node.typeDefs)
