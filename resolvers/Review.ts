import { ReviewResolvers } from "../src/generated/graphql";

export const Review: ReviewResolvers = {

    users: async ({ userID }, { filter }, { prisma }) => {

        if(filter) {
            return await prisma.user.findMany({
              where: {
                age: {
                  gt: filter.age,
                },
                id: userID
            }})
        } else {
            return await prisma.user.findMany({
                where: {
                    id: userID
                }
            })
        }
    },

    cocktails: async ({ cocktailID }, { filter }, { prisma }) => {

        if(filter) {
            return await prisma.cocktail.findMany({
              where: {
                name: {
                  contains: filter.name
                },
                id: cocktailID
              }
            })
        } else {
            return await prisma.cocktail.findMany({
              where: {
                    id: {
                      in: cocktailID
                    }
                }
            })
        }
    }

};