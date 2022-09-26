export const Review = {
    postedBy: ({ postedBy }, args, { db }) => {
        return db.users.find( user => user.id === postedBy)
    },
    cocktailID: ({ cocktailID }, args, { db}) => {
        return db.cocktails.find( cocktail => cocktail.id === cocktailID)
    }
};