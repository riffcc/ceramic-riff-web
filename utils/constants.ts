import { gql } from './__generated__/gql'

export const adminsPageSize = 50
export const piecesPageSize = 50
export const subscriptionsPageSize = 50
export const usersPageSize = 1000
export const userPiecesPageSize = 1000

export const websiteDataQueryParams = {
  adminsPageSize,
  piecesPageSize,
  subscriptionsPageSize,
  usersPageSize,
  userPiecesPageSize,
}

export const ADMIN_FRAGMENT = gql(`
  fragment AdminUser on Admin {
    id
    adminID
    admin {
      address
      ensName
    }
    metadata {
      createdAt
      updatedAt
    }
  }
`)

export const USER_FRAGMENT = gql(`
  fragment User on EthAccount {
    id
    address
    ensName
    pieces(first: $userPiecesPageSize) {
      edges {
        node {
          id
          cid
          name
          ownerID
          owner {
            id
            address
            ensName
          }
          approved
          rejected
          websiteID
          website {
            websiteName
          }
          metadata {
            createdAt
            updatedAt
          }
        }
      }
    }
    piecesCount
    metadata {
      createdAt
      updatedAt
    }
  }
`)

export const PIECE_FRAGMENT = gql(`
  fragment PieceFragment on Piece {
    id
    cid
    name
    ownerID
    owner {
      id
      address
      ensName
    }
    approved
    rejected
    metadata {
      createdAt
      updatedAt
    }
  }
`)

export const GET_WEBSITE_DATA = gql(`
  query WebsiteData(
      $id: ID!, 
      $adminsPageSize: Int!,
      $piecesPageSize: Int!, 
      $subscriptionsPageSize: Int!, 
      $usersPageSize: Int!, 
      $userPiecesPageSize: Int!
    ) {
    node(id: $id) {
      ... on Website {
        admins(first: $adminsPageSize) {
              edges {
                node {
                  ...AdminUser
                }
              }
            }
        adminsCount
        pieces(first: $piecesPageSize) {
          edges {
            node {
              ...PieceFragment
            }
          }
        }
        piecesCount
        subscriptions(first: $subscriptionsPageSize) {
          edges {
            node {
              subcribedWebsite {
                pieces(first: $piecesPageSize) {
                  edges {
                    node {
                      ...PieceFragment
                    }
                  }
                }
                piecesCount
              }
              metadata {
                createdAt
                updatedAt
              }
            }
          }
        }
        subscriptionsCount
        users(first: $usersPageSize) {
          edges {
            node {
              ...User
            }
          }
        }
        usersCount
      }
    }
  }
`)

export const GET_ETH_ACCOUNT = gql(`
  query EthAccount($id: ID!, $userPiecesPageSize: Int!) {
    node(id: $id) {
      ... on EthAccount {
        ...User
      }
    }
  }
`)

export const CREATE_ETH_ACCOUNT = gql(`
  mutation CreateEthAccount($input: CreateEthAccountInput!, $userPiecesPageSize: Int!) {
    createEthAccount(input: $input) {
      document {
        ...User
      }
    }
  }
`)

export const GET_PIECE = gql(`
  query Piece($id: ID!) {
    node(id: $id) {
      ... on Piece {
        id
        cid
        name
        ownerID
        owner {
          id
          address
          ensName
        }
        approved
        rejected
        websiteID
        website {
          websiteName
        }
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const CREATE_PIECE = gql(`
  mutation CreatePiece($input: CreatePieceInput!) {
    createPiece(input: $input) {
      document {
        id
        cid
        name
        ownerID
        owner {
          id
          address
          ensName
        }
        approved
        rejected
        websiteID
        website {
          websiteName
        }
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const UPDATE_PIECE = gql(`
  mutation UpdatePiece($input: UpdatePieceInput!) {
    updatePiece(input: $input) {
      document {
        id
        cid
        name
        ownerID
        owner {
          id
          address
          ensName
        }
        approved
        rejected
        websiteID
        website {
          websiteName
        }
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const GET_SUBSCRIPTION = gql(`
  query Subscription($id: ID!) {
    node(id: $id) {
      ... on Subscription {
        id
        subcribedWebsite {
          websiteName
        }
        subscribedID
        website {
          websiteName
        }
        websiteID
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const CREATE_SUBSCRIPTION = gql(`
  mutation CreateSubscription($input: CreateSubscriptionInput!) {
    createSubscription(input: $input) {
      document {
        id
        subcribedWebsite {
          websiteName
        }
        subscribedID
        website {
          websiteName
        }
        websiteID
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const UPDATE_SUBSCRIPTION = gql(`
  mutation UpdateSubscription($input: UpdateSubscriptionInput!) {
    updateSubscription(input: $input) {
      document {
        id
        subcribedWebsite {
          websiteName
        }
        subscribedID
        website {
          websiteName
        }
        websiteID
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const GET_ADMIN = gql(`
  query Admin($id: ID!) {
    node(id: $id) {
      ... on Admin {
        id
        websiteID
        website {
          websiteName
        }
        adminID
        admin {
          id
          address
          ensName
        }
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const CREATE_ADMIN = gql(`
  mutation CreateAdmin($input: CreateAdminInput!) {
    createAdmin(input: $input) {
      document {
        id
        websiteID
        website {
          websiteName
        }
        adminID
        admin {
          id
          address
          ensName
        }
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)
