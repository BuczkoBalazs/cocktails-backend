import { MutationResolvers } from "../src/generated/graphql"

export const Mutation: MutationResolvers = {

    addLandingSlide: async (parent, { input }, { prisma }) => {

        return await prisma.landingSlide.create({
            data: { ...input }
        })
    },

    deleteLandingSlide: async (parent, { id }, { prisma } ) => {
        
        await prisma.landingSlide.delete({
            where: {
                id: parseInt(id)
            }
        })
        return true
    },

    updateLandingSlide: async (parent, { id, input }, { prisma }) => {

        return await prisma.landingSlide.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...input
            }
        });
    },

    addReview: async (parent, { input }, { prisma }) => {

        const { title, text, userID, cocktailID} = input

        return await prisma.review.create({
            data: {
                title: title,
                text: text,
                userID: parseInt(userID),
                cocktailID: parseInt(cocktailID)
            }
        });
    },

    deleteReview: async (parent, { id }, { prisma }) => {

        await prisma.review.delete({
            where: {
                id: parseInt(id)
            }
        })
        
        return true
    },

    updateReview: async (parent: any, { id, input }, { prisma }) => {

        const { title, text, userID, cocktailID} = input

        return await prisma.review.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title: title,
                text: text,
                userID: userID,
                cocktailID: cocktailID
            }
        });
    },

    addUser: async (parent: any, { input } , { prisma }) => {

        return await prisma.user.create({
            data:{ ...input }
        });
    },

    deleteUser: async (parent, { id }, { prisma }) => {

        const deleteReviews = prisma.review.deleteMany({
            where: {
              userID: parseInt(id),
            },
        })
          
        const deleteUser = prisma.user.delete({
            where: {
              id: parseInt(id)
            },
        })
          
        const transaction = await prisma.$transaction([ deleteReviews, deleteUser ])

        return true
    },

    updateUser: async (parent, { id, input }, { prisma }) => {

        const updateUser = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...input
            }
        });

        return updateUser
    },

    addCocktail: async (parent, { input }, { prisma }) => {

        return await prisma.cocktail.create({
            data: { ...input }
        });
    },

    deleteCocktail: async (parent: any, { id }, { prisma }) => {

        const deleteReviews = prisma.review.deleteMany({
            where: {
              cocktailID: parseInt(id),
            },
        })
          
        const deleteCocktail = prisma.cocktail.delete({
            where: {
              id: parseInt(id)
            },
        })

        const transaction = await prisma.$transaction([ deleteReviews, deleteCocktail ])

        return true
    },

    updateCocktail: async (parent, { id, input }, { prisma }) => {

        return await prisma.cocktail.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...input
            }
        });
    }

}