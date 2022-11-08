import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from './schema/schema';
import { Cocktail } from './resolvers/Cocktail';
import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { User } from './resolvers/User';
import { Review } from './resolvers/Review';

const prisma = new PrismaClient();

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
    prisma
  }
});

server.listen()
  .then(({ url }: { url: string }) => {
  console.log('Server is listening on ' + url);
});