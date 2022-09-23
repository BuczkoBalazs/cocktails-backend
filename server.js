const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/schema');
const { Cocktail } = require('./resolvers/Cocktail');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');
const { User } = require('./resolvers/User');
const { Vote } = require('./resolvers/Vote')
const { db } = require('./db/db')

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Cocktail,
    Query,
    Mutation,
    User,
    Vote
  },
  context: {
    db
  }
});

server.listen()
  .then(({ url }) => {
  console.log('Server is listening on ' + url);
});