exports.Mutation = {
    addLandingSlide: (parent, { input }, { db }) => {

        const { title, text } = input;

        const newLandingSlide = {
            id: db.landingSlides.length.toString(),
            title: input.title,
            text: input.text
        }

        db.landingSlides.push(newLandingSlide)

        return newLandingSlide
    },
    deleteLandingSlide: (parent, { id }, { db } ) => {
        db.landingSlides = db.landingSlides.filter(slide => slide.id !== id);
        return true
    },
    updateLandingSlide: (parent, { id, input }, { db }) => {
        const index = db.landingSlides.findIndex(slide => slide.id === id);
        db.landingSlides[index] = {
            ...db.landingSlides[index],
            ...input
        }
        return db.landingSlides[index]
    },
    addReview: (parent, { input }, { db }) => {
        
        const { title, text, postedBy, cocktailID } = input;
        
        const newReview = {
            id: db.reviews.length.toString(),
            title: title,
            text: text,
            postedBy: postedBy,
            cocktailID: cocktailID
        }
        
        db.reviews.push(newReview)
        
        return newReview
    },
    deleteReview: (parent, { id }, { db } ) => {
        db.reviews = db.reviews.filter(review => review.id !== id);
        return true
    },
    updateReview: (parent, { id, input }, { db }) => {
        const index = db.reviews.findIndex(review => review.id === id);
        db.reviews[index] = {
            ...db.reviews[index],
            ...input
        }
        return db.reviews[index]
    },
    addUser: (parent, { input }, { db }) => {
        
        const { name, email, age } = input;
        
        const newUser = {
            id: db.users.length.toString(),
            name: name,
            email: email,
            age: age
        }
        
        db.users.push(newUser)
        
        return newUser
    },
    deleteUser: (parent, { id }, { db } ) => {
        db.users = db.users.filter(user => user.id !== id);
        db.reviews = db.reviews.filter(review => review.postedBy !== id);
        db.cocktails = db.cocktails.map(cocktail => {
            if(cocktail.userFav.includes(id)) {
                const index = cocktail.userFav.findIndex(userID => userID === id)
                cocktail = {
                    ...cocktail,
                    ...cocktail.userFav.splice(index, 1)
                }
            }
            return cocktail
        })
        return true
    },
    updateUser: (parent, { id, input }, { db }) => {
        const index = db.users.findIndex(user => user.id === id);
        db.users[index] = {
            ...db.users[index],
            ...input
        }
        return db.users[index]
    },
    addCocktail: (parent, { input }, { db }) => {
        
        const { name, howTo, ingredients, image, favorite, userFav } = input;
        
        const newCocktail = {
            id: db.cocktails.length.toString(),
            name: name,
            howTo: howTo,
            ingredients: ingredients,
            image: image,
            favorite: favorite,
            userFav: userFav
        }
        
        db.cocktails.push(newCocktail)
        
        return newCocktail
    },
    deleteCocktail: (parent, { id }, { db } ) => {
        db.cocktails = db.cocktails.filter(cocktail => cocktail.id !== id);
        db.reviews = db.reviews.filter(review => review.cocktailID !== id)
        return true
    },
    updateCocktail: (parent, { id, input }, { db }) => {
        const index = db.cocktails.findIndex(cocktail => cocktail.id === id);
        db.cocktails[index] = {
            ...db.cocktails[index],
            ...input
        }
        return db.cocktails[index]
    }
}