import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../Context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddCocktailInput = {
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
};

export type AddLandingSlideInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type AddReviewInput = {
  cocktailID: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
  userID: Scalars['ID'];
};

export type AddUserInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Cocktail = {
  __typename?: 'Cocktail';
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
  reviews?: Maybe<Array<Review>>;
  users?: Maybe<Array<User>>;
};


export type CocktailUsersArgs = {
  filter?: InputMaybe<UsersFilterInput>;
};

export type CocktailsFilterInput = {
  name: Scalars['String'];
};

export type LandingSlide = {
  __typename?: 'LandingSlide';
  id: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCocktail: Cocktail;
  addLandingSlide: LandingSlide;
  addReview: Review;
  addUser: User;
  deleteCocktail: Scalars['Boolean'];
  deleteLandingSlide: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  updateCocktail: Cocktail;
  updateLandingSlide: LandingSlide;
  updateReview: Review;
  updateUser: User;
};


export type MutationAddCocktailArgs = {
  input: AddCocktailInput;
};


export type MutationAddLandingSlideArgs = {
  input: AddLandingSlideInput;
};


export type MutationAddReviewArgs = {
  input: AddReviewInput;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};


export type MutationDeleteCocktailArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLandingSlideArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCocktailArgs = {
  id: Scalars['ID'];
  input: UpdateCocktailInput;
};


export type MutationUpdateLandingSlideArgs = {
  id: Scalars['ID'];
  input: UpdateLandingSlideInput;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID'];
  input: UpdateReviewInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  cocktail?: Maybe<Cocktail>;
  cocktails?: Maybe<Array<Cocktail>>;
  landingSlide?: Maybe<LandingSlide>;
  landingSlides?: Maybe<Array<LandingSlide>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Review>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryCocktailArgs = {
  id: Scalars['ID'];
};


export type QueryCocktailsArgs = {
  filter?: InputMaybe<CocktailsFilterInput>;
};


export type QueryLandingSlideArgs = {
  id: Scalars['ID'];
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UsersFilterInput>;
};

export type Review = {
  __typename?: 'Review';
  cocktailID: Scalars['Int'];
  cocktails?: Maybe<Cocktail>;
  id: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
  userID: Scalars['Int'];
  users?: Maybe<User>;
};

export type UpdateCocktailInput = {
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateLandingSlideInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateReviewInput = {
  cocktailID: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
  userID: Scalars['Int'];
};

export type UpdateUserInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int'];
  cocktails?: Maybe<Array<Cocktail>>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  reviews?: Maybe<Array<Review>>;
};


export type UserCocktailsArgs = {
  filter?: InputMaybe<CocktailsFilterInput>;
};

export type UsersFilterInput = {
  age: Scalars['Int'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddCocktailInput: AddCocktailInput;
  AddLandingSlideInput: AddLandingSlideInput;
  AddReviewInput: AddReviewInput;
  AddUserInput: AddUserInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cocktail: ResolverTypeWrapper<Cocktail>;
  CocktailsFilterInput: CocktailsFilterInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LandingSlide: ResolverTypeWrapper<LandingSlide>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateCocktailInput: UpdateCocktailInput;
  UpdateLandingSlideInput: UpdateLandingSlideInput;
  UpdateReviewInput: UpdateReviewInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UsersFilterInput: UsersFilterInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddCocktailInput: AddCocktailInput;
  AddLandingSlideInput: AddLandingSlideInput;
  AddReviewInput: AddReviewInput;
  AddUserInput: AddUserInput;
  Boolean: Scalars['Boolean'];
  Cocktail: Cocktail;
  CocktailsFilterInput: CocktailsFilterInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LandingSlide: LandingSlide;
  Mutation: {};
  Query: {};
  Review: Review;
  String: Scalars['String'];
  UpdateCocktailInput: UpdateCocktailInput;
  UpdateLandingSlideInput: UpdateLandingSlideInput;
  UpdateReviewInput: UpdateReviewInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UsersFilterInput: UsersFilterInput;
}>;

export type CocktailResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Cocktail'] = ResolversParentTypes['Cocktail']> = ResolversObject<{
  favorite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  howTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ingredients?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<ResolversTypes['Review']>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, Partial<CocktailUsersArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LandingSlideResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LandingSlide'] = ResolversParentTypes['LandingSlide']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addCocktail?: Resolver<ResolversTypes['Cocktail'], ParentType, ContextType, RequireFields<MutationAddCocktailArgs, 'input'>>;
  addLandingSlide?: Resolver<ResolversTypes['LandingSlide'], ParentType, ContextType, RequireFields<MutationAddLandingSlideArgs, 'input'>>;
  addReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationAddReviewArgs, 'input'>>;
  addUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'input'>>;
  deleteCocktail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCocktailArgs, 'id'>>;
  deleteLandingSlide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteLandingSlideArgs, 'id'>>;
  deleteReview?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  updateCocktail?: Resolver<ResolversTypes['Cocktail'], ParentType, ContextType, RequireFields<MutationUpdateCocktailArgs, 'id' | 'input'>>;
  updateLandingSlide?: Resolver<ResolversTypes['LandingSlide'], ParentType, ContextType, RequireFields<MutationUpdateLandingSlideArgs, 'id' | 'input'>>;
  updateReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationUpdateReviewArgs, 'id' | 'input'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  cocktail?: Resolver<Maybe<ResolversTypes['Cocktail']>, ParentType, ContextType, RequireFields<QueryCocktailArgs, 'id'>>;
  cocktails?: Resolver<Maybe<Array<ResolversTypes['Cocktail']>>, ParentType, ContextType, Partial<QueryCocktailsArgs>>;
  landingSlide?: Resolver<Maybe<ResolversTypes['LandingSlide']>, ParentType, ContextType, RequireFields<QueryLandingSlideArgs, 'id'>>;
  landingSlides?: Resolver<Maybe<Array<ResolversTypes['LandingSlide']>>, ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewArgs, 'id'>>;
  reviews?: Resolver<Maybe<Array<ResolversTypes['Review']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
}>;

export type ReviewResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  cocktailID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cocktails?: Resolver<Maybe<ResolversTypes['Cocktail']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cocktails?: Resolver<Maybe<Array<ResolversTypes['Cocktail']>>, ParentType, ContextType, Partial<UserCocktailsArgs>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<ResolversTypes['Review']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Cocktail?: CocktailResolvers<ContextType>;
  LandingSlide?: LandingSlideResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

