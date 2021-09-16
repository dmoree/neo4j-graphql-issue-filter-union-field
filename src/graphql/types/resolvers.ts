import type { Resolvers } from './codegen.__generated__'

export type RequiredResolvers<
  K extends keyof NonNullable<Resolvers>,
  L extends keyof NonNullable<Resolvers[K]>
> = {
  [Key in K]-?: {
    [SubKey in L]-?: NonNullable<Resolvers[K]>[L]
  }
}

export type RequiredMutationResolvers<
  K extends keyof NonNullable<Resolvers['Mutation']>
> = RequiredResolvers<'Mutation', K>

export type RequiredQueryResolvers<
  K extends keyof NonNullable<Resolvers['Query']>
> = RequiredResolvers<'Query', K>
