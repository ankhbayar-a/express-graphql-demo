const express = require("express");
const {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const { gql } = require("apollo-server");
const { readFileSync } = require('fs');

const { ApolloServer } = require("apollo-server-express");

const dotenv = require("dotenv").config();
const colors = require("colors");

const connectDB = require("./config/db");

const typeDefs = gql(readFileSync('./Schema/TypeDefs.graphql', { encoding: 'utf-8' }));
const { resolvers } = require("./Schema/Resolvers");
const { Query } = require("./resolvers/Query")
const { Mutation } = require("./resolvers/Mutation")

const app = express();
const PORT = process.env.PORT || 4001;

connectDB();

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation
    },
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault({ footer: false })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql
  📭  Query at https://studio.apollographql.com/dev`)
);
