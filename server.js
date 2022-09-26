import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/schema';
import { Cocktail } from './resolvers/Cocktail';
import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { User } from './resolvers/User';
import { Review } from './resolvers/Review';
import { db } from './db/db';

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