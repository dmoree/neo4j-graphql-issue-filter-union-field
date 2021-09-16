import debug from 'debug'

const NEO4J_GRAPHQL_NAMESPACE = '@neo4j/graphql'
const ISSUE_NAMESPACE = '@issue'

const issueDebugger = debug(ISSUE_NAMESPACE)

export const extendIssueDebugger: typeof issueDebugger.extend = (...params) =>
  issueDebugger.extend(...params)

// Overrides DEBUG .env variable
debug.enable(`${NEO4J_GRAPHQL_NAMESPACE}:* ${ISSUE_NAMESPACE}:*`)
