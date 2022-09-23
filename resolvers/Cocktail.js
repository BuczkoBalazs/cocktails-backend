exports.Cocktail = {
    userLiked: ({ userFav }, { filter }, { db }) => {
      return filter ?
      db.users.filter(user => userFav.includes(user.id) && user.age > filter.age) :
      db.users.filter(user => userFav.includes(user.id))
    },
    votes: ({ id }, args, { db }) => {
      return db.votes.filter(vote => vote.cocktailID === id)
    }
};