import { ReviewResolvers } from "../src/generated/graphql";

export const Review: ReviewResolvers = {

  user: async ({ userID }, args, { prisma }) => {

    return await prisma.user.findUnique({
      where: {
        id: userID
      }
    })
  },

  cocktail: async ({ cocktailID }, args, { prisma }) => {

    return await prisma.cocktail.findUnique({
      where: {
        id: cocktailID
      }
    })
  }

};