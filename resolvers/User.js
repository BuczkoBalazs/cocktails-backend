export const User = {

  cocktails: async ({ id }, { filter }, { prisma }) => {

    if(filter) {
      const cocktailOfUser = await prisma.cocktail.findMany({
        where: {
          name: {
            contains: filter.name
          },
          users: {
            some: {
              id: {
                in: id
              }
            }
          }
        }
      })

      return cocktailOfUser

    } else {
      const cocktailOfUser = await prisma.cocktail.findMany({
        where: {
          users: {
            some: {
              id: {
                in: id
              }
            }
          }
        }
      })

      return cocktailOfUser
    }
  },

  reviews: async ({ id }, args, { prisma }) => {

    const userReviews = await prisma.review.findMany({
      where: {
        userID: id
      }
    })

    return userReviews
  }
  
};