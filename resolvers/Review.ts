import { PrismaClient } from "@prisma/client";

export const Review = {

    userID: async ({ userID }: { userID: number}, args: any, { prisma }: { prisma: PrismaClient }) => {

        const userOfReview =  await prisma.user.findUnique({
            where: {
                id: userID
            },
        })

        return userOfReview
    },

    cocktailID: async ({ cocktailID }: { cocktailID: number}, args: any, { prisma }: { prisma: PrismaClient }) => {

        const cocktailOfReview =  await prisma.cocktail.findUnique({
            where: {
                id: cocktailID
            },
        })

        return cocktailOfReview
    }
    
};