import { PrismaClient } from "@prisma/client";

export const User = {

  cocktails: async ({ id }: { id: number}, { filter }: { filter: { name: string }}, { prisma }: { prisma: PrismaClient }) => {

    if(filter) {
      const cocktailOfUser = await prisma.cocktail.findMany({
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

      return cocktailOfUser.length ? cocktailOfUser : null

    } else {
      const cocktailOfUser = await prisma.cocktail.findMany({
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

      return cocktailOfUser.length ? cocktailOfUser : null
    }
  },

  reviews: async ({ id }: { id: number}, args: any, { prisma }: { prisma: PrismaClient } ) => {

    const userReviews = await prisma.review.findMany({
      where: {
        userID: id
      }
    })

    return userReviews.length ? userReviews : null
  }
  
};