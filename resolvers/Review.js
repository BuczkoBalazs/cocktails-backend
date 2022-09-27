export const Review = {
    userID: async ({ userID }, args, { prisma }) => {
        const userOfReview =  await prisma.user.findUnique({
            where: {
                id: userID
            },
        })

        return userOfReview
    },
    cocktailID: async ({ cocktailID }, args, { prisma }) => {
        const cocktailOfReview =  await prisma.cocktail.findUnique({
            where: {
                id: cocktailID
            },
        })

        return cocktailOfReview
    }
};