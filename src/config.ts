import 'dotenv/config'

export const {
  HTTP_HOST_NAME = 'localhost',
  HTTP_PORT = 4000,
  GRAPHQL_PATH = '/graphql',
  NODE_ENV = 'development',
  NEO4J_GRAPHQL_JWT_SECRET = 'secret',
  NEO4J_URL = 'neo4j://localhost:7687/neo4j',
  NEO4J_USER = 'neo4j',
  NEO4J_PASSWORD = 'password',
} = process.env
