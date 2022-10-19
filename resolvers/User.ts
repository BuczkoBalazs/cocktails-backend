import { UserResolvers } from "../src/generated/graphql";

export const User: UserResolvers = {

  cocktails: async ({ id }, { filter }, { prisma }) => {

    if(filter) {
      return await prisma.cocktail.findMany({
        where: {
          name: {
            contains: filter.name
          },
          users: {
            some: {
              id: {
                in: id
              }
            }
          }
        }
      })
    } else {
      return await prisma.cocktail.findMany({
        where: {
          users: {
            some: {
              id: {
                in: id
              }
            }
          }
        }
      })
    }
  },

/*   reviews: async ({ id }, args, { prisma } ) => {

    return await prisma.review.findMany({
      where: {
        userID: id
      }
    })
  } */
  
};