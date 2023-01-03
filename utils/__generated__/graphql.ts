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

export type CeramicAccount = Node & {
  __typename?: 'CeramicAccount';
  /** Globally unique identifier of the account (DID string) */
  id: Scalars['ID'];
  /** Whether the Ceramic instance is currently authenticated with this account or not */
  isViewer: Scalars['Boolean'];
  pieceList?: Maybe<PieceConnection>;
  subscriptionList?: Maybe<SubscriptionConnection>;
  websiteList?: Maybe<WebsiteConnection>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createPiece?: Maybe<CreatePiecePayload>;
  createSubscription?: Maybe<CreateSubscriptionPayload>;
  createWebsite?: Maybe<CreateWebsitePayload>;
  updatePiece?: Maybe<UpdatePiecePayload>;
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  updateWebsite?: Maybe<UpdateWebsitePayload>;
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

export type PartialPieceInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  cid?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialSubscriptionInput = {
  subscribedID?: InputMaybe<Scalars['CeramicStreamID']>;
  websiteID?: InputMaybe<Scalars['CeramicStreamID']>;
};

export type PartialWebsiteInput = {
  websiteName?: InputMaybe<Scalars['String']>;
};

export type Piece = Node & {
  __typename?: 'Piece';
  approved: Scalars['Boolean'];
  cid: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
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
  approved: Scalars['Boolean'];
  cid: Scalars['String'];
  name: Scalars['String'];
  websiteID: Scalars['CeramicStreamID'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  pieceIndex?: Maybe<PieceConnection>;
  subscriptionIndex?: Maybe<SubscriptionConnection>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
  websiteIndex?: Maybe<WebsiteConnection>;
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
  subcribedWebsite?: Maybe<Website>;
  subscribedID: Scalars['CeramicStreamID'];
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
  subscribedID: Scalars['CeramicStreamID'];
  websiteID: Scalars['CeramicStreamID'];
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
  id: Scalars['ID'];
  pieces: PieceConnection;
  piecesCount: Scalars['Int'];
  subscriptions: SubscriptionConnection;
  subscriptionsCount: Scalars['Int'];
  websiteName: Scalars['String'];
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
  websiteName: Scalars['String'];
};

export type WebsiteQueryVariables = Exact<{
  id: Scalars['ID'];
  piecesPageSize: Scalars['Int'];
  subscriptionsPageSize: Scalars['Int'];
}>;


export type WebsiteQuery = { __typename?: 'Query', node?: { __typename?: 'CeramicAccount' } | { __typename?: 'Piece' } | { __typename?: 'Subscription' } | { __typename?: 'Website', id: string, websiteName: string, piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, name: string, cid: string, approved: boolean } | null } | null> | null }, subscriptions: { __typename?: 'SubscriptionConnection', edges?: Array<{ __typename?: 'SubscriptionEdge', node?: { __typename?: 'Subscription', subscribedID: any, subcribedWebsite?: { __typename?: 'Website', piecesCount: number, pieces: { __typename?: 'PieceConnection', edges?: Array<{ __typename?: 'PieceEdge', node?: { __typename?: 'Piece', id: string, name: string, cid: string, approved: boolean } | null } | null> | null } } | null } | null } | null> | null } } | null };

export type PieceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PieceQuery = { __typename?: 'Query', node?: { __typename?: 'CeramicAccount' } | { __typename?: 'Piece', websiteID: any, id: string, cid: string, name: string, approved: boolean } | { __typename?: 'Subscription' } | { __typename?: 'Website' } | null };

export type CreatePieceMutationVariables = Exact<{
  input: CreatePieceInput;
}>;


export type CreatePieceMutation = { __typename?: 'Mutation', createPiece?: { __typename?: 'CreatePiecePayload', document: { __typename?: 'Piece', websiteID: any, id: string, name: string, cid: string, approved: boolean } } | null };

export type UpdatePieceMutationVariables = Exact<{
  input: UpdatePieceInput;
}>;


export type UpdatePieceMutation = { __typename?: 'Mutation', updatePiece?: { __typename?: 'UpdatePiecePayload', document: { __typename?: 'Piece', websiteID: any, id: string, name: string, cid: string, approved: boolean } } | null };


export const WebsiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Website"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionsPageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"websiteName"}},{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionsPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribedID"}},{"kind":"Field","name":{"kind":"Name","value":"subcribedWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pieces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"piecesPageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"piecesCount"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteQuery, WebsiteQueryVariables>;
export const PieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Piece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Piece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteID"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}}]}}]}}]}}]} as unknown as DocumentNode<PieceQuery, PieceQueryVariables>;
export const CreatePieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePieceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPiece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteID"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePieceMutation, CreatePieceMutationVariables>;
export const UpdatePieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePieceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePiece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteID"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePieceMutation, UpdatePieceMutationVariables>;