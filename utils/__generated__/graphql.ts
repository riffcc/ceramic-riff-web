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

export type CeramicAccount = Node & {
  __typename?: 'CeramicAccount';
  adminList?: Maybe<AdminConnection>;
  ethAccountList?: Maybe<EthAccountConnection>;
  /** Globally unique identifier of the account (DID string) */
  id: Scalars['ID'];
  /** Whether the Ceramic instance is currently authenticated with this account or not */
  isViewer: Scalars['Boolean'];
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


export type CeramicAccountEthAccountListArgs = {
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

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin?: Maybe<CreateAdminPayload>;
  createEthAccount?: Maybe<CreateEthAccountPayload>;
  createPiece?: Maybe<CreatePiecePayload>;
  createSubscription?: Maybe<CreateSubscriptionPayload>;
  createWebsite?: Maybe<CreateWebsitePayload>;
  updateAdmin?: Maybe<UpdateAdminPayload>;
  updateEthAccount?: Maybe<UpdateEthAccountPayload>;
  updatePiece?: Maybe<UpdatePiecePayload>;
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  updateWebsite?: Maybe<UpdateWebsitePayload>;
};


export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};


export type MutationCreateEthAccountArgs = {
  input: CreateEthAccountInput;
};


export type MutationCreatePieceArgs = {
  input: CreatePieceInput;
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


export type MutationUpdateEthAccountArgs = {
  input: UpdateEthAccountInput;
};


export type MutationUpdatePieceArgs = {
  input: UpdatePieceInput;
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

export type PartialEthAccountInput = {
  address?: InputMaybe<Scalars['String']>;
  ensName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<EthAccountMetadataInput>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialPieceInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['String']>;
  cid?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<PieceMetadataInput>;
  name?: InputMaybe<Scalars['String']>;
  ownerID?: InputMaybe<Scalars['CeramicStreamID']>;
  rejected?: InputMaybe<Scalars['Boolean']>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialSubscriptionInput = {
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
  approved?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  cid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata: PieceMetadata;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<EthAccount>;
  ownerID: Scalars['CeramicStreamID'];
  rejected?: Maybe<Scalars['Boolean']>;
  rejectionReason?: Maybe<Scalars['String']>;
  website?: Maybe<Website>;
  websiteID: Scalars['CeramicStreamID'];
};

/** A connection to a list of items. */
export type PieceConnection = {
  __typename?: 'PieceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PieceEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  approved?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['String']>;
  cid?: InputMaybe<Scalars['String']>;
  metadata: PieceMetadataInput;
  name?: InputMaybe<Scalars['String']>;
  ownerID: Scalars['CeramicStreamID'];
  rejected?: InputMaybe<Scalars['Boolean']>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  websiteID: Scalars['CeramicStreamID'];
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
  ethAccountIndex?: Maybe<EthAccountConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  pieceIndex?: Maybe<PieceConnection>;
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


export type QueryEthAccountIndexArgs = {
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
  description?: Maybe<Scalars['String']>;
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

export type WebsiteDataFragment = { __typename?: 'Website', id: string, adminsCount: number, piecesCount: number, subscriptionsCount: number, usersCount: number, admins: { __typename?: 'AdminConnection', edges?: Array<{ __typename?: 'AdminEdge', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, category?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, subscriptions: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', id: string, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null, piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, category?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } & { ' $fragmentName'?: 'WebsiteDataFragment' };

export type WebsiteAdminFragment = { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'WebsiteAdminFragment' };

export type WebsiteUserFragment = { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'WebsiteUserFragment' };

export type WebsiteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebsiteQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Piece' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null };

export type WebsiteDataQueryVariables = Exact<{
  id: Scalars['ID'];
  adminsPageSize: Scalars['Int'];
  piecesPageSize: Scalars['Int'];
  subscriptionsPageSize: Scalars['Int'];
  usersPageSize: Scalars['Int'];
}>;


export type WebsiteDataQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Piece' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, adminsCount: number, piecesCount: number, subscriptionsCount: number, usersCount: number, admins: { __typename?: 'AdminConnection', edges?: Array<{ __typename?: 'AdminEdge', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, category?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, subscriptions: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', id: string, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null, piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, category?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | null } | null> | null }, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null };

export type WebsiteUsersQueryVariables = Exact<{
  id: Scalars['ID'];
  usersPageSize: Scalars['Int'];
}>;


export type WebsiteUsersQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Piece' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, usersCount: number, users: { __typename?: 'EthAccountConnection', edges?: Array<{ __typename?: 'EthAccountEdge', node?: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null };

export type WebsitePiecesQueryVariables = Exact<{
  id: Scalars['ID'];
  piecesPageSize: Scalars['Int'];
}>;


export type WebsitePiecesQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Piece' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, category?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null };

export type EthAccountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EthAccountQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Piece' } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

export type CreateEthAccountMutationVariables = Exact<{
  input: CreateEthAccountInput;
}>;


export type CreateEthAccountMutation = { __typename?: 'Mutation', createEthAccount?: { __typename?: 'CreateEthAccountPayload', document: { __typename?: 'EthAccount', id: string, address: string, ensName?: string | null, metadata: { __typename?: 'EthAccountMetadata', createdAt: string, updatedAt: string } } } | null };

export type PieceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PieceQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, category?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

export type CreatePieceMutationVariables = Exact<{
  input: CreatePieceInput;
}>;


export type CreatePieceMutation = { __typename?: 'Mutation', createPiece?: { __typename?: 'CreatePiecePayload', document: { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, category?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } } | null };

export type UpdatePieceMutationVariables = Exact<{
  input: UpdatePieceInput;
}>;


export type UpdatePieceMutation = { __typename?: 'Mutation', updatePiece?: { __typename?: 'UpdatePiecePayload', document: { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, category?: string | null, approved?: boolean | null, rejected?: boolean | null, rejectionReason?: string | null, ownerID: any, owner?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } } | null };

export type SubscriptionIndexQueryVariables = Exact<{
  pageSize: Scalars['Int'];
}>;


export type SubscriptionIndexQuery = { __typename?: 'Query', subscriptionIndex?: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', id: string, websiteID: any, subscribedID: any, website?: { __typename?: 'Website', websiteName: string, description?: string | null, image?: string | null } | null } | null } | null> | null } | null };

export type SubscriptionQueryVariables = Exact<{
  id: Scalars['ID'];
  piecesPageSize: Scalars['Int'];
}>;


export type SubscriptionQuery = { __typename?: 'Query', node?: { __typename?: 'Admin' } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Piece' } | { __typename?: 'Subscription', id: string, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'Website' } | null };

export type CreateSubscriptionMutationVariables = Exact<{
  input: CreateSubscriptionInput;
  piecesPageSize: Scalars['Int'];
}>;


export type CreateSubscriptionMutation = { __typename?: 'Mutation', createSubscription?: { __typename?: 'CreateSubscriptionPayload', document: { __typename?: 'Subscription', id: string, subscribedWebsite?: { __typename?: 'Website', id: string, piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, cid?: string | null, name?: string | null, approved?: boolean | null, rejected?: boolean | null, metadata: { __typename?: 'PieceMetadata', createdAt: string, updatedAt: string } } | null } | null> | null } } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } } | null };

export type UpdateSubscriptionMutationVariables = Exact<{
  input: UpdateSubscriptionInput;
}>;


export type UpdateSubscriptionMutation = { __typename?: 'Mutation', updateSubscription?: { __typename?: 'UpdateSubscriptionPayload', document: { __typename?: 'Subscription', id: string, subscribedWebsite?: { __typename?: 'Website', id: string, websiteName: string, description?: string | null, image?: string | null } | null, metadata: { __typename?: 'SubscriptionMetadata', createdAt: string, updatedAt: string } } } | null };

export type AdminQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AdminQuery = { __typename?: 'Query', node?: { __typename?: 'Admin', id: string, adminID: any, super: boolean, inactive?: boolean | null, admin?: { __typename?: 'EthAccount', address: string, ensName?: string | null } | null, metadata: { __typename?: 'AdminMetadata', createdAt: string, updatedAt: string } } | { __typename?: 'CeramicAccount' } | { __typename?: 'EthAccount' } | { __typename?: 'Piece' } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

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

export const WebsiteDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminsPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionsPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionsCount"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usersPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}}]}}]} as unknown as DocumentNode<WebsiteDataFragment, unknown>;
export const WebsiteAdminFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteAdmin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WebsiteAdminFragment, unknown>;
export const WebsiteUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EthAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WebsiteUserFragment, unknown>;
export const WebsiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Website"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteQuery, WebsiteQueryVariables>;
export const WebsiteDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adminsPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionsPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"usersPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminsPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminsCount"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionsPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionsCount"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usersPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteDataQuery, WebsiteDataQueryVariables>;
export const WebsiteUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"usersPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usersPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteUsersQuery, WebsiteUsersQueryVariables>;
export const WebsitePiecesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsitePieces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}}]}}]}}]}}]} as unknown as DocumentNode<WebsitePiecesQuery, WebsitePiecesQueryVariables>;
export const EthAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EthAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EthAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EthAccountQuery, EthAccountQueryVariables>;
export const CreateEthAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEthAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEthAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEthAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateEthAccountMutation, CreateEthAccountMutationVariables>;
export const PieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Piece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Piece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PieceQuery, PieceQueryVariables>;
export const CreatePieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePieceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPiece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePieceMutation, CreatePieceMutationVariables>;
export const UpdatePieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePieceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePiece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"ownerID"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePieceMutation, UpdatePieceMutationVariables>;
export const SubscriptionIndexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscriptionIndex"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionIndex"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteID"}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionIndexQuery, SubscriptionIndexQueryVariables>;
export const SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Subscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Subscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionQuery, SubscriptionQueryVariables>;
export const CreateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubscriptionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>;
export const UpdateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSubscriptionMutation, UpdateSubscriptionMutationVariables>;
export const AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Admin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AdminQuery, AdminQueryVariables>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const UpdateaAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateaAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adminID"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ensName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"super"}},{"kind":"Field","name":{"kind":"Name","value":"inactive"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateaAdminMutation, UpdateaAdminMutationVariables>;
export const WebsiteIndexDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WebsiteIndex"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteIndex"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteIndexQuery, WebsiteIndexQueryVariables>;