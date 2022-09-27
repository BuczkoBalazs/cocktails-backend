export const Cocktail = {
  users: async ({ id }, { filter }, { prisma }) => {
    if(filter) {
      const userOfCocktail = await prisma.user.findMany({
        where: {
          age: {
            gt: filter.age
          },
          cocktails: {
            some: {
              id: {
                in: id
              }
            }
          }
        }
      })

      return userOfCocktail

    } else {
      const userOfCocktail = await prisma.user.findMany({
        where: {
          cocktails: {
            some: {
              id: {
                in: id
              }
            }
          }
        }
      })

      return userOfCocktail
    }
  },
  reviews: async ({ id }, args, { prisma }) => {
    const cocktailReviews = await prisma.review.findMany({
      where: {
        cocktailID: id
      }
    })

    return cocktailReviews
  }
};