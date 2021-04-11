const { ApolloServer, gql } = require('apollo-server-lambda');
import { Test } from './lib/test'

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: async () => {
          console.log('log test');
          console.error('error log test');
          const test = new Test('class&function call');
          console.log(await test.getMessage());
          return 'Hello world! Apolo!!!'
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
});

exports.handler = server.createHandler();