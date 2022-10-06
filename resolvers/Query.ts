import { PrismaClient } from "@prisma/client";

export const Query = {

  cocktail: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

    const cocktail = await prisma.cocktail.findUnique({
      where: {
        id: parseInt(id),
      },
    })

    return cocktail ? cocktail : null 
  },

  cocktails: async ( parent: any, { filter }: { filter: { name: string }}, { prisma }: { prisma: PrismaClient }) => {

    return filter ?
    await prisma.cocktail.findMany({
      where: {
        name: {
          contains: filter.name
        }
      }
    }) :
    await prisma.cocktail.findMany()
  },

  landingSlide: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

    const slide =  await prisma.landingSlide.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return slide ? slide : null
  },

  landingSlides: async (parent: any, args: any, { prisma }: { prisma: PrismaClient }) => prisma.landingSlide.findMany(),

  user: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return user ? user : null 
  },

  users: async ( parent: any, { filter }: { filter: { age: number }}, { prisma }: { prisma: PrismaClient } ) => {

    return filter ? 
    await prisma.user.findMany({
      where: {
        age: {
          gt: filter.age
        }
      }
    }) :
    await prisma.user.findMany()
  },

  review: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

    const review = await prisma.review.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return review ? review : null 
  },

  reviews: (parent: any, args: any, { prisma }: { prisma: PrismaClient }) => prisma.review.findMany(),

};