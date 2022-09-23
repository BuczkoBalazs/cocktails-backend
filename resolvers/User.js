exports.User = {
    cocktails: ({ id }, { filter }, { db }) => {
      return filter ? 
      db.cocktails.filter(cocktail => cocktail.userFav.includes(id) && cocktail.name.toLowerCase().includes(filter.name.toLowerCase())) :
      db.cocktails.filter(cocktail => cocktail.userFav.includes(id))
    },
    votes: ({ id }, args, { db }) => {
      return db.votes.filter(vote => vote.postedBy === id)
    }
};