import { PrismaClient } from "@prisma/client";

export const Cocktail = {
  
  users: async ({ id }: { id: number }, { filter }: { filter: { age: number }}, { prisma }: { prisma: PrismaClient }) => {

    if(filter) {
      const userOfCocktail = await prisma.user.findMany({
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

      return userOfCocktail.length ? userOfCocktail : null

    } else {
      const userOfCocktail = await prisma.user.findMany({
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

      return userOfCocktail.length ? userOfCocktail : null
    }
  },
  
  reviews: async ({ id }: { id: number}, args: any, { prisma }: { prisma: PrismaClient }) => {

    const cocktailReviews = await prisma.review.findMany({
      where: {
        cocktailID: id
      }
    })

    return cocktailReviews.length ? cocktailReviews : null
  }

};