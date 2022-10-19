import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    cocktail(id: ID!): Cocktail
    cocktails(filter: CocktailsFilterInput): [Cocktail!]
    landingSlide(id: ID!): LandingSlide
    landingSlides: [LandingSlide!]
    user(id: ID!): User
    users(filter: UsersFilterInput): [User!]
    review(id: ID!): Review
    reviews: [Review!]
  }

  type Mutation {
    addLandingSlide(input: AddLandingSlideInput!): LandingSlide!
    deleteLandingSlide(id: ID!): Boolean!
    updateLandingSlide(id: ID!, input: UpdateLandingSlideInput!): LandingSlide!
    addReview(input: AddReviewInput!): Review!
    deleteReview(id: ID!): Boolean!
    updateReview(id: ID!, input: UpdateReviewInput!): Review!
    addUser(input: AddUserInput!): User!
    deleteUser(id: ID!): Boolean!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    addCocktail(input: AddCocktailInput!): Cocktail!
    deleteCocktail(id: ID!): Boolean!
    updateCocktail(id: ID!, input: UpdateCocktailInput!): Cocktail!
  }

  type Cocktail {
    id: Int!
    name: String!
    howTo: String!
    ingredients: String!
    image: String!
    favorite: Boolean!
    users(filter: UsersFilterInput): [User!]
    reviews: [Review!]
  }

  type LandingSlide {
    id: Int!
    title: String!
    text: String!
  }

  type User {
    id: Int!
    name: String!
    email: String!
    age: Int!
    cocktails(filter: CocktailsFilterInput): [Cocktail!]
    reviews: [Review!]
  }

  type Review {
    id: Int!
    title: String!
    text: String!
    users: [User!]
    userID: Int!
    cocktails: [Cocktail!]
    cocktailID: Int!
  }

  input CocktailsFilterInput {
    name: String!
  }
  
  input UsersFilterInput {
    age: Int!
  }

  input AddLandingSlideInput {
    title: String!
    text: String!
  }

  input UpdateLandingSlideInput {
    title: String!
    text: String!
  }

  input AddReviewInput {
    title: String!
    text: String!
    userID: ID!
    cocktailID: ID!
  }

  input UpdateReviewInput {
    title: String!
    text: String!
    userID: Int!
    cocktailID: Int!
  }

  input AddUserInput {
    name: String!
    email: String!
    age: Int!
  }

  input UpdateUserInput {
    name: String!
    email: String!
    age: Int!
  }

  input AddCocktailInput {
    name: String!
    howTo: String!
    ingredients: String!
    image: String!
    favorite: Boolean!
  }

  input UpdateCocktailInput {
    name: String!
    howTo: String!
    ingredients: String!
    image: String!
    favorite: Boolean!
  }
`;