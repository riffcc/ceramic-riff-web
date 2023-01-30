/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A Ceramic Commit ID */
  CeramicCommitID: any;
  /** A Ceramic Stream ID */
  CeramicStreamID: any;
};

export type Admin = Node & {
  __typename?: 'Admin';
  admin?: Maybe<EthAccount>;
  adminID: Scalars['CeramicStreamID'];
  id: Scalars['ID'];
  inactive?: Maybe<Scalars['Boolean']>;
  metadata: AdminMetadata;
  super: Scalars['Boolean'];
  website?: Maybe<Website>;
  websiteID: Scalars['CeramicStreamID'];
};

/** A connection to a list of items. */
export type AdminConnection = {
  __typename?: 'AdminConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AdminEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AdminEdge = {
  __typename?: 'AdminEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Admin>;
};

export type AdminInput = {
  adminID: Scalars['CeramicStreamID'];
  inactive?: InputMaybe<Scalars['Boolean']>;
  metadata: AdminMetadataInput;
  super: Scalars['Boolean'];
  websiteID: Scalars['CeramicStreamID'];
};

export type AdminMetadata = {
  __typename?: 'AdminMetadata';
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type AdminMetadataInput = {
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Category = Node & {
  __typename?: 'Category';
  dislikes: CategoryDislikeConnection;
  dislikesCount: Scalars['Int'];
  id: Scalars['ID'];
  likes: CategoryLikeConnection;
  likesCount: Scalars['Int'];
  name: Scalars['String'];
  pieces: PieceConnection;
  piecesCount: Scalars['Int'];
  website?: Maybe<Website>;
  websiteID: Scalars['CeramicStreamID'];
};


export type CategoryDislikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CategoryDislikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type CategoryLikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CategoryLikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type CategoryPiecesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CategoryPiecesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryDislike = Node & {
  __typename?: 'CategoryDislike';
  category?: Maybe<Category>;
  categoryID: Scalars['CeramicStreamID'];
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type CategoryDislikeConnection = {
  __typename?: 'CategoryDislikeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryDislikeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategoryDislikeEdge = {
  __typename?: 'CategoryDislikeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CategoryDislike>;
};

export type CategoryDislikeInput = {
  categoryID: Scalars['CeramicStreamID'];
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Category>;
};

export type CategoryInput = {
  name: Scalars['String'];
  websiteID: Scalars['CeramicStreamID'];
};

export type CategoryLike = Node & {
  __typename?: 'CategoryLike';
  category?: Maybe<Category>;
  categoryID: Scalars['CeramicStreamID'];
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type CategoryLikeConnection = {
  __typename?: 'CategoryLikeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryLikeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategoryLikeEdge = {
  __typename?: 'CategoryLikeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CategoryLike>;
};

export type CategoryLikeInput = {
  categoryID: Scalars['CeramicStreamID'];
};

export type CeramicAccount = Node & {
  __typename?: 'CeramicAccount';
  adminList?: Maybe<AdminConnection>;
  categoryDislikeList?: Maybe<CategoryDislikeConnection>;
  categoryLikeList?: Maybe<CategoryLikeConnection>;
  categoryList?: Maybe<CategoryConnection>;
  ethAccountList?: Maybe<EthAccountConnection>;
  featuredList?: Maybe<FeaturedConnection>;
  /** Globally unique identifier of the account (DID string) */
  id: Scalars['ID'];
  /** Whether the Ceramic instance is currently authenticated with this account or not */
  isViewer: Scalars['Boolean'];
  pieceDislikeList?: Maybe<PieceDislikeConnection>;
  pieceLikeList?: Maybe<PieceLikeConnection>;
  pieceList?: Maybe<PieceConnection>;
  subscriptionList?: Maybe<SubscriptionConnection>;
  websiteList?: Maybe<WebsiteConnection>;
};


export type CeramicAccountAdminListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountCategoryDislikeListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountCategoryLikeListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountCategoryListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountEthAccountListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountFeaturedListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountPieceDislikeListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountPieceLikeListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountPieceListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountSubscriptionListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountWebsiteListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CreateAdminInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: AdminInput;
};

export type CreateAdminPayload = {
  __typename?: 'CreateAdminPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Admin;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateAdminPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreateCategoryDislikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: CategoryDislikeInput;
};

export type CreateCategoryDislikePayload = {
  __typename?: 'CreateCategoryDislikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: CategoryDislike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateCategoryDislikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreateCategoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: CategoryInput;
};

export type CreateCategoryLikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: CategoryLikeInput;
};

export type CreateCategoryLikePayload = {
  __typename?: 'CreateCategoryLikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: CategoryLike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateCategoryLikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Category;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateCategoryPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreateEthAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: EthAccountInput;
};

export type CreateEthAccountPayload = {
  __typename?: 'CreateEthAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: EthAccount;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateEthAccountPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreateFeaturedInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: FeaturedInput;
};

export type CreateFeaturedPayload = {
  __typename?: 'CreateFeaturedPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Featured;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateFeaturedPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreatePieceDislikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PieceDislikeInput;
};

export type CreatePieceDislikePayload = {
  __typename?: 'CreatePieceDislikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: PieceDislike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreatePieceDislikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreatePieceInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PieceInput;
};

export type CreatePieceLikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PieceLikeInput;
};

export type CreatePieceLikePayload = {
  __typename?: 'CreatePieceLikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: PieceLike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreatePieceLikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreatePiecePayload = {
  __typename?: 'CreatePiecePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Piece;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreatePiecePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreateSubscriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: SubscriptionInput;
};

export type CreateSubscriptionPayload = {
  __typename?: 'CreateSubscriptionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Subscription;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateSubscriptionPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreateWebsiteInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: WebsiteInput;
};

export type CreateWebsitePayload = {
  __typename?: 'CreateWebsitePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Website;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateWebsitePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type EthAccount = Node & {
  __typename?: 'EthAccount';
  address: Scalars['String'];
  ensName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  managedWebsites: AdminConnection;
  managedWebsitesCount: Scalars['Int'];
  metadata: EthAccountMetadata;
  pieceDislikes: PieceDislikeConnection;
  pieceDislikesCount: Scalars['Int'];
  pieceLikes: PieceLikeConnection;
  pieceLikesCount: Scalars['Int'];
  pieces: PieceConnection;
  piecesCount: Scalars['Int'];
  websiteID: Scalars['CeramicStreamID'];
};


export type EthAccountManagedWebsitesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EthAccountManagedWebsitesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type EthAccountPieceDislikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EthAccountPieceDislikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type EthAccountPieceLikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EthAccountPieceLikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type EthAccountPiecesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EthAccountPiecesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type EthAccountConnection = {
  __typename?: 'EthAccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EthAccountEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EthAccountEdge = {
  __typename?: 'EthAccountEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<EthAccount>;
};

export type EthAccountInput = {
  address: Scalars['String'];
  ensName?: InputMaybe<Scalars['String']>;
  metadata: EthAccountMetadataInput;
  websiteID: Scalars['CeramicStreamID'];
};

export type EthAccountMetadata = {
  __typename?: 'EthAccountMetadata';
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type EthAccountMetadataInput = {
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Featured = Node & {
  __typename?: 'Featured';
  endAt: Scalars['String'];
  id: Scalars['ID'];
  piece?: Maybe<Piece>;
  pieceID: Scalars['CeramicStreamID'];
  startAt: Scalars['String'];
  website?: Maybe<Website>;
  websiteID: Scalars['CeramicStreamID'];
};

/** A connection to a list of items. */
export type FeaturedConnection = {
  __typename?: 'FeaturedConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FeaturedEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FeaturedEdge = {
  __typename?: 'FeaturedEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Featured>;
};

export type FeaturedInput = {
  endAt: Scalars['String'];
  pieceID: Scalars['CeramicStreamID'];
  startAt: Scalars['String'];
  websiteID: Scalars['CeramicStreamID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin?: Maybe<CreateAdminPayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  createCategoryDislike?: Maybe<CreateCategoryDislikePayload>;
  createCategoryLike?: Maybe<CreateCategoryLikePayload>;
  createEthAccount?: Maybe<CreateEthAccountPayload>;
  createFeatured?: Maybe<CreateFeaturedPayload>;
  createPiece?: Maybe<CreatePiecePayload>;
  createPieceDislike?: Maybe<CreatePieceDislikePayload>;
  createPieceLike?: Maybe<CreatePieceLikePayload>;
  createSubscription?: Maybe<CreateSubscriptionPayload>;
  createWebsite?: Maybe<CreateWebsitePayload>;
  updateAdmin?: Maybe<UpdateAdminPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateCategoryDislike?: Maybe<UpdateCategoryDislikePayload>;
  updateCategoryLike?: Maybe<UpdateCategoryLikePayload>;
  updateEthAccount?: Maybe<UpdateEthAccountPayload>;
  updateFeatured?: Maybe<UpdateFeaturedPayload>;
  updatePiece?: Maybe<UpdatePiecePayload>;
  updatePieceDislike?: Maybe<UpdatePieceDislikePayload>;
  updatePieceLike?: Maybe<UpdatePieceLikePayload>;
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  updateWebsite?: Maybe<UpdateWebsitePayload>;
};


export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateCategoryDislikeArgs = {
  input: CreateCategoryDislikeInput;
};


export type MutationCreateCategoryLikeArgs = {
  input: CreateCategoryLikeInput;
};


export type MutationCreateEthAccountArgs = {
  input: CreateEthAccountInput;
};


export type MutationCreateFeaturedArgs = {
  input: CreateFeaturedInput;
};


export type MutationCreatePieceArgs = {
  input: CreatePieceInput;
};


export type MutationCreatePieceDislikeArgs = {
  input: CreatePieceDislikeInput;
};


export type MutationCreatePieceLikeArgs = {
  input: CreatePieceLikeInput;
};


export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};


export type MutationCreateWebsiteArgs = {
  input: CreateWebsiteInput;
};


export type MutationUpdateAdminArgs = {
  input: UpdateAdminInput;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateCategoryDislikeArgs = {
  input: UpdateCategoryDislikeInput;
};


export type MutationUpdateCategoryLikeArgs = {
  input: UpdateCategoryLikeInput;
};


export type MutationUpdateEthAccountArgs = {
  input: UpdateEthAccountInput;
};


export type MutationUpdateFeaturedArgs = {
  input: UpdateFeaturedInput;
};


export type MutationUpdatePieceArgs = {
  input: UpdatePieceInput;
};


export type MutationUpdatePieceDislikeArgs = {
  input: UpdatePieceDislikeInput;
};


export type MutationUpdatePieceLikeArgs = {
  input: UpdatePieceLikeInput;
};


export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


export type MutationUpdateWebsiteArgs = {
  input: UpdateWebsiteInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PartialAdminInput = {
  adminID?: InputMaybe<Scalars['CeramicStreamID']>;
  inactive?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<AdminMetadataInput>;
  super?: InputMaybe<Scalars['Boolean']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialCategoryDislikeInput = {
  categoryID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialCategoryLikeInput = {
  categoryID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialEthAccountInput = {
  address?: InputMaybe<Scalars['String']>;
  ensName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<EthAccountMetadataInput>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialFeaturedInput = {
  endAt?: InputMaybe<Scalars['String']>;
  pieceID?: InputMaybe<Scalars['CeramicStreamID']>;
  startAt?: InputMaybe<Scalars['String']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialPieceDislikeInput = {
  ownerID?: InputMaybe<Scalars['CeramicStreamID']>;
  pieceID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialPieceInput = {
  CID?: InputMaybe<Scalars['String']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  categoryID?: InputMaybe<Scalars['CeramicStreamID']>;
  details?: InputMaybe<PieceDetailsInput>;
  metadata?: InputMaybe<PieceMetadataInput>;
  name?: InputMaybe<Scalars['String']>;
  ownerID?: InputMaybe<Scalars['CeramicStreamID']>;
  rejected?: InputMaybe<Scalars['Boolean']>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialPieceLikeInput = {
  ownerID?: InputMaybe<Scalars['CeramicStreamID']>;
  pieceID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialSubscriptionInput = {
  inactive?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<SubscriptionMetadataInput>;
  subscribedID?: InputMaybe<Scalars['CeramicStreamID']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialWebsiteInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<WebsiteMetadataInput>;
  websiteName?: InputMaybe<Scalars['String']>;
};

export type Piece = Node & {
  __typename?: 'Piece';
  CID?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Category>;
  categoryID: Scalars['CeramicStreamID'];
  details?: Maybe<PieceDetails>;
  dislikes: PieceDislikeConnection;
  dislikesCount: Scalars['Int'];
  id: Scalars['ID'];
  likes: PieceLikeConnection;
  likesCount: Scalars['Int'];
  metadata: PieceMetadata;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<EthAccount>;
  ownerID: Scalars['CeramicStreamID'];
  rejected?: Maybe<Scalars['Boolean']>;
  rejectionReason?: Maybe<Scalars['String']>;
  website?: Maybe<Website>;
  websiteID: Scalars['CeramicStreamID'];
};


export type PieceDislikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PieceDislikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type PieceLikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PieceLikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type PieceConnection = {
  __typename?: 'PieceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PieceEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PieceDetails = {
  __typename?: 'PieceDetails';
  IMDBID?: Maybe<Scalars['String']>;
  TMDBID?: Maybe<Scalars['String']>;
  albumTitle?: Maybe<Scalars['String']>;
  artistNames?: Maybe<Scalars['String']>;
  bitrate?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  imageThumbnailCID?: Maybe<Scalars['String']>;
  initialReleaseYear?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  musicBrainzID?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  releaseDescription?: Maybe<Scalars['String']>;
  releaseType?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PieceDetailsInput = {
  IMDBID?: InputMaybe<Scalars['String']>;
  TMDBID?: InputMaybe<Scalars['String']>;
  albumTitle?: InputMaybe<Scalars['String']>;
  artistNames?: InputMaybe<Scalars['String']>;
  bitrate?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  imageThumbnailCID?: InputMaybe<Scalars['String']>;
  initialReleaseYear?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  musicBrainzID?: InputMaybe<Scalars['String']>;
  poster?: InputMaybe<Scalars['String']>;
  releaseDescription?: InputMaybe<Scalars['String']>;
  releaseType?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PieceDislike = Node & {
  __typename?: 'PieceDislike';
  id: Scalars['ID'];
  owner?: Maybe<EthAccount>;
  ownerID: Scalars['CeramicStreamID'];
  piece?: Maybe<Piece>;
  pieceID: Scalars['CeramicStreamID'];
};

/** A connection to a list of items. */
export type PieceDislikeConnection = {
  __typename?: 'PieceDislikeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PieceDislikeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PieceDislikeEdge = {
  __typename?: 'PieceDislikeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PieceDislike>;
};

export type PieceDislikeInput = {
  ownerID: Scalars['CeramicStreamID'];
  pieceID: Scalars['CeramicStreamID'];
};

/** An edge in a connection. */
export type PieceEdge = {
  __typename?: 'PieceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Piece>;
};

export type PieceInput = {
  CID?: InputMaybe<Scalars['String']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  categoryID: Scalars['CeramicStreamID'];
  details?: InputMaybe<PieceDetailsInput>;
  metadata: PieceMetadataInput;
  name?: InputMaybe<Scalars['String']>;
  ownerID: Scalars['CeramicStreamID'];
  rejected?: InputMaybe<Scalars['Boolean']>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  websiteID: Scalars['CeramicStreamID'];
};

export type PieceLike = Node & {
  __typename?: 'PieceLike';
  id: Scalars['ID'];
  owner?: Maybe<EthAccount>;
  ownerID: Scalars['CeramicStreamID'];
  piece?: Maybe<Piece>;
  pieceID: Scalars['CeramicStreamID'];
};

/** A connection to a list of items. */
export type PieceLikeConnection = {
  __typename?: 'PieceLikeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PieceLikeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PieceLikeEdge = {
  __typename?: 'PieceLikeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PieceLike>;
};

export type PieceLikeInput = {
  ownerID: Scalars['CeramicStreamID'];
  pieceID: Scalars['CeramicStreamID'];
};

export type PieceMetadata = {
  __typename?: 'PieceMetadata';
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PieceMetadataInput = {
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  adminIndex?: Maybe<AdminConnection>;
  categoryDislikeIndex?: Maybe<CategoryDislikeConnection>;
  categoryIndex?: Maybe<CategoryConnection>;
  categoryLikeIndex?: Maybe<CategoryLikeConnection>;
  ethAccountIndex?: Maybe<EthAccountConnection>;
  featuredIndex?: Maybe<FeaturedConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  pieceDislikeIndex?: Maybe<PieceDislikeConnection>;
  pieceIndex?: Maybe<PieceConnection>;
  pieceLikeIndex?: Maybe<PieceLikeConnection>;
  subscriptionIndex?: Maybe<SubscriptionConnection>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
  websiteIndex?: Maybe<WebsiteConnection>;
};


export type QueryAdminIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryDislikeIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryLikeIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryEthAccountIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryFeaturedIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryPieceDislikeIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPieceIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPieceLikeIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySubscriptionIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryWebsiteIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Subscription = Node & {
  __typename?: 'Subscription';
  id: Scalars['ID'];
  inactive?: Maybe<Scalars['Boolean']>;
  metadata: SubscriptionMetadata;
  subscribedID: Scalars['CeramicStreamID'];
  subscribedWebsite?: Maybe<Website>;
  website?: Maybe<Website>;
  websiteID: Scalars['CeramicStreamID'];
};

/** A connection to a list of items. */
export type SubscriptionConnection = {
  __typename?: 'SubscriptionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubscriptionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SubscriptionEdge = {
  __typename?: 'SubscriptionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Subscription>;
};

export type SubscriptionInput = {
  inactive?: InputMaybe<Scalars['Boolean']>;
  metadata: SubscriptionMetadataInput;
  subscribedID: Scalars['CeramicStreamID'];
  websiteID: Scalars['CeramicStreamID'];
};

export type SubscriptionMetadata = {
  __typename?: 'SubscriptionMetadata';
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type SubscriptionMetadataInput = {
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UpdateAdminInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialAdminInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateAdminPayload = {
  __typename?: 'UpdateAdminPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Admin;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateAdminPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdateCategoryDislikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialCategoryDislikeInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateCategoryDislikePayload = {
  __typename?: 'UpdateCategoryDislikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: CategoryDislike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateCategoryDislikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdateCategoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialCategoryInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateCategoryLikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialCategoryLikeInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateCategoryLikePayload = {
  __typename?: 'UpdateCategoryLikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: CategoryLike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateCategoryLikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Category;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateCategoryPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdateEthAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialEthAccountInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateEthAccountPayload = {
  __typename?: 'UpdateEthAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: EthAccount;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateEthAccountPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdateFeaturedInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialFeaturedInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateFeaturedPayload = {
  __typename?: 'UpdateFeaturedPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Featured;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateFeaturedPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdateOptionsInput = {
  /** Fully replace the document contents instead of performing a shallow merge */
  replace?: InputMaybe<Scalars['Boolean']>;
  /** Only perform mutation if the document matches the provided version */
  version?: InputMaybe<Scalars['CeramicCommitID']>;
};

export type UpdatePieceDislikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialPieceDislikeInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdatePieceDislikePayload = {
  __typename?: 'UpdatePieceDislikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: PieceDislike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdatePieceDislikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdatePieceInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialPieceInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdatePieceLikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialPieceLikeInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdatePieceLikePayload = {
  __typename?: 'UpdatePieceLikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: PieceLike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdatePieceLikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdatePiecePayload = {
  __typename?: 'UpdatePiecePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Piece;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdatePiecePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdateSubscriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialSubscriptionInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateSubscriptionPayload = {
  __typename?: 'UpdateSubscriptionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Subscription;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateSubscriptionPayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdateWebsiteInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialWebsiteInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateWebsitePayload = {
  __typename?: 'UpdateWebsitePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Website;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateWebsitePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type Website = Node & {
  __typename?: 'Website';
  admins: AdminConnection;
  adminsCount: Scalars['Int'];
  categories: CategoryConnection;
  categoriesCount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  featured: FeaturedConnection;
  featuredCount: Scalars['Int'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  metadata: WebsiteMetadata;
  pieces: PieceConnection;
  piecesCount: Scalars['Int'];
  subscriptions: SubscriptionConnection;
  subscriptionsCount: Scalars['Int'];
  users: EthAccountConnection;
  usersCount: Scalars['Int'];
  websiteName: Scalars['String'];
};


export type WebsiteAdminsArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WebsiteAdminsCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type WebsiteCategoriesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WebsiteCategoriesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type WebsiteFeaturedArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WebsiteFeaturedCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type WebsitePiecesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WebsitePiecesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type WebsiteSubscriptionsArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WebsiteSubscriptionsCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type WebsiteUsersArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WebsiteUsersCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type WebsiteConnection = {
  __typename?: 'WebsiteConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WebsiteEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WebsiteEdge = {
  __typename?: 'WebsiteEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Website>;
};

export type WebsiteInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  metadata: WebsiteMetadataInput;
  websiteName: Scalars['String'];
};

export type WebsiteMetadata = {
  __typename?: 'WebsiteMetadata';
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type WebsiteMetadataInput = {
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type WebsiteDataFragment = { __typename?: 'Website', id: string, adminsCount: number, piecesCount: number, subscriptionsCount: number, usersCount: number, featuredCount: number, categoriesCount: number, admins: { __typename?: 'AdminConnection', edges?: Array<{ __typename?: 'AdminEdge', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, likesCount: number, dislikesCount: number, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, subscriptions: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null, piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, likesCount: number, dislikesCount: number, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, piecesCount: number, pieceLikesCount: number, pieceDislikesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string } | null } | null> | null }, pieceLikes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pieceDislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, featured: { __typename?: 'FeaturedConnection', edges?: Array<{ __typename?: 'FeaturedEdge', node?: { __typename?: 'Featured', id: string, startAt: string, endAt: string, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null } | null> | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node?: { __typename?: 'Category', id: string, name: string, piecesCount: number, likesCount: number, dislikesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, likesCount: number, dislikesCount: number, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null } | null> | null } } & { ' $fragmentName'?: 'WebsiteDataFragment' };

export type WebsiteAdminFragment = { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'WebsiteAdminFragment' };

export type WebsiteUserFragment = { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, piecesCount: number, pieceLikesCount: number, pieceDislikesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string } | null } | null> | null }, pieceLikes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pieceDislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'WebsiteUserFragment' };

export type PieceLikeFragment = { __typename?: 'PieceLike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } & { ' $fragmentName'?: 'PieceLikeFragment' };

export type PieceDislikeFragment = { __typename?: 'PieceDislike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } & { ' $fragmentName'?: 'PieceDislikeFragment' };

export type CategoryFragment = { __typename?: 'Category', id: string, name: string } & { ' $fragmentName'?: 'CategoryFragment' };

export type PieceFragment = { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, likesCount: number, dislikesCount: number, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'PieceFragment' };

export type WebsiteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebsiteQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CategoryDislike' } | { __typename?: 'CategoryLike' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'PieceDislike' } | { __typename?: 'PieceLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null };

export type WebsiteDataQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMedium: Scalars['Int'];
  pageSizeMax: Scalars['Int'];
}>;


export type WebsiteDataQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CategoryDislike' } | { __typename?: 'CategoryLike' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'PieceDislike' } | { __typename?: 'PieceLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, adminsCount: number, piecesCount: number, subscriptionsCount: number, usersCount: number, featuredCount: number, categoriesCount: number, admins: { __typename?: 'AdminConnection', edges?: Array<{ __typename?: 'AdminEdge', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, likesCount: number, dislikesCount: number, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, subscriptions: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null, piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, likesCount: number, dislikesCount: number, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, piecesCount: number, pieceLikesCount: number, pieceDislikesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string } | null } | null> | null }, pieceLikes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pieceDislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, featured: { __typename?: 'FeaturedConnection', edges?: Array<{ __typename?: 'FeaturedEdge', node?: { __typename?: 'Featured', id: string, startAt: string, endAt: string, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null } | null> | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node?: { __typename?: 'Category', id: string, name: string, piecesCount: number, likesCount: number, dislikesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, likesCount: number, dislikesCount: number, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null } | null> | null } } | null };

export type WebsiteUsersQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMedium: Scalars['Int'];
}>;


export type WebsiteUsersQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CategoryDislike' } | { __typename?: 'CategoryLike' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'PieceDislike' } | { __typename?: 'PieceLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, usersCount: number, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, piecesCount: number, pieceLikesCount: number, pieceDislikesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string } | null } | null> | null }, pieceLikes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pieceDislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null };

export type WebsitePiecesQueryVariables = Exact<{
  id: Scalars['ID'];
  piecesPageSize: Scalars['Int'];
  pageSizeMax: Scalars['Int'];
}>;


export type WebsitePiecesQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CategoryDislike' } | { __typename?: 'CategoryLike' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'PieceDislike' } | { __typename?: 'PieceLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, likesCount: number, dislikesCount: number, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, owner?: { __typename?: 'EthAccount', address: string } | null, piece?: { __typename?: 'Piece', id: string } | null } | null } | null> | null }, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null };

export type EthAccountQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMedium: Scalars['Int'];
}>;


export type EthAccountQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CategoryDislike' } | { __typename?: 'CategoryLike' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, piecesCount: number, pieceLikesCount: number, pieceDislikesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string } | null } | null> | null }, pieceLikes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pieceDislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'PieceDislike' } | { __typename?: 'PieceLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

export type CreateEthAccountMutationVariables = Exact<{
  input: CreateEthAccountInput;
}>;


export type CreateEthAccountMutation = { __typename?: 'Mutation', createEthAccount?: { __typename?: 'CreateEthAccountPayload', document: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } } | null };

export type PieceQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMax: Scalars['Int'];
}>;


export type PieceQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CategoryDislike' } | { __typename?: 'CategoryLike' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, likesCount: number, dislikesCount: number, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, likes: { __typename?: 'PieceLikeConnection', edges?: Array<{ __typename?: 'PieceLikeEdge', node?: { __typename?: 'PieceLike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PieceDislikeConnection', edges?: Array<{ __typename?: 'PieceDislikeEdge', node?: { __typename?: 'PieceDislike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'PieceDislike' } | { __typename?: 'PieceLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

export type CreatePieceMutationVariables = Exact<{
  input: CreatePieceInput;
}>;


export type CreatePieceMutation = { __typename?: 'Mutation', createPiece?: { __typename?: 'CreatePiecePayload', document: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } } | null };

export type UpdatePieceMutationVariables = Exact<{
  input: UpdatePieceInput;
}>;


export type UpdatePieceMutation = { __typename?: 'Mutation', updatePiece?: { __typename?: 'UpdatePiecePayload', document: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, category?: { __typename?: 'Category', id: string, name: string } | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } } | null };

export type CreatePieceLikeMutationVariables = Exact<{
  input: CreatePieceLikeInput;
}>;


export type CreatePieceLikeMutation = { __typename?: 'Mutation', createPieceLike?: { __typename?: 'CreatePieceLikePayload', document: { __typename?: 'PieceLike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } } | null };

export type CreateCategoryLikeMutationVariables = Exact<{
  input: CreateCategoryLikeInput;
}>;


export type CreateCategoryLikeMutation = { __typename?: 'Mutation', createCategoryLike?: { __typename?: 'CreateCategoryLikePayload', document: { __typename?: 'CategoryLike', id: string, category?: { __typename?: 'Category', id: string, name: string } | null } } | null };

export type CreatePieceDislikeMutationVariables = Exact<{
  input: CreatePieceDislikeInput;
}>;


export type CreatePieceDislikeMutation = { __typename?: 'Mutation', createPieceDislike?: { __typename?: 'CreatePieceDislikePayload', document: { __typename?: 'PieceDislike', id: string, piece?: { __typename?: 'Piece', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } } | null };

export type CreateCategoryDislikeMutationVariables = Exact<{
  input: CreateCategoryDislikeInput;
}>;


export type CreateCategoryDislikeMutation = { __typename?: 'Mutation', createCategoryDislike?: { __typename?: 'CreateCategoryDislikePayload', document: { __typename?: 'CategoryDislike', id: string, category?: { __typename?: 'Category', id: string, name: string } | null } } | null };

export type CreateFeaturedMutationVariables = Exact<{
  input: CreateFeaturedInput;
}>;


export type CreateFeaturedMutation = { __typename?: 'Mutation', createFeatured?: { __typename?: 'CreateFeaturedPayload', document: { __typename?: 'Featured', id: string } } | null };

export type SubscriptionIndexQueryVariables = Exact<{
  pageSize: Scalars['Int'];
}>;


export type SubscriptionIndexQuery = { __typename?: 'Query', subscriptionIndex?: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } | null };

export type SubscriptionQueryVariables = Exact<{
  id: Scalars['ID'];
  piecesPageSize: Scalars['Int'];
}>;


export type SubscriptionQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CategoryDislike' } | { __typename?: 'CategoryLike' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'PieceDislike' } | { __typename?: 'PieceLike' } | { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Website' } | null };

export type CreateSubscriptionMutationVariables = Exact<{
  input: CreateSubscriptionInput;
}>;


export type CreateSubscriptionMutation = { __typename?: 'Mutation', createSubscription?: { __typename?: 'CreateSubscriptionPayload', document: { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } } | null };

export type UpdateSubscriptionMutationVariables = Exact<{
  input: UpdateSubscriptionInput;
}>;


export type UpdateSubscriptionMutation = { __typename?: 'Mutation', updateSubscription?: { __typename?: 'UpdateSubscriptionPayload', document: { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } } | null };

export type AdminQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AdminQuery = { __typename?: 'Query', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Category' } | { __typename?: 'CategoryDislike' } | { __typename?: 'CategoryLike' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'PieceDislike' } | { __typename?: 'PieceLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

export type CreateAdminMutationVariables = Exact<{
  input: CreateAdminInput;
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createAdmin?: { __typename?: 'CreateAdminPayload', document: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } } | null };

export type UpdateaAdminMutationVariables = Exact<{
  input: UpdateAdminInput;
}>;


export type UpdateaAdminMutation = { __typename?: 'Mutation', updateAdmin?: { __typename?: 'UpdateAdminPayload', document: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } } | null };

export type WebsiteIndexQueryVariables = Exact<{
  pageSize: Scalars['Int'];
}>;


export type WebsiteIndexQuery = { __typename?: 'Query', websiteIndex?: { __typename?: 'WebsiteConnection', edges?: Array<{ __typename?: 'WebsiteEdge', node?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null } | null> | null } | null };

export const WebsiteDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionsCount"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredCount"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categoriesCount"}}]}}]} as unknown as DocumentNode<WebsiteDataFragment, unknown>;
export const WebsiteAdminFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteAdmin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WebsiteAdminFragment, unknown>;
export const WebsiteUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EthAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WebsiteUserFragment, unknown>;
export const PieceLikeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PieceLike"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PieceLike"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<PieceLikeFragment, unknown>;
export const PieceDislikeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PieceDislike"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PieceDislike"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<PieceDislikeFragment, unknown>;
export const CategoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Category"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CategoryFragment, unknown>;
export const PieceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Piece"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Piece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<PieceFragment, unknown>;
export const WebsiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Website"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteQuery, WebsiteQueryVariables>;
export const WebsiteDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionsCount"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredCount"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categoriesCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteDataQuery, WebsiteDataQueryVariables>;
export const WebsiteUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteUsersQuery, WebsiteUsersQueryVariables>;
export const WebsitePiecesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsitePieces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsitePiecesQuery, WebsitePiecesQueryVariables>;
export const EthAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EthAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pieceDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EthAccountQuery, EthAccountQueryVariables>;
export const CreateEthAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEthAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEthAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEthAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateEthAccountMutation, CreateEthAccountMutationVariables>;
export const PieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Piece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Piece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMax"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PieceQuery, PieceQueryVariables>;
export const CreatePieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePieceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPiece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePieceMutation, CreatePieceMutationVariables>;
export const UpdatePieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePieceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePiece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePieceMutation, UpdatePieceMutationVariables>;
export const CreatePieceLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePieceLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePieceLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPieceLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePieceLikeMutation, CreatePieceLikeMutationVariables>;
export const CreateCategoryLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCategoryLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCategoryLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategoryLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateCategoryLikeMutation, CreateCategoryLikeMutationVariables>;
export const CreatePieceDislikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePieceDislike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePieceDislikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPieceDislike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePieceDislikeMutation, CreatePieceDislikeMutationVariables>;
export const CreateCategoryDislikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCategoryDislike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCategoryDislikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategoryDislike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateCategoryDislikeMutation, CreateCategoryDislikeMutationVariables>;
export const CreateFeaturedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFeatured"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFeaturedInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFeatured"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFeaturedMutation, CreateFeaturedMutationVariables>;
export const SubscriptionIndexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscriptionIndex"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionIndex"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionIndexQuery, SubscriptionIndexQueryVariables>;
export const SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Subscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Subscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionQuery, SubscriptionQueryVariables>;
export const CreateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>;
export const UpdateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSubscriptionMutation, UpdateSubscriptionMutationVariables>;
export const AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Admin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AdminQuery, AdminQueryVariables>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const UpdateaAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateaAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateaAdminMutation, UpdateaAdminMutationVariables>;
export const WebsiteIndexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteIndex"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteIndex"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteIndexQuery, WebsiteIndexQueryVariables>;