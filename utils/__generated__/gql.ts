/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query Website($id: ID!, $piecesPageSize: Int!, $subscriptionsPageSize: Int!) {\n    node(id: $id) {\n      ... on Website {\n        id\n        websiteName\n        pieces(first: $piecesPageSize) {\n          edges {\n            node {\n              id\n              name\n              cid\n              approved\n            }\n          }\n        }\n        piecesCount\n        subscriptions(first: $subscriptionsPageSize) {\n          edges {\n            node {\n              subscribedID\n              subcribedWebsite {\n                pieces(first: $piecesPageSize) {\n                  edges {\n                    node {\n                      id\n                      name\n                      cid\n                      approved\n                    }\n                  }\n                }\n                piecesCount\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.WebsiteDocument,
    "\n  query Piece($id: ID!) {\n    node(id: $id) {\n      ... on Piece {\n        websiteID\n        id\n        cid\n        name\n        approved\n      }\n    }\n  }\n": types.PieceDocument,
    "\n  mutation CreatePiece($input: CreatePieceInput!) {\n    createPiece(input: $input) {\n      document {\n        websiteID\n        id\n        name\n        cid\n        approved\n      }\n    }\n  }\n": types.CreatePieceDocument,
    "\n  mutation UpdatePiece($input: UpdatePieceInput!) {\n    updatePiece(input: $input) {\n      document {\n        websiteID\n        id\n        name\n        cid\n        approved\n      }\n    }\n  }\n": types.UpdatePieceDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Website($id: ID!, $piecesPageSize: Int!, $subscriptionsPageSize: Int!) {\n    node(id: $id) {\n      ... on Website {\n        id\n        websiteName\n        pieces(first: $piecesPageSize) {\n          edges {\n            node {\n              id\n              name\n              cid\n              approved\n            }\n          }\n        }\n        piecesCount\n        subscriptions(first: $subscriptionsPageSize) {\n          edges {\n            node {\n              subscribedID\n              subcribedWebsite {\n                pieces(first: $piecesPageSize) {\n                  edges {\n                    node {\n                      id\n                      name\n                      cid\n                      approved\n                    }\n                  }\n                }\n                piecesCount\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Website($id: ID!, $piecesPageSize: Int!, $subscriptionsPageSize: Int!) {\n    node(id: $id) {\n      ... on Website {\n        id\n        websiteName\n        pieces(first: $piecesPageSize) {\n          edges {\n            node {\n              id\n              name\n              cid\n              approved\n            }\n          }\n        }\n        piecesCount\n        subscriptions(first: $subscriptionsPageSize) {\n          edges {\n            node {\n              subscribedID\n              subcribedWebsite {\n                pieces(first: $piecesPageSize) {\n                  edges {\n                    node {\n                      id\n                      name\n                      cid\n                      approved\n                    }\n                  }\n                }\n                piecesCount\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Piece($id: ID!) {\n    node(id: $id) {\n      ... on Piece {\n        websiteID\n        id\n        cid\n        name\n        approved\n      }\n    }\n  }\n"): (typeof documents)["\n  query Piece($id: ID!) {\n    node(id: $id) {\n      ... on Piece {\n        websiteID\n        id\n        cid\n        name\n        approved\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreatePiece($input: CreatePieceInput!) {\n    createPiece(input: $input) {\n      document {\n        websiteID\n        id\n        name\n        cid\n        approved\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePiece($input: CreatePieceInput!) {\n    createPiece(input: $input) {\n      document {\n        websiteID\n        id\n        name\n        cid\n        approved\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdatePiece($input: UpdatePieceInput!) {\n    updatePiece(input: $input) {\n      document {\n        websiteID\n        id\n        name\n        cid\n        approved\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePiece($input: UpdatePieceInput!) {\n    updatePiece(input: $input) {\n      document {\n        websiteID\n        id\n        name\n        cid\n        approved\n      }\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;