import { ReviewResolvers } from "../src/generated/graphql";

export const Review: ReviewResolvers = {

    users: async ({ userID }, { filter }, { prisma }) => {

        if(filter) {
            return await prisma.user.findMany({
              where: {
                age: {
                  gt: filter.age
                },
                cocktails: {
                  some: {
                    id: {
                      in: userID
                    }
                  }
                }
              }
            })
        } else {
            return await prisma.user.findMany({
              where: {
                cocktails: {
                  some: {
                    id: {
                      in: userID
                    }
                  }
                }
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
                users: {
                  some: {
                    id: {
                      in: cocktailID
                    }
                  }
                }
              }
            })
        } else {
            return await prisma.cocktail.findMany({
              where: {
                users: {
                  some: {
                    id: {
                      in: cocktailID
                    }
                  }
                }
              }
            })
        }
    }

};