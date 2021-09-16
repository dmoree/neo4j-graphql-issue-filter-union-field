namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development'
    PORT: number
    JWT_SECRET: string
    NEO4J_URL: string
    NEO4J_USER: string
    NEO4J_PASSWORD: string
    GRAPHQL_PATH: string
  }
}
