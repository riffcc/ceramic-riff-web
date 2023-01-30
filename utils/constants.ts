import { gql } from '@apollo/client'
import { graphql } from './__generated__/gql'

export const pageSizeSmall = 50
export const pageSizeMedium = 100
export const pageSizeLarge = 400
export const pageSizeMax = 1000

export const websiteDataQueryParams = {
  pageSizeMedium,
  pageSizeMax
}

export const WebsiteData = gql`
  fragment WebsiteData on Website {
    id
    admins(first: $pageSizeMedium) {
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
    pieces(first: $pageSizeMedium) {
      edges {
        node {
          id
          CID
          name
          category {
            id
            name
          }
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
          likes(first: $pageSizeMax) {
            edges {
              node {
                id
                owner {
                  address
                }
                piece {
                  id
                }
              }
            }
          }
          likesCount
          dislikes(first: $pageSizeMax) {
            edges {
              node {
                id
                owner {
                  address
                }
                piece {
                  id
                }
              }
            }
          }
          dislikesCount
          metadata {
            createdAt
            updatedAt
          }
        }
      }
    }
    piecesCount
    subscriptions(first: $pageSizeMedium) {
      edges {
        node {
          id
          subscribedID
          subscribedWebsite {
            id
            websiteName
            description
            image
            pieces(first: $pageSizeMedium) {
              edges {
                node {
                  id
                  CID
                  name
                  category {
                    id
                    name
                  }
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
                  likes(first: $pageSizeMax) {
                    edges {
                      node {
                        id
                        owner {
                          address
                        }
                        piece {
                          id
                        }
                      }
                    }
                  }
                  likesCount
                  dislikes(first: $pageSizeMax) {
                    edges {
                      node {
                        id
                        owner {
                          address
                        }
                        piece {
                          id
                        }
                      }
                    }
                  }
                  dislikesCount
                  metadata {
                    createdAt
                    updatedAt
                  }
                }
              }
            }
            piecesCount
          }
          inactive
          metadata {
            createdAt
            updatedAt
          }
        }
      }
    }
    subscriptionsCount
    users(first: $pageSizeMedium) {
      edges {
        node {
          id
          address
          ensName
          pieces(first: $pageSizeMedium) {
            edges {
              node {
                id
              }
            }
          }
          piecesCount
          pieceLikes(first: $pageSizeMedium) {
            edges {
              node {
                id
                piece {
                  id
                }
                owner {
                  address
                }
              }
            }
          }
          pieceLikesCount
          pieceDislikes(first: $pageSizeMedium) {
            edges {
              node {
                id
                piece {
                  id
                }
                owner {
                  address
                }
              }
            }
          }
          pieceDislikesCount
          metadata {
            createdAt
            updatedAt
          }
        }
      }
    }
    usersCount
    featured(first: $pageSizeMedium) {
      edges {
        node {
          id
          piece {
            id
            CID
            name
            category {
              id
              name
            }
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
          startAt
          endAt
        }
      }
    }
    featuredCount
    categories(first: $pageSizeMedium) {
      edges {
        node {
          id
          name
          pieces(first: $pageSizeMedium) {
            edges {
              node {
                id
                CID
                name
                category {
                  id
                  name
                }
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
                likes(first: $pageSizeMax) {
                  edges {
                    node {
                      id
                      owner {
                        address
                      }
                      piece {
                        id
                      }
                    }
                  }
                }
                likesCount
                dislikes(first: $pageSizeMax) {
                  edges {
                    node {
                      id
                      owner {
                        address
                      }
                      piece {
                        id
                      }
                    }
                  }
                }
                dislikesCount
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
          likesCount
          dislikesCount
        }
      }
    }
    categoriesCount
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
    pieces(first: $pageSizeMedium) {
      edges {
        node {
          id
        }
      }
    }
    piecesCount
    pieceLikes(first: $pageSizeMedium) {
      edges {
        node {
          id
          piece {
            id
          }
          owner {
            address
          }
        }
      }
    }
    pieceLikesCount
    pieceDislikes(first: $pageSizeMedium) {
      edges {
        node {
          id
          piece {
            id
          }
          owner {
            address
          }
        }
      }
    }
    pieceDislikesCount
    metadata {
      createdAt
      updatedAt
    }
  }
`
export const PieceLikeFragment = gql`
  fragment PieceLike on PieceLike {
    id
    piece {
      id
    }
    owner {
      address
    }
  }
`
export const PieceDislikeFragment = gql`
  fragment PieceDislike on PieceDislike {
    id
    piece {
      id
    }
    owner {
      address
    }
  }
`
export const CategoryFragment = gql`
  fragment Category on Category {
    id
    name
  }
`
export const PieceFragment = gql`
  fragment Piece on Piece {
    id
    CID
    name
    category {
      id
      name
    }
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
    likes(first: $pageSizeMax) {
      edges {
        node {
          id
          owner {
            address
          }
          piece {
            id
          }
        }
      }
    }
    likesCount
    dislikes(first: $pageSizeMax) {
      edges {
        node {
          id
          owner {
            address
          }
          piece {
            id
          }
        }
      }
    }
    dislikesCount
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
  query WebsiteData($id: ID!, $pageSizeMedium: Int!, $pageSizeMax: Int!) {
    node(id: $id) {
      ... on Website {
        id
        admins(first: $pageSizeMedium) {
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
        pieces(first: $pageSizeMedium) {
          edges {
            node {
              id
              CID
              name
              category {
                id
                name
              }
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
              likes(first: $pageSizeMax) {
                edges {
                  node {
                    id
                    owner {
                      address
                    }
                    piece {
                      id
                    }
                  }
                }
              }
              likesCount
              dislikes(first: $pageSizeMax) {
                edges {
                  node {
                    id
                    owner {
                      address
                    }
                    piece {
                      id
                    }
                  }
                }
              }
              dislikesCount
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
        subscriptions(first: $pageSizeMedium) {
          edges {
            node {
              id
              subscribedID
              subscribedWebsite {
                id
                websiteName
                description
                image
                pieces(first: $pageSizeMedium) {
                  edges {
                    node {
                      id
                      CID
                      name
                      category {
                        id
                        name
                      }
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
                      likes(first: $pageSizeMax) {
                        edges {
                          node {
                            id
                            owner {
                              address
                            }
                            piece {
                              id
                            }
                          }
                        }
                      }
                      likesCount
                      dislikes(first: $pageSizeMax) {
                        edges {
                          node {
                            id
                            owner {
                              address
                            }
                            piece {
                              id
                            }
                          }
                        }
                      }
                      dislikesCount
                      metadata {
                        createdAt
                        updatedAt
                      }
                    }
                  }
                }
                piecesCount
              }
              inactive
              metadata {
                createdAt
                updatedAt
              }
            }
          }
        }
        subscriptionsCount
        users(first: $pageSizeMedium) {
          edges {
            node {
              id
              address
              ensName
              pieces(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                  }
                }
              }
              piecesCount
              pieceLikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    piece {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              pieceLikesCount
              pieceDislikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    piece {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              pieceDislikesCount
              metadata {
                createdAt
                updatedAt
              }
            }
          }
        }
        usersCount
        featured(first: $pageSizeMedium) {
          edges {
            node {
              id
              piece {
                id
                CID
                name
                category {
                  id
                  name
                }
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
              startAt
              endAt
            }
          }
        }
        featuredCount
        categories(first: $pageSizeMedium) {
          edges {
            node {
              id
              name
              pieces(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    CID
                    name
                    category {
                      id
                      name
                    }
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
                    likes(first: $pageSizeMax) {
                      edges {
                        node {
                          id
                          owner {
                            address
                          }
                          piece {
                            id
                          }
                        }
                      }
                    }
                    likesCount
                    dislikes(first: $pageSizeMax) {
                      edges {
                        node {
                          id
                          owner {
                            address
                          }
                          piece {
                            id
                          }
                        }
                      }
                    }
                    dislikesCount
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
              likesCount
              dislikesCount
            }
          }
        }
        categoriesCount
      }
    }
  }
`)

