export const User = {
    cocktails: ({ id }, { filter }, { db }) => {
      return filter ? 
      db.cocktails.filter(cocktail => cocktail.userFav.includes(id) && cocktail.name.toLowerCase().includes(filter.name.toLowerCase())) :
      db.cocktails.filter(cocktail => cocktail.userFav.includes(id))
    },
    reviews: ({ id }, args, { db }) => {
      return db.reviews.filter(review => review.postedBy === id)
    }
};