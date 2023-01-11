import { gql } from './__generated__/gql'

export const adminsPageSize = 50
export const piecesPageSize = 50
export const subscriptionsPageSize = 50
export const usersPageSize = 1000

export const websiteDataQueryParams = {
  adminsPageSize,
  piecesPageSize,
  subscriptionsPageSize,
  usersPageSize
}

export const GET_WEBSITE_DATA = gql(`
  query WebsiteData(
      $id: ID!, 
      $adminsPageSize: Int!,
      $piecesPageSize: Int!, 
      $subscriptionsPageSize: Int!, 
      $usersPageSize: Int!
    ) {
    node(id: $id) {
      ... on Website {
        id
        admins(first: $adminsPageSize) {
              edges {
                node {
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
              }
            }
        adminsCount
        pieces(first: $piecesPageSize) {
          edges {
            node {
              id
              cid
              name
              category
              approved
              rejected
              rejectionReason
              ownerID
              owner {
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
        piecesCount
        subscriptions(first: $subscriptionsPageSize) {
          edges {
            node {
              id
              subscribedWebsite {
                id
                pieces(first: $piecesPageSize) {
                  edges {
                    node {
                      id
                      cid
                      name
                      category
                      approved
                      rejected
                      rejectionReason
                      metadata {
                        createdAt
                        updatedAt
                      }
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
              id
              address
              ensName
              metadata {
                createdAt
                updatedAt
              }
            }
          }
        }
        usersCount
      }
    }
  }
`)

export const GET_WEBSITE_USERS = gql(`
  query WebsiteUsers(
    $id: ID!,
    $usersPageSize: Int!, 
  ) {
      node(id: $id) {
        ... on Website {
          id
          users(first: $usersPageSize) {
            edges {
              node {
                id
                address
                ensName
                metadata {
                  createdAt
                  updatedAt
                }
              }
            }
          }
          usersCount
        }
      }
    }
`)

export const GET_WEBSITE_PIECES = gql(`
  query WebsitePieces(
    $id: ID!
    $piecesPageSize: Int!,
  ) {
      node(id: $id) {
        ... on Website {
          id
          pieces(first: $piecesPageSize) {
            edges {
              node {
                id
                cid
                name
                category
                approved
                rejected
                rejectionReason
                ownerID
                owner {
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
          piecesCount
        }
      }
    }
`)

export const GET_ETH_ACCOUNT = gql(`
  query EthAccount($id: ID!) {
    node(id: $id) {
      ... on EthAccount {
        id
        address
        ensName
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const CREATE_ETH_ACCOUNT = gql(`
  mutation CreateEthAccount($input: CreateEthAccountInput!) {
    createEthAccount(input: $input) {
      document {
        id
        address
        ensName
        metadata {
          createdAt
          updatedAt
        }
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
        category
        approved
        rejected
        rejectionReason
        ownerID
        owner {
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

export const CREATE_PIECE = gql(`
  mutation CreatePiece($input: CreatePieceInput!) {
    createPiece(input: $input) {
      document {
        id
        cid
        name
        category
        approved
        rejected
        rejectionReason
        ownerID
        owner {
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

export const UPDATE_PIECE = gql(`
  mutation UpdatePiece($input: UpdatePieceInput!) {
    updatePiece(input: $input) {
      document {
        id
        cid
        name
        category
        approved
        rejected
        rejectionReason
        ownerID
        owner {
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

export const GET_SUBSCRIPTION = gql(`
  query Subscription($id: ID!, $piecesPageSize: Int!) {
    node(id: $id) {
      ... on Subscription {
        id
        subscribedWebsite {
          id
          websiteName
          description
          image
        }
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const CREATE_SUBSCRIPTION = gql(`
  mutation CreateSubscription($input: CreateSubscriptionInput!, $piecesPageSize: Int!) {
    createSubscription(input: $input) {
      document {
        id
        subscribedWebsite {
          id
          pieces(first: $piecesPageSize) {
            edges {
              node {
                id
                cid
                name
                approved
                rejected
                metadata {
                  createdAt
                  updatedAt
                }
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
`)

export const UPDATE_SUBSCRIPTION = gql(`
  mutation UpdateSubscription($input: UpdateSubscriptionInput!) {
    updateSubscription(input: $input) {
      document {
        id
        subscribedWebsite {
          id
          websiteName
          description
          image
        }
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
    }
  }
`)

export const CREATE_ADMIN = gql(`
  mutation CreateAdmin($input: CreateAdminInput!) {
    createAdmin(input: $input) {
      document {
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
    }
  }
`)

export const GET_WEBSITE_INDEX = gql(`
  query WebsiteIndex($pageSize: Int!) {
    websiteIndex(first: $pageSize) {
      edges {
        node {
          id
          websiteName
          description
          image
        }
      }
    }
  }
`)
