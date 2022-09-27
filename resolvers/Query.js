export const Query = {
  cocktail: async (parent, { id }, { prisma }) => {
    const cocktail = prisma.cocktail.findUnique({
      where: {
        id: parseInt(id),
      },
    })

    return cocktail ? cocktail : null 
  },
  cocktails: async (parent, { filter }, { prisma }) => {
    return filter ?
    await prisma.cocktail.findMany({
      where: {
        name: {
          contains: filter.name
        }
      }
    }) :
    await prisma.cocktail.findMany()
  },
  landingSlide: async (parent, { id }, { prisma }) => {
    const slide =  await prisma.landingSlide.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return slide ? slide : null
  },
  landingSlides: async (parent, args, { prisma }) => prisma.landingSlide.findMany(),
  user: async (parent, { id }, { prisma }) => {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return user ? user : null 
  },
  users: async (parent, { filter }, { prisma }) => {
    return filter ? 
    await prisma.user.findMany({
      where: {
        age: {
          gt: filter.age
        }
      }
    }) :
    await prisma.user.findMany()
  },
  review: async (parent, { id }, {prisma }) => {
    const review = await prisma.review.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return review ? review : null 
    },
  reviews: (parent, args, { prisma }) => prisma.review.findMany(),
};