exports.Cocktail = {
    userLiked: ({ userFav }, { filter }, { db }) => {
      return filter ?
      db.users.filter(user => userFav.includes(user.id) && user.age > filter.age) :
      db.users.filter(user => userFav.includes(user.id))
    },
    reviews: ({ id }, args, { db }) => {
      return db.reviews.filter(review => review.cocktailID === id)
    }
};