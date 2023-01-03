import { gql } from "./__generated__/gql"


export const WEBSITE_INFO = gql(`
  query Website($id: ID!, $piecesPageSize: Int!, $subscriptionsPageSize: Int!) {
    node(id: $id) {
      ... on Website {
        id
        websiteName
        pieces(first: $piecesPageSize) {
          edges {
            node {
              id
              name
              cid
              approved
            }
          }
        }
        piecesCount
        subscriptions(first: $subscriptionsPageSize) {
          edges {
            node {
              subscribedID
              subcribedWebsite {
                pieces(first: $piecesPageSize) {
                  edges {
                    node {
                      id
                      name
                      cid
                      approved
                    }
                  }
                }
                piecesCount
              }
            }
          }
        }
      }
    }
  }
`)

export const GET_PIECE = gql(`
  query Piece($id: ID!) {
    node(id: $id) {
      ... on Piece {
        websiteID
        id
        cid
        name
        approved
        inGarbage
      }
    }
  }
`)

export const CREATE_PIECE = gql(`
  mutation CreatePiece($input: CreatePieceInput!) {
    createPiece(input: $input) {
      document {
        websiteID
        id
        name
        cid
        approved
        inGarbage
      }
    }
  }
`)

export const UPDATE_PIECE = gql(`
  mutation UpdatePiece($input: UpdatePieceInput!) {
    updatePiece(input: $input) {
      document {
        websiteID
        id
        name
        cid
        approved
        inGarbage
      }
    }
  }
`)