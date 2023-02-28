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
  dislikes: PinDislikeConnection;
  dislikesCount: Scalars['Int'];
  id: Scalars['ID'];
  likes: PinLikeConnection;
  likesCount: Scalars['Int'];
  name: Scalars['String'];
  pins: PinConnection;
  pinsCount: Scalars['Int'];
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


export type CategoryPinsArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CategoryPinsCountArgs = {
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

export type CeramicAccount = Node & {
  __typename?: 'CeramicAccount';
  adminList?: Maybe<AdminConnection>;
  categoryList?: Maybe<CategoryConnection>;
  ethAccountList?: Maybe<EthAccountConnection>;
  featuredList?: Maybe<FeaturedConnection>;
  /** Globally unique identifier of the account (DID string) */
  id: Scalars['ID'];
  /** Whether the Ceramic instance is currently authenticated with this account or not */
  isViewer: Scalars['Boolean'];
  pieceList?: Maybe<PieceConnection>;
  pinDislikeList?: Maybe<PinDislikeConnection>;
  pinLikeList?: Maybe<PinLikeConnection>;
  pinList?: Maybe<PinConnection>;
  subscriptionList?: Maybe<SubscriptionConnection>;
  websiteList?: Maybe<WebsiteConnection>;
};


export type CeramicAccountAdminListArgs = {
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


export type CeramicAccountPieceListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountPinDislikeListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountPinLikeListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CeramicAccountPinListArgs = {
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

export type CreateCategoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: CategoryInput;
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

export type CreatePieceInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PieceInput;
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

export type CreatePinDislikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PinDislikeInput;
};

export type CreatePinDislikePayload = {
  __typename?: 'CreatePinDislikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: PinDislike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreatePinDislikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreatePinInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PinInput;
};

export type CreatePinLikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PinLikeInput;
};

export type CreatePinLikePayload = {
  __typename?: 'CreatePinLikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: PinLike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreatePinLikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type CreatePinPayload = {
  __typename?: 'CreatePinPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Pin;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreatePinPayloadNodeArgs = {
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
  pinDislikes: PinDislikeConnection;
  pinDislikesCount: Scalars['Int'];
  pinLikes: PinLikeConnection;
  pinLikesCount: Scalars['Int'];
  pins: PinConnection;
  pinsCount: Scalars['Int'];
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


export type EthAccountPinDislikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EthAccountPinDislikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type EthAccountPinLikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EthAccountPinLikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type EthAccountPinsArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EthAccountPinsCountArgs = {
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
  pin?: Maybe<Pin>;
  pinID: Scalars['CeramicStreamID'];
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
  pinID: Scalars['CeramicStreamID'];
  startAt: Scalars['String'];
  websiteID: Scalars['CeramicStreamID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin?: Maybe<CreateAdminPayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  createEthAccount?: Maybe<CreateEthAccountPayload>;
  createFeatured?: Maybe<CreateFeaturedPayload>;
  createPiece?: Maybe<CreatePiecePayload>;
  createPin?: Maybe<CreatePinPayload>;
  createPinDislike?: Maybe<CreatePinDislikePayload>;
  createPinLike?: Maybe<CreatePinLikePayload>;
  createSubscription?: Maybe<CreateSubscriptionPayload>;
  createWebsite?: Maybe<CreateWebsitePayload>;
  updateAdmin?: Maybe<UpdateAdminPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateEthAccount?: Maybe<UpdateEthAccountPayload>;
  updateFeatured?: Maybe<UpdateFeaturedPayload>;
  updatePiece?: Maybe<UpdatePiecePayload>;
  updatePin?: Maybe<UpdatePinPayload>;
  updatePinDislike?: Maybe<UpdatePinDislikePayload>;
  updatePinLike?: Maybe<UpdatePinLikePayload>;
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  updateWebsite?: Maybe<UpdateWebsitePayload>;
};


export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
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


export type MutationCreatePinArgs = {
  input: CreatePinInput;
};


export type MutationCreatePinDislikeArgs = {
  input: CreatePinDislikeInput;
};


export type MutationCreatePinLikeArgs = {
  input: CreatePinLikeInput;
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


export type MutationUpdateEthAccountArgs = {
  input: UpdateEthAccountInput;
};


export type MutationUpdateFeaturedArgs = {
  input: UpdateFeaturedInput;
};


export type MutationUpdatePieceArgs = {
  input: UpdatePieceInput;
};


export type MutationUpdatePinArgs = {
  input: UpdatePinInput;
};


export type MutationUpdatePinDislikeArgs = {
  input: UpdatePinDislikeInput;
};


export type MutationUpdatePinLikeArgs = {
  input: UpdatePinLikeInput;
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

export type PartialCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialEthAccountInput = {
  address?: InputMaybe<Scalars['String']>;
  ensName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<EthAccountMetadataInput>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialFeaturedInput = {
  endAt?: InputMaybe<Scalars['String']>;
  pinID?: InputMaybe<Scalars['CeramicStreamID']>;
  startAt?: InputMaybe<Scalars['String']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialPieceInput = {
  CID?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<PieceDetailsInput>;
  metadata?: InputMaybe<PieceMetadataInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type PartialPinDislikeInput = {
  categoryID?: InputMaybe<Scalars['CeramicStreamID']>;
  ownerID?: InputMaybe<Scalars['CeramicStreamID']>;
  pinID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialPinInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categoryID?: InputMaybe<Scalars['CeramicStreamID']>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  ownerID?: InputMaybe<Scalars['CeramicStreamID']>;
  pieceID?: InputMaybe<Scalars['CeramicStreamID']>;
  rejected?: InputMaybe<Scalars['Boolean']>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialPinLikeInput = {
  categoryID?: InputMaybe<Scalars['CeramicStreamID']>;
  ownerID?: InputMaybe<Scalars['CeramicStreamID']>;
  pinID?: InputMaybe<Scalars['CeramicStreamID']>;
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
  details?: Maybe<PieceDetails>;
  id: Scalars['ID'];
  metadata: PieceMetadata;
  name?: Maybe<Scalars['String']>;
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
  details?: InputMaybe<PieceDetailsInput>;
  metadata: PieceMetadataInput;
  name?: InputMaybe<Scalars['String']>;
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

export type Pin = Node & {
  __typename?: 'Pin';
  approved?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Category>;
  categoryID: Scalars['CeramicStreamID'];
  deleted?: Maybe<Scalars['Boolean']>;
  dislikes: PinDislikeConnection;
  dislikesCount: Scalars['Int'];
  id: Scalars['ID'];
  likes: PinLikeConnection;
  likesCount: Scalars['Int'];
  owner?: Maybe<EthAccount>;
  ownerID: Scalars['CeramicStreamID'];
  piece?: Maybe<Piece>;
  pieceID: Scalars['CeramicStreamID'];
  rejected?: Maybe<Scalars['Boolean']>;
  rejectionReason?: Maybe<Scalars['String']>;
  website?: Maybe<Website>;
  websiteID: Scalars['CeramicStreamID'];
};


export type PinDislikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PinDislikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};


export type PinLikesArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PinLikesCountArgs = {
  account?: InputMaybe<Scalars['ID']>;
};

/** A connection to a list of items. */
export type PinConnection = {
  __typename?: 'PinConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PinEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PinDislike = Node & {
  __typename?: 'PinDislike';
  category?: Maybe<Category>;
  categoryID: Scalars['CeramicStreamID'];
  id: Scalars['ID'];
  owner?: Maybe<EthAccount>;
  ownerID: Scalars['CeramicStreamID'];
  pin?: Maybe<Pin>;
  pinID: Scalars['CeramicStreamID'];
};

/** A connection to a list of items. */
export type PinDislikeConnection = {
  __typename?: 'PinDislikeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PinDislikeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PinDislikeEdge = {
  __typename?: 'PinDislikeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PinDislike>;
};

export type PinDislikeInput = {
  categoryID: Scalars['CeramicStreamID'];
  ownerID: Scalars['CeramicStreamID'];
  pinID: Scalars['CeramicStreamID'];
};

/** An edge in a connection. */
export type PinEdge = {
  __typename?: 'PinEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Pin>;
};

export type PinInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categoryID: Scalars['CeramicStreamID'];
  deleted?: InputMaybe<Scalars['Boolean']>;
  ownerID: Scalars['CeramicStreamID'];
  pieceID: Scalars['CeramicStreamID'];
  rejected?: InputMaybe<Scalars['Boolean']>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  websiteID: Scalars['CeramicStreamID'];
};

export type PinLike = Node & {
  __typename?: 'PinLike';
  category?: Maybe<Category>;
  categoryID: Scalars['CeramicStreamID'];
  id: Scalars['ID'];
  owner?: Maybe<EthAccount>;
  ownerID: Scalars['CeramicStreamID'];
  pin?: Maybe<Pin>;
  pinID: Scalars['CeramicStreamID'];
};

/** A connection to a list of items. */
export type PinLikeConnection = {
  __typename?: 'PinLikeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PinLikeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PinLikeEdge = {
  __typename?: 'PinLikeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PinLike>;
};

export type PinLikeInput = {
  categoryID: Scalars['CeramicStreamID'];
  ownerID: Scalars['CeramicStreamID'];
  pinID: Scalars['CeramicStreamID'];
};

export type Query = {
  __typename?: 'Query';
  adminIndex?: Maybe<AdminConnection>;
  categoryIndex?: Maybe<CategoryConnection>;
  ethAccountIndex?: Maybe<EthAccountConnection>;
  featuredIndex?: Maybe<FeaturedConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  pieceIndex?: Maybe<PieceConnection>;
  pinDislikeIndex?: Maybe<PinDislikeConnection>;
  pinIndex?: Maybe<PinConnection>;
  pinLikeIndex?: Maybe<PinLikeConnection>;
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


export type QueryCategoryIndexArgs = {
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


export type QueryPieceIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPinDislikeIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPinIndexArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPinLikeIndexArgs = {
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

export type UpdateCategoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialCategoryInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
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

export type UpdatePieceInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialPieceInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
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

export type UpdatePinDislikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialPinDislikeInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdatePinDislikePayload = {
  __typename?: 'UpdatePinDislikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: PinDislike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdatePinDislikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdatePinInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialPinInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdatePinLikeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  content: PartialPinLikeInput;
  id: Scalars['ID'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdatePinLikePayload = {
  __typename?: 'UpdatePinLikePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: PinLike;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdatePinLikePayloadNodeArgs = {
  id: Scalars['ID'];
};

export type UpdatePinPayload = {
  __typename?: 'UpdatePinPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  document: Pin;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdatePinPayloadNodeArgs = {
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
  pins: PinConnection;
  pinsCount: Scalars['Int'];
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


export type WebsitePinsArgs = {
  account?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WebsitePinsCountArgs = {
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

export type WebsiteDataFragment = { __typename?: 'Website', id: string, adminsCount: number, pinsCount: number, subscriptionsCount: number, usersCount: number, featuredCount: number, categoriesCount: number, admins: { __typename?: 'AdminConnection', edges?: Array<{ __typename?: 'AdminEdge', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null }, subscriptions: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null, pinsCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null } } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, pinsCount: number, pinLikesCount: number, pinDislikesCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string } | null } | null> | null }, pinLikes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pinDislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, featured: { __typename?: 'FeaturedConnection', edges?: Array<{ __typename?: 'FeaturedEdge', node?: { __typename?: 'Featured', id: string, startAt: string, endAt: string, pin?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null } | null> | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node?: { __typename?: 'Category', id: string, name: string, pinsCount: number, likesCount: number, dislikesCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null }, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null } } & { ' $fragmentName'?: 'WebsiteDataFragment' };

export type WebsiteAdminFragment = { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'WebsiteAdminFragment' };

export type WebsiteUserFragment = { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, pinsCount: number, pinLikesCount: number, pinDislikesCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string } | null } | null> | null }, pinLikes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pinDislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'WebsiteUserFragment' };

export type PinLikeFragment = { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } & { ' $fragmentName'?: 'PinLikeFragment' };

export type PinDislikeFragment = { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } & { ' $fragmentName'?: 'PinDislikeFragment' };

export type CategoryFragment = { __typename?: 'Category', id: string, name: string } & { ' $fragmentName'?: 'CategoryFragment' };

export type PinFragment = { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } & { ' $fragmentName'?: 'PinFragment' };

export type PieceFragment = { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'PieceFragment' };

export type WebsiteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebsiteQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'Pin' } | { __typename?: 'PinDislike' } | { __typename?: 'PinLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null };

export type WebsiteDataQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMedium: Scalars['Int'];
}>;


export type WebsiteDataQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'Pin' } | { __typename?: 'PinDislike' } | { __typename?: 'PinLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, adminsCount: number, pinsCount: number, subscriptionsCount: number, usersCount: number, featuredCount: number, categoriesCount: number, admins: { __typename?: 'AdminConnection', edges?: Array<{ __typename?: 'AdminEdge', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null }, subscriptions: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null, pinsCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null } } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, pinsCount: number, pinLikesCount: number, pinDislikesCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string } | null } | null> | null }, pinLikes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pinDislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, featured: { __typename?: 'FeaturedConnection', edges?: Array<{ __typename?: 'FeaturedEdge', node?: { __typename?: 'Featured', id: string, startAt: string, endAt: string, pin?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null } | null> | null }, categories: { __typename?: 'CategoryConnection', edges?: Array<{ __typename?: 'CategoryEdge', node?: { __typename?: 'Category', id: string, name: string, pinsCount: number, likesCount: number, dislikesCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null }, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null } } | null };

export type WebsiteUsersQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMedium: Scalars['Int'];
}>;


export type WebsiteUsersQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'Pin' } | { __typename?: 'PinDislike' } | { __typename?: 'PinLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, usersCount: number, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, pinsCount: number, pinLikesCount: number, pinDislikesCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string } | null } | null> | null }, pinLikes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pinDislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null };

export type WebsitePiecesQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMedium: Scalars['Int'];
}>;


export type WebsitePiecesQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'Pin' } | { __typename?: 'PinDislike' } | { __typename?: 'PinLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, pinsCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | null } | null> | null } } | null };

export type EthAccountQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMedium: Scalars['Int'];
}>;


export type EthAccountQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, pinsCount: number, pinLikesCount: number, pinDislikesCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string } | null } | null> | null }, pinLikes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pinDislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'Pin' } | { __typename?: 'PinDislike' } | { __typename?: 'PinLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

export type CreateEthAccountMutationVariables = Exact<{
  input: CreateEthAccountInput;
  pageSizeMedium: Scalars['Int'];
}>;


export type CreateEthAccountMutation = { __typename?: 'Mutation', createEthAccount?: { __typename?: 'CreateEthAccountPayload', document: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, pinsCount: number, pinLikesCount: number, pinDislikesCount: number, pins: { __typename?: 'PinConnection', edges?: Array<{ __typename?: 'PinEdge', node?: { __typename?: 'Pin', id: string } | null } | null> | null }, pinLikes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, pinDislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } } | null };

export type PinQueryVariables = Exact<{
  id: Scalars['ID'];
  pageSizeMedium: Scalars['Int'];
}>;


export type PinQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, dislikesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null, likes: { __typename?: 'PinLikeConnection', edges?: Array<{ __typename?: 'PinLikeEdge', node?: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null }, dislikes: { __typename?: 'PinDislikeConnection', edges?: Array<{ __typename?: 'PinDislikeEdge', node?: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } | null } | null> | null } } | { __typename?: 'PinDislike' } | { __typename?: 'PinLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

export type CreatePieceMutationVariables = Exact<{
  input: CreatePieceInput;
}>;


export type CreatePieceMutation = { __typename?: 'Mutation', createPiece?: { __typename?: 'CreatePiecePayload', document: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } } | null };

export type UpdatePinMutationVariables = Exact<{
  input: UpdatePinInput;
}>;


export type UpdatePinMutation = { __typename?: 'Mutation', updatePin?: { __typename?: 'UpdatePinPayload', document: { __typename?: 'Pin', id: string, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, deleted?: boolean | null, likesCount: number, website?: { __typename?: 'Website', id: string } | null, owner?: { __typename?: 'EthAccount', id: string, address: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, piece?: { __typename?: 'Piece', id: string, CID?: string | null, name?: string | null, details?: { __typename?: 'PieceDetails', tags?: string | null, type?: string | null, media?: string | null, IMDBID?: string | null, TMDBID?: string | null, format?: string | null, poster?: string | null, bitrate?: string | null, albumTitle?: string | null, artistNames?: string | null, releaseType?: string | null, musicBrainzID?: string | null, imageThumbnailCID?: string | null, initialReleaseYear?: string | null, releaseDescription?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } } | null };

export type CreatePinLikeMutationVariables = Exact<{
  input: CreatePinLikeInput;
}>;


export type CreatePinLikeMutation = { __typename?: 'Mutation', createPinLike?: { __typename?: 'CreatePinLikePayload', document: { __typename?: 'PinLike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } } | null };

export type CreatePinDislikeMutationVariables = Exact<{
  input: CreatePinDislikeInput;
}>;


export type CreatePinDislikeMutation = { __typename?: 'Mutation', createPinDislike?: { __typename?: 'CreatePinDislikePayload', document: { __typename?: 'PinDislike', id: string, pin?: { __typename?: 'Pin', id: string } | null, owner?: { __typename?: 'EthAccount', address: string } | null } } | null };

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


export type SubscriptionQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'Category' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'Pin' } | { __typename?: 'PinDislike' } | { __typename?: 'PinLike' } | { __typename?: 'Subscription', id: string, subscribedID: any, inactive?: boolean | null, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Website' } | null };

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


export type AdminQuery = { __typename?: 'Query', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Category' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Featured' } | { __typename?: 'Piece' } | { __typename?: 'Pin' } | { __typename?: 'PinDislike' } | { __typename?: 'PinLike' } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

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

export const WebsiteDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionsCount"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredCount"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categoriesCount"}}]}}]} as unknown as DocumentNode<WebsiteDataFragment, unknown>;
export const WebsiteAdminFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteAdmin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WebsiteAdminFragment, unknown>;
export const WebsiteUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EthAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WebsiteUserFragment, unknown>;
export const PinLikeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PinLike"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PinLike"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<PinLikeFragment, unknown>;
export const PinDislikeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PinDislike"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PinDislike"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<PinDislikeFragment, unknown>;
export const CategoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Category"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CategoryFragment, unknown>;
export const PinFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PinFragment, unknown>;
export const PieceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Piece"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Piece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<PieceFragment, unknown>;
export const WebsiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Website"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteQuery, WebsiteQueryVariables>;
export const WebsiteDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionsCount"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredCount"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categoriesCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteDataQuery, WebsiteDataQueryVariables>;
export const WebsiteUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteUsersQuery, WebsiteUsersQueryVariables>;
export const WebsitePiecesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsitePieces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsitePiecesQuery, WebsitePiecesQueryVariables>;
export const EthAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EthAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EthAccountQuery, EthAccountQueryVariables>;
export const CreateEthAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEthAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEthAccountInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEthAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"pins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinLikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinLikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pinDislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateEthAccountMutation, CreateEthAccountMutationVariables>;
export const PinDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSizeMedium"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PinQuery, PinQueryVariables>;
export const CreatePieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePieceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPiece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePieceMutation, CreatePieceMutationVariables>;
export const UpdatePinDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePinInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"IMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"TMDBID"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"albumTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artistNames"}},{"kind":"Field","name":{"kind":"Name","value":"releaseType"}},{"kind":"Field","name":{"kind":"Name","value":"musicBrainzID"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbnailCID"}},{"kind":"Field","name":{"kind":"Name","value":"initialReleaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePinMutation, UpdatePinMutationVariables>;
export const CreatePinLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePinLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePinLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPinLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePinLikeMutation, CreatePinLikeMutationVariables>;
export const CreatePinDislikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePinDislike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePinDislikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPinDislike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePinDislikeMutation, CreatePinDislikeMutationVariables>;
export const CreateFeaturedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFeatured"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFeaturedInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFeatured"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFeaturedMutation, CreateFeaturedMutationVariables>;
export const SubscriptionIndexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscriptionIndex"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionIndex"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionIndexQuery, SubscriptionIndexQueryVariables>;
export const SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Subscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Subscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionQuery, SubscriptionQueryVariables>;
export const CreateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>;
export const UpdateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSubscriptionMutation, UpdateSubscriptionMutationVariables>;
export const AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Admin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AdminQuery, AdminQueryVariables>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const UpdateaAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateaAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateaAdminMutation, UpdateaAdminMutationVariables>;
export const WebsiteIndexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteIndex"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteIndex"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteIndexQuery, WebsiteIndexQueryVariables>;