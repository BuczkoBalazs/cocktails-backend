import { ReviewResolvers } from "../src/generated/graphql";

export const Review: ReviewResolvers = {

  users: async ({ userID }, args, { prisma }) => {

    return await prisma.user.findMany({
      where: {
        id: userID
      }
    })
  },

  cocktails: async ({ cocktailID }, args, { prisma }) => {

    return await prisma.cocktail.findMany({
      where: {
        id: cocktailID
      }
    })
  }

};