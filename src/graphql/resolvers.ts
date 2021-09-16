import { mergeDeep } from '@issue/utils'
import * as nodes from '@issue/graphql/nodes'

export const resolvers = mergeDeep(
  ...Object.values(nodes)
    .filter((node: any) => node.resolvers !== undefined)
    .map((node: any) => node.resolvers)
) as any