export const GET_WEBSITE_USERS = graphql(`
  query WebsiteUsers($id: ID!, $pageSizeMedium: Int!) {
    node(id: $id) {
      ... on Website {
        id
        users(first: $pageSizeMedium) {
          edges {
            node {
              id
              address
              ensName
              pieces(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                  }
                }
              }
              piecesCount
              pieceLikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    piece {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              pieceLikesCount
              pieceDislikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    piece {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              pieceDislikesCount
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
  query WebsitePieces($id: ID!, $piecesPageSize: Int!, $pageSizeMax: Int!) {
    node(id: $id) {
      ... on Website {
        id
        pieces(first: $piecesPageSize) {
          edges {
            node {
              id
              CID
              name
              category {
                id
                name
              }
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
              likes(first: $pageSizeMax) {
                edges {
                  node {
                    id
                    owner {
                      address
                    }
                    piece {
                      id
                    }
                  }
                }
              }
              likesCount
              dislikes(first: $pageSizeMax) {
                edges {
                  node {
                    id
                    owner {
                      address
                    }
                    piece {
                      id
                    }
                  }
                }
              }
              dislikesCount
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
  query EthAccount($id: ID!, $pageSizeMedium: Int!) {
    node(id: $id) {
      ... on EthAccount {
        id
        address
        ensName
        pieces(first: $pageSizeMedium) {
          edges {
            node {
              id
            }
          }
        }
        piecesCount
        pieceLikes(first: $pageSizeMedium) {
          edges {
            node {
              id
              piece {
                id
              }
              owner {
                address
              }
            }
          }
        }
        pieceLikesCount
        pieceDislikes(first: $pageSizeMedium) {
          edges {
            node {
              id
              piece {
                id
              }
              owner {
                address
              }
            }
          }
        }
        pieceDislikesCount
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
  query Piece($id: ID!, $pageSizeMax: Int!) {
    node(id: $id) {
      ... on Piece {
        id
        CID
        name
        category {
          id
          name
        }
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
        likes(first: $pageSizeMax) {
          edges {
            node {
              id
              piece {
                id
              }
              owner {
                address
              }
            }
          }
        }
        likesCount
        dislikes(first: $pageSizeMax) {
          edges {
            node {
              id
              piece {
                id
              }
              owner {
                address
              }
            }
          }
        }
        dislikesCount
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
        category {
          id
          name
        }
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
        category {
          id
          name
        }
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

export const CREATE_PIECE_LIKE = graphql(`
  mutation CreatePieceLike($input: CreatePieceLikeInput!) {
    createPieceLike(input: $input) {
      document {
        id
        piece {
          id
        }
        owner {
          address
        }
      }
    }
  }
`)

export const CREATE_CATEGORY_LIKE = graphql(`
  mutation CreateCategoryLike($input: CreateCategoryLikeInput!) {
    createCategoryLike(input: $input) {
      document {
        id
        category {
          id
          name
        }
      }
    }
  }
`)

export const CREATE_PIECE_DISLIKE = graphql(`
  mutation CreatePieceDislike($input: CreatePieceDislikeInput!) {
    createPieceDislike(input: $input) {
      document {
        id
        piece {
          id
        }
        owner {
          address
        }
      }
    }
  }
`)

export const CREATE_CATEGORY_DISLIKE = graphql(`
  mutation CreateCategoryDislike($input: CreateCategoryDislikeInput!) {
    createCategoryDislike(input: $input) {
      document {
        id
        category {
          id
          name
        }
      }
    }
  }
`)

export const CREATE_FEATURED = graphql(`
  mutation CreateFeatured($input: CreateFeaturedInput!) {
    createFeatured(input: $input) {
      document {
        id
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
          subscribedID
          subscribedWebsite {
            id
            websiteName
            description
            image
          }
          inactive
          metadata {
            createdAt
            updatedAt
          }
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
          id
          websiteName
          description
          image
        }
        inactive
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const CREATE_SUBSCRIPTION = graphql(`
  mutation CreateSubscription($input: CreateSubscriptionInput!) {
    createSubscription(input: $input) {
      document {
        id
        subscribedID
        subscribedWebsite {
          id
          websiteName
          description
          image
        }
        inactive
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
          id
          websiteName
          description
          image
        }
        inactive
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
