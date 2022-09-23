exports.Query = {
    cocktail: (parent, { id }, { db }) => {
        const cocktail = db.cocktails.find(cocktail => cocktail.id === id)
        return cocktail ? cocktail : null 
    },
    cocktails: (parent, { filter }, { db }) => {
      return filter ?
      db.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(filter.name.toLowerCase())) :
      cocktails
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
    vote: (parent, { id }, { db }) => {
        const vote = db.votes.find(vote => vote.id === id)
        return vote ? vote : null 
      },
    votes: (parent, args, { db }) => db.votes,
};