import { gql } from "./__generated__/gql"

export const WEBSITE_INFO = gql(`
  query Website($id: ID!, $piecesPageSize: Int!, $subscriptionsPageSize: Int!) {
    node(id: $id) {
      ... on Website {
        id
        ownerID
        websiteName
        owner {
          address
          ensName
        }
        pieces(first: $piecesPageSize) {
          edges {
            node {
              id
              cid
              name
              ownerID
              owner {
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
          }
        }
        piecesCount
        subscriptions(first: $subscriptionsPageSize) {
          edges {
            node {
              id
              subscribedID
              subcribedWebsite {
                websiteName
                pieces(first: $piecesPageSize) {
                  edges {
                    node {
                      id
                      cid
                      name
                      ownerID
                      owner {
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
        admins(first: 20) {
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
      }
    }
  }
`)

export const GET_ETH_ACCOUNT = gql(`
  query EthAccount($id: ID!, $piecesPageSize: Int!) {
    node(id: $id) {
      ... on EthAccount {
        id
        address
        ensName
        pieces(first: $piecesPageSize) {
          edges {
            node {
              id
              cid
              name
              ownerID
              owner {
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
        managedWebsites(first: 20) {
          edges {
            node {
              id
              websiteID
              website {
                websiteName
              }
            }
          }
        }
        managedWebsitesCount
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
