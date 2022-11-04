import { ReviewResolvers } from "../src/generated/graphql";

export const Review: ReviewResolvers = {

  user: async ({ user }, args, { prisma }) => {

    return await prisma.user.findUnique({
      where: {
        id: user?.id
      }
    })
  },

  cocktail: async ({ cocktail }, args, { prisma }) => {

    return await prisma.cocktail.findUnique({
      where: {
        id: cocktail?.id
      }
    })
  }

};