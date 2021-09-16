import type { JwtPayload } from 'jsonwebtoken'

export type Neo4jGraphQLContext = {
  jwt: JwtPayload
  auth: {
    isAuthenticated: boolean
    roles: string[]
    jwt: JwtPayload
  }
}
