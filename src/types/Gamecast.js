const { gql} = require('apollo-server');

module.exports = gql`

type Gamecast {
    id: ID!
    name: String!
    url: String!
}

input CreateGamecastInput {
    name: String!
    url: String!
}

input UpdateGamecastInput {
    name: String
    url: String
}

input DeleteGamecastInput {
    id: ID!
}

type DeletePayload{
    id: ID!
}

type Query {
    gamecasts: [Gamecast]
}

type Mutation {
    createGamecast(input: CreateGamecastInput!): Gamecast!
    uptadeGamecast(id: ID!, input: UpdateGamecastInput!): Gamecast!
    deleteGamecast(id: ID!): DeletePayload!
}

`;