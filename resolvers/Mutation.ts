import { PrismaClient } from "@prisma/client"

export const Mutation = {

    addLandingSlide: async (parent: any, { input }: { input: { title: string, text: string}}, { prisma }: { prisma: PrismaClient }) => {

        const newLandingSlide = await prisma.landingSlide.create({
            data: { ...input }
        })

        return newLandingSlide
    },

    deleteLandingSlide: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient } ) => {
        
        await prisma.landingSlide.delete({
            where: {
                id: parseInt(id)
            }
        })

        return true
    },

    updateLandingSlide: async (parent: any, { id, input }: { id: string, input: { title: string, text: string }}, { prisma }: { prisma: PrismaClient }) => {

        const updateLandingSlide = await prisma.landingSlide.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...input
            }
        });

        return updateLandingSlide
    },

    addReview: async (parent: any, { input }: { input: { title: string, text: string, userID: string, cocktailID: string}}, { prisma }: { prisma: PrismaClient }) => {

        const { title, text, userID, cocktailID} = input

        const newReview = await prisma.review.create({
            data: {
                title: title,
                text: text,
                userID: parseInt(userID),
                cocktailID: parseInt(cocktailID)
            }
        });
        
        return newReview

    },

    deleteReview: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

        await prisma.review.delete({
            where: {
                id: parseInt(id)
            }
        })
        
        return true
    },

    updateReview: async (parent: any, { id, input }: { id: string, input: { title: string, text: string, userID: string, cocktailID: string}}, { prisma }: { prisma: PrismaClient }) => {

        const { title, text, userID, cocktailID} = input

        const updateReview = await prisma.review.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title: title,
                text: text,
                userID: parseInt(userID),
                cocktailID: parseInt(cocktailID)
            }
        });

        return updateReview
    },

    addUser: async (parent: any, { input }: { input: { name: string, email: string, age: number}} , { prisma }: { prisma: PrismaClient }) => {

        const newUser = await prisma.user.create({
            data:{ ...input }
        });
        
        return newUser
    },

    deleteUser: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

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

    updateUser: async (parent: any, { id, input }: { id: string, input: { name: string, email: string, age: number}}, { prisma }: { prisma: PrismaClient }) => {

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

    addCocktail: async (parent: any, { input }: { input: { name: string, howTo: string, ingredients: string, image: string, favorite: boolean}}, { prisma }: { prisma: PrismaClient }) => {

        const newCocktail = await prisma.cocktail.create({
            data: { ...input }
        });

        return newCocktail
    },

    deleteCocktail: async (parent: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => {

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

    updateCocktail: async (parent: any, { id, input }: { id: string, input: { name: string, howTo: string, ingredients: string, image: string, favorite: boolean}}, { prisma }: { prisma: PrismaClient }) => {

        const updateCocktail = await prisma.cocktail.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...input
            }
        });

        return updateCocktail
    }

}