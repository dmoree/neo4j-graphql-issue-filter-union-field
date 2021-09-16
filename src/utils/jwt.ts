import jwt from 'jsonwebtoken'
import { NEO4J_GRAPHQL_JWT_SECRET } from '@issue/config'

export const encodeJWT = ({ sub }: { sub: string }): Promise<string> =>
  new Promise((resolve, reject) => {
    jwt.sign(
      { sub },
      NEO4J_GRAPHQL_JWT_SECRET,
      { algorithm: 'HS256' },
      (err, token) => {
        if (err) return reject(err)
        if (!token) return reject(Error('Unable to encode jwt'))
        return resolve(token)
      }
    )
  })
