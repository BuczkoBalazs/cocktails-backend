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
    }
}