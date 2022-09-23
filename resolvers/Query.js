exports.Query = {
    cocktail: (parent, { id }, { db }) => {
        const cocktail = db.cocktails.find(cocktail => cocktail.id === id)
        return cocktail ? cocktail : null 
    },
    cocktails: (parent, { filter }, { db }) => {
      return filter ?
      db.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(filter.name.toLowerCase())) :
      db.cocktails
    },
    landingSlide: (parent, { id }, { db }) => {
        const slide = db.landingSlides.find(slide => slide.id === id)
        return slide ? slide : null 
    },
    landingSlides: (parent, args, { db }) => db.landingSlides,
    user: (parent, { id }, { db }) => {
      const user = db.users.find(user => user.id === id)
      return user ? user : null 
    },
    users: (parent, { filter }, { db }) => {
      return filter ? 
      db.users.filter(user => user.age > filter.age) :
      db.users
    },
    review: (parent, { id }, { db }) => {
        const review = db.reviews.find(review => review.id === id)
        return review ? review : null 
      },
    reviews: (parent, args, { db }) => db.reviews,
};