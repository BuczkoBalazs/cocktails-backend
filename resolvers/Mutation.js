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
    }
}