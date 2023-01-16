import { gql } from '@apollo/client'
import { graphql } from './__generated__/gql'

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

export const WebsiteData = gql`
  fragment WebsiteData on Website {
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
          super
          inactive
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
          CID
          name
          category
          details {
            tags
            type
            media
            IMDBID
            TMDBID
            format
            poster
            bitrate
            albumTitle
            artistNames
            releaseType
            musicBrainzID
            imageThumbnailCID
            initialReleaseYear
            releaseDescription
          }
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
          subscribedID
          subscribedWebsite {
            websiteName
            description
            image
            pieces(first: $piecesPageSize) {
              edges {
                node {
                  id
                  CID
                  name
                  category
                  details {
                    tags
                    type
                    media
                    IMDBID
                    TMDBID
                    format
                    poster
                    bitrate
                    albumTitle
                    artistNames
                    releaseType
                    musicBrainzID
                    imageThumbnailCID
                    initialReleaseYear
                    releaseDescription
                  }
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
`

export const AdminFragment = gql`
  fragment WebsiteAdmin on Admin {
    id
    adminID
    admin {
      address
      ensName
    }
    super
    inactive
    metadata {
      createdAt
      updatedAt
    }
  }
`

export const UserFragment = gql`
  fragment WebsiteUser on EthAccount {
    id
    address
    ensName
    metadata {
      createdAt
      updatedAt
    }
  }
`
export const GET_WEBSITE = graphql(`
  query Website($id: ID!) {
    node(id: $id) {
      ... on Website {
        id
        websiteName
        description
        image
      }
    }
  }
`)

export const GET_WEBSITE_DATA = graphql(`
  query WebsiteData(
    $id: ID!
    $adminsPageSize: Int!
    $piecesPageSize: Int!
    $subscriptionsPageSize: Int!
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
              super
              inactive
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
              CID
              name
              category
              details {
                tags
                type
                media
                IMDBID
                TMDBID
                format
                poster
                bitrate
                albumTitle
                artistNames
                releaseType
                musicBrainzID
                imageThumbnailCID
                initialReleaseYear
                releaseDescription
              }
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
              subscribedID
              subscribedWebsite {
                websiteName
                description
                image
                pieces(first: $piecesPageSize) {
                  edges {
                    node {
                      id
                      CID
                      name
                      category
                      details {
                        tags
                        type
                        media
                        IMDBID
                        TMDBID
                        format
                        poster
                        bitrate
                        albumTitle
                        artistNames
                        releaseType
                        musicBrainzID
                        imageThumbnailCID
                        initialReleaseYear
                        releaseDescription
                      }
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

export const GET_WEBSITE_USERS = graphql(`
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

export const GET_WEBSITE_PIECES = graphql(`
  query WebsitePieces($id: ID!, $piecesPageSize: Int!) {
    node(id: $id) {
      ... on Website {
        id
        pieces(first: $piecesPageSize) {
          edges {
            node {
              id
              CID
              name
              category
              details {
                tags
                type
                media
                IMDBID
                TMDBID
                format
                poster
                bitrate
                albumTitle
                artistNames
                releaseType
                musicBrainzID
                imageThumbnailCID
                initialReleaseYear
                releaseDescription
              }
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

export const GET_ETH_ACCOUNT = graphql(`
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

export const CREATE_ETH_ACCOUNT = graphql(`
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

export const GET_PIECE = graphql(`
  query Piece($id: ID!) {
    node(id: $id) {
      ... on Piece {
        id
        CID
        name
        category
        details {
          tags
          type
          media
          IMDBID
          TMDBID
          format
          poster
          bitrate
          albumTitle
          artistNames
          releaseType
          musicBrainzID
          imageThumbnailCID
          initialReleaseYear
          releaseDescription
        }
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

export const CREATE_PIECE = graphql(`
  mutation CreatePiece($input: CreatePieceInput!) {
    createPiece(input: $input) {
      document {
        id
        CID
        name
        category
        details {
          tags
          type
          media
          IMDBID
          TMDBID
          format
          poster
          bitrate
          albumTitle
          artistNames
          releaseType
          musicBrainzID
          imageThumbnailCID
          initialReleaseYear
          releaseDescription
        }
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

export const UPDATE_PIECE = graphql(`
  mutation UpdatePiece($input: UpdatePieceInput!) {
    updatePiece(input: $input) {
      document {
        id
        CID
        name
        category
        details {
          tags
          type
          media
          IMDBID
          TMDBID
          format
          poster
          bitrate
          albumTitle
          artistNames
          releaseType
          musicBrainzID
          imageThumbnailCID
          initialReleaseYear
          releaseDescription
        }
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


export const GET_SUBSCRIPTION_INDEX = graphql(`
  query SubscriptionIndex($pageSize: Int!) {
    subscriptionIndex(first: $pageSize) {
      edges {
        node {
          id
          websiteID
          website {
            websiteName
            description
            image
          }
          subscribedID
        }
      }
    }
  }
`)

export const GET_SUBSCRIPTION = graphql(`
  query Subscription($id: ID!, $piecesPageSize: Int!) {
    node(id: $id) {
      ... on Subscription {
        id
        subscribedID
        subscribedWebsite {
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

export const CREATE_SUBSCRIPTION = graphql(`
  mutation CreateSubscription($input: CreateSubscriptionInput!, $piecesPageSize: Int!) {
    createSubscription(input: $input) {
      document {
        id
        subscribedID
        subscribedWebsite {
          pieces(first: $piecesPageSize) {
            edges {
              node {
                id
                CID
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

export const UPDATE_SUBSCRIPTION = graphql(`
  mutation UpdateSubscription($input: UpdateSubscriptionInput!) {
    updateSubscription(input: $input) {
      document {
        id
        subscribedID
        subscribedWebsite {
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

export const GET_ADMIN = graphql(`
  query Admin($id: ID!) {
    node(id: $id) {
      ... on Admin {
        id
        adminID
        admin {
          address
          ensName
        }
        super
        inactive
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const CREATE_ADMIN = graphql(`
  mutation CreateAdmin($input: CreateAdminInput!) {
    createAdmin(input: $input) {
      document {
        id
        adminID
        admin {
          address
          ensName
        }
        super
        inactive
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const UPDATE_ADMIN = graphql(`
  mutation UpdateaAdmin($input: UpdateAdminInput!) {
    updateAdmin(input: $input) {
      document {
        id
        adminID
        admin {
          address
          ensName
        }
        super
        inactive
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const GET_WEBSITE_INDEX = graphql(`
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

export const pieceCategories = [
  'TV Shows',
  'Movies',
  'Audiobooks',
  'Games',
  'Books',
  'Music',
  'Videos',
  'Other',
]

export const releaseTypesOptions = [
  'Album',
  'Soundtrack',
  'EP',
  'Anthology',
  'Compilation',
  'Single',
  'Live Album',
  'Remix',
  'Bootleg',
  'Interview',
  'Mixtape',
  'Demo',
  'Concert Recording',
  'DJ Mix',
  'Unknown',
]

export const formatOptions = ['MP3', 'FLAC', 'AAC', 'AC3', 'DTS']

export const mediaOptions = [
  'CD',
  'DVD',
  'Vinyl',
  'Soundboard',
  'SACD',
  'DAT',
  'WEB',
  'Blu-Ray',
]

export const movieTypeOptions = [
  'Feature Film',
  'Short Film',
  'Miniseries',
  'Stand-up Comedy',
  'Live Performance',
  'Movie Collection',
]