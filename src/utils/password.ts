import bcrypt from 'bcrypt'

export const comparePassword = (
  plainText: string,
  hash: string,
): Promise<boolean> =>
  new Promise((resolve, reject) => {
    bcrypt.compare(plainText, hash, (err, result) => {
      if (err) {
        return reject(err)
      }

      return resolve(result)
    })
  })

export const hashPassword = (
  plainText: string,
  saltRounds = 10,
): Promise<string> =>
  new Promise((resolve, reject) => {
    bcrypt.hash(plainText, saltRounds, (err, hash) => {
      if (err) {
        reject(err)
      }

      resolve(hash)
    })
  })
