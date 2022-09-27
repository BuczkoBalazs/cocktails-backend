export const Mutation = {

    addLandingSlide: async (parent, { input }, { prisma }) => {

        const newLandingSlide = await prisma.landingSlide.create({
            data: { ...input }
        })

        return newLandingSlide
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

    addReview: async (parent, { input }, { prisma }) => {

        const newReview = await prisma.review.create({
            data: {
                title: input.title,
                text: input.text,
                userID: parseInt(input.userID),
                cocktailID: parseInt(input.cocktailID)
            }
        });
        
        console.log(newReview)
        return newReview

    },

    deleteReview: async (parent, { id }, { prisma } ) => {

        await prisma.review.delete({
            where: {
                id: parseInt(id)
            }
        })
        
        return true
    },

    updateReview: async (parent, { id, input }, { prisma }) => {

        const updateReview = await prisma.review.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...input
            }
        });

        return updateReview
    },

    addUser: async (parent, { input }, { prisma }) => {

        const newUser = await prisma.user.create({
            data:{ ...input }
        });
        
        return newUser
    },

    deleteUser: async (parent, { id }, { prisma } ) => {

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

        const deleteCocktailOfUser = prisma.cocktail.updateMany({
            where: {
                users: {
                    some: {
                      id: {
                        in: id
                      }
                    }
                }
            },
            data: {
                users: {
                    disconnect: [{ id: id}]
                }
            }
        })
          
        const transaction = await prisma.$transaction([ deleteReviews, deleteUser, deleteCocktailOfUser ])

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

        const newCocktail = await prisma.cocktail.create({
            data: { ...input }
        });

        return newCocktail
    },

    deleteCocktail: async (parent, { id }, { prisma } ) => {

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

        const deleteUserOfCocktail = prisma.users.updateMany({
            where: {
                cocktails: {
                    some: {
                      id: {
                        in: id
                      }
                    }
                }
            },
            data: {
                cocktails: {
                    disconnect: [{ id: id}]
                }
            }
        })
          
        const transaction = await prisma.$transaction([ deleteReviews, deleteCocktail, deleteUserOfCocktail ])

        return true
    },

    updateCocktail: async (parent, { id, input }, { prisma }) => {

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