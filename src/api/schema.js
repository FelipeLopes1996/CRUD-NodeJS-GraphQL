// import resolvers from "./resolvers";
// import { makeExecutableSchema } from "graphql-tools";
const resolvers = require ('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')
// const { gql } = require('a')

const userAtt = `
    id: ID
    name: String!
    email: String!
    password: String!
`;

const typeDefs = `
    type User {
        ${userAtt}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${userAtt}
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID, input: UserInput): User
        destroyUser(id: ID): User
    }
`;
module.exports = makeExecutableSchema({ typeDefs, resolvers })

// updateUser(id: String, input: UserInput): User