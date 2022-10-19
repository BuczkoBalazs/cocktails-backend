import { ReviewResolvers } from "../src/generated/graphql";

export const Review: ReviewResolvers = {

    userID: async ({ userID }, args, { prisma }) => {

        return await prisma.user.findUnique({
            where: {
                id: userID
            },
        })
    },

    cocktailID: async ({ cocktailID }, args, { prisma }) => {

        return  await prisma.cocktail.findUnique({
            where: {
                id: cocktailID
            },
        })
    }
    
};