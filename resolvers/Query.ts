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

    if(filter) {
      const cocktails = await prisma.cocktail.findMany({
        where: {
          name: {
            contains: filter.name
          }
        }
      })

      return cocktails.length ? cocktails : null
    } else {
      const cocktails = await prisma.cocktail.findMany();

      return cocktails.length ? cocktails : null
    }
  },

  landingSlide: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

    const slide =  await prisma.landingSlide.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return slide ? slide : null
  },

  landingSlides: async (parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
    
    const slides = await prisma.landingSlide.findMany();

    return slides.length ? slides : null

  },

  user: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return user ? user : null 
  },

  users: async ( parent: any, { filter }: { filter: { age: number }}, { prisma }: { prisma: PrismaClient } ) => {

    if(filter) {
      const users = await prisma.user.findMany({
        where: {
          age: {
            gt: filter.age
          }
        }
      })

      return users.length ? users : null
    } else {
      const users = await prisma.user.findMany();

      return users.length ? users : null
    }
  },

  review: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

    const review = await prisma.review.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return review ? review : null 
  },

  reviews: async (parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {

    const reviews = await prisma.review.findMany();

    return reviews.length ? reviews : null
  }
};