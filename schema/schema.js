const { gql } = require('apollo-server');


exports.typeDefs = gql`
  type Query {
    cocktail(id: ID!): Cocktail
    cocktails(filter: CocktailsFilterInput): [Cocktail!]!
    landingSlide(id: ID!): LandingSlide
    landingSlides: [LandingSlide!]!
    user(id: ID!): User
    users(filter: UsersFilterInput): [User!]!
    review(id: ID!): Review
    reviews: [Review!]!
  }

  type Mutation {
    addLandingSlide(input: AddLandingSlideInput!): LandingSlide!
    deleteLandingSlide(id: ID!): Boolean!
    updateLandingSlide(id: ID!, input: UpdateLandingSlideInput!): LandingSlide!
  }

  type Cocktail {
    id: ID!
    name: String!
    howTo: String!
    ingredients: String!
    image: String!
    favorite: Boolean!
    userLiked(filter: UsersFilterInput): [User!]!
    reviews: [Review!]!
  }

  type LandingSlide {
    id: ID!
    title: String!
    text: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
    cocktails(filter: CocktailsFilterInput): [Cocktail!]!
    reviews: [Review!]!
  }

  type Review {
    id: ID!
    title: String!
    text: String!
    postedBy: User!
    cocktailID: Cocktail!
  }

  input CocktailsFilterInput {
    name: String
  }
  
  input UsersFilterInput {
    age: Int
  }

  input AddLandingSlideInput {
    title: String!
    text: String!
  }

  input UpdateLandingSlideInput {
    title: String!
    text: String!
  }

`;