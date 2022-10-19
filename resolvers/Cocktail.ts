import { CocktailResolvers } from "../src/generated/graphql";

export const Cocktail: CocktailResolvers = {
  
  users: async ({ id }, { filter }, { prisma }) => {

    if(filter) {
      return await prisma.user.findMany({
        where: {
          age: {
            gt: filter.age
          },
          cocktails: {
            some: {
              id: {
                in: id
              }
            }
          }
        }
      })
    } else {
      return await prisma.user.findMany({
        where: {
          cocktails: {
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
  
  reviews: async ({ id }, args, { prisma }) => {

    return await prisma.review.findMany({
      where: {
        cocktailID: id
      }
    })
  }

};