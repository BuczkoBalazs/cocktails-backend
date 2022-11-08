import { QueryResolvers } from "../src/generated/graphql";

export const Query: QueryResolvers = {

  cocktail: async (parent, { id }, { prisma } ) => {

    return await prisma.cocktail.findUnique({
      where: {
        id: parseInt(id),
      },
    })
  },

  cocktails: async ( parent, { filter }, { prisma } ) => {

    if(filter) {
      return await prisma.cocktail.findMany({
        where: {
          name: {
            contains: filter.name
          }
        }
      })
    } else {
      return await prisma.cocktail.findMany();
    }
  },

  landingSlide: async (parent, { id }, { prisma } ) => {

    return await prisma.landingSlide.findUnique({
      where: {
        id: parseInt(id),
      },
    })
  },

  landingSlides: async (parent, args, { prisma }) => {
    
    return await prisma.landingSlide.findMany();

  },

  user: async (parent, { id }, { prisma }) => {

    return await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    })
  },

  users: async ( parent, { filter }, { prisma } ) => {

    if(filter) {
      return await prisma.user.findMany({
        where: {
          age: {
            gt: filter.age
          }
        }
      })
    } else {
      return await prisma.user.findMany();
    }
  },

  review: async (parent, { id }, { prisma } ) => {

    return await prisma.review.findUnique({
      where: {
        id: parseInt(id),
      },
    })
  },

  reviews: async (parent, args, { prisma }) => {

    return await prisma.review.findMany();
  }
};