import gql from 'graphql-tag'

export const typeDefs = gql`
  type Director {
    id: ID! @id
    name: String!

    movies: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
  }

  type Actor {
    id: ID! @id
    name: String!

    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }

  union Person = Director | Actor

  type Movie {
    id: ID! @id
    title: String!

    directors: [Director!]! @relationship(type: "DIRECTED", direction: IN)
    actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)

    people: [Person!]! @relationship(type: "HAS_PERSON", direction: OUT)
  }
`
