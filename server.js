import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/schema.js';
import { Cocktail } from './resolvers/Cocktail.js';
import { Query } from './resolvers/Query.js';
import { Mutation } from './resolvers/Mutation.js';
import { User } from './resolvers/User.js';
import { Review } from './resolvers/Review.js';
import { db } from './db/db.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Cocktail,
    Query,
    Mutation,
    User,
    Review
  },
  context: {
    db
  }
});

server.listen()
  .then(({ url }) => {
  console.log('Server is listening on ' + url);
});