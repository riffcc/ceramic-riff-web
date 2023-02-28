import { gql } from '@apollo/client'
import { graphql } from './__generated__/gql'

export const pageSizeSmall = 50
export const pageSizeMedium = 100
export const pageSizeLarge = 400
export const pageSizeMax = 1000

export const websiteDataQueryParams = {
  pageSizeMedium
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
    pins(first: $pageSizeMedium) {
      edges {
        node {
          id
          website {
            id
          }
          owner {
            id
            address
          }
          category {
            id
            name
          }
          piece {
            id
            CID
            name
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
            metadata {
              createdAt
              updatedAt
            }
          }
          approved
          rejected
          rejectionReason
          deleted
          likesCount
          likes(first: $pageSizeMedium) {
            edges {
              node {
                id
                pin {
                  id
                }
                owner {
                  address
                }
              }
            }
          }
          dislikesCount
          dislikes(first: $pageSizeMedium) {
            edges {
              node {
                id
                pin {
                  id
                }
                owner {
                  address
                }
              }
            }
          }
        }
      }
    }
    pinsCount
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
            pins(first: $pageSizeMedium) {
              edges {
                node {
                  id
                  website {
                    id
                  }
                  owner {
                    id
                    address
                  }
                  category {
                    id
                    name
                  }
                  piece {
                    id
                    CID
                    name
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
                    metadata {
                      createdAt
                      updatedAt
                    }
                  }
                  approved
                  rejected
                  rejectionReason
                  deleted
                  likesCount
                  likes(first: $pageSizeMedium) {
                    edges {
                      node {
                        id
                        pin {
                          id
                        }
                        owner {
                          address
                        }
                      }
                    }
                  }
                  dislikesCount
                  dislikes(first: $pageSizeMedium) {
                    edges {
                      node {
                        id
                        pin {
                          id
                        }
                        owner {
                          address
                        }
                      }
                    }
                  }
                }
              }
            }
            pinsCount
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
          pins(first: $pageSizeMedium) {
            edges {
              node {
                id
              }
            }
          }
          pinsCount
          pinLikes(first: $pageSizeMedium) {
            edges {
              node {
                id
                pin {
                  id
                }
                owner {
                  address
                }
              }
            }
          }
          pinLikesCount
          pinDislikes(first: $pageSizeMedium) {
            edges {
              node {
                id
                pin {
                  id
                }
                owner {
                  address
                }
              }
            }
          }
          pinDislikesCount
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
          pin {
            id
            website {
              id
            }
            owner {
              id
              address
            }
            category {
              id
              name
            }
            piece {
              id
              CID
              name
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
              metadata {
                createdAt
                updatedAt
              }
            }
            approved
            rejected
            rejectionReason
            deleted
            likesCount
            likes(first: $pageSizeMedium) {
              edges {
                node {
                  id
                  pin {
                    id
                  }
                  owner {
                    address
                  }
                }
              }
            }
            dislikesCount
            dislikes(first: $pageSizeMedium) {
              edges {
                node {
                  id
                  pin {
                    id
                  }
                  owner {
                    address
                  }
                }
              }
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
          pins(first: $pageSizeMedium) {
            edges {
              node {
                id
                website {
                  id
                }
                owner {
                  id
                  address
                }
                category {
                  id
                  name
                }
                piece {
                  id
                  CID
                  name
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
                  metadata {
                    createdAt
                    updatedAt
                  }
                }
                approved
                rejected
                rejectionReason
                deleted
                likesCount
                likes(first: $pageSizeMedium) {
                  edges {
                    node {
                      id
                      pin {
                        id
                      }
                      owner {
                        address
                      }
                    }
                  }
                }
                dislikesCount
                dislikes(first: $pageSizeMedium) {
                  edges {
                    node {
                      id
                      pin {
                        id
                      }
                      owner {
                        address
                      }
                    }
                  }
                }
              }
            }
          }
          pinsCount
          likesCount
          likes(first: $pageSizeMedium) {
            edges {
              node {
                id
                pin {
                  id
                }
                owner {
                  address
                }
              }
            }
          }
          dislikesCount
          dislikes(first: $pageSizeMedium) {
            edges {
              node {
                id
                pin {
                  id
                }
                owner {
                  address
                }
              }
            }
          }
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
    pins(first: $pageSizeMedium) {
      edges {
        node {
          id
        }
      }
    }
    pinsCount
    pinLikes(first: $pageSizeMedium) {
      edges {
        node {
          id
          pin {
            id
          }
          owner {
            address
          }
        }
      }
    }
    pinLikesCount
    pinDislikes(first: $pageSizeMedium) {
      edges {
        node {
          id
          pin {
            id
          }
          owner {
            address
          }
        }
      }
    }
    pinDislikesCount
    metadata {
      createdAt
      updatedAt
    }
  }
`

export const PinLikeFragment = gql`
  fragment PinLike on PinLike {
    id
    pin {
      id
    }
    owner {
      address
    }
  }
`

export const PinDislikeFragment = gql`
  fragment PinDislike on PinDislike {
    id
    pin {
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

export const PinFragment = gql`
  fragment Pin on Pin {
    id
    website {
      id
    }
    owner {
      id
      address
    }
    category {
      id
      name
    }
    piece {
      id
      CID
      name
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
      metadata {
        createdAt
        updatedAt
      }
    }
    approved
    rejected
    rejectionReason
    deleted
    likesCount
    likesCount
    likes(first: $pageSizeMedium) {
      edges {
        node {
          id
          pin {
            id
          }
          owner {
            address
          }
        }
      }
    }
    dislikesCount
    dislikes(first: $pageSizeMedium) {
      edges {
        node {
          id
          pin {
            id
          }
          owner {
            address
          }
        }
      }
    }
  }
`
export const PieceFragment = gql`
  fragment Piece on Piece {
    id
    CID
    name
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
  query WebsiteData($id: ID!, $pageSizeMedium: Int!) {
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
        pins(first: $pageSizeMedium) {
          edges {
            node {
              id
              website {
                id
              }
              owner {
                id
                address
              }
              category {
                id
                name
              }
              piece {
                id
                CID
                name
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
                metadata {
                  createdAt
                  updatedAt
                }
              }
              approved
              rejected
              rejectionReason
              deleted
              likesCount
              likes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              dislikesCount
              dislikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
            }
          }
        }
        pinsCount
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
                pins(first: $pageSizeMedium) {
                  edges {
                    node {
                      id
                      website {
                        id
                      }
                      owner {
                        id
                        address
                      }
                      category {
                        id
                        name
                      }
                      piece {
                        id
                        CID
                        name
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
                        metadata {
                          createdAt
                          updatedAt
                        }
                      }
                      approved
                      rejected
                      rejectionReason
                      deleted
                      likesCount
                      likes(first: $pageSizeMedium) {
                        edges {
                          node {
                            id
                            pin {
                              id
                            }
                            owner {
                              address
                            }
                          }
                        }
                      }
                      dislikesCount
                      dislikes(first: $pageSizeMedium) {
                        edges {
                          node {
                            id
                            pin {
                              id
                            }
                            owner {
                              address
                            }
                          }
                        }
                      }
                    }
                  }
                }
                pinsCount
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
              pins(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                  }
                }
              }
              pinsCount
              pinLikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              pinLikesCount
              pinDislikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              pinDislikesCount
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
              pin {
                id
                website {
                  id
                }
                owner {
                  id
                  address
                }
                category {
                  id
                  name
                }
                piece {
                  id
                  CID
                  name
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
                  metadata {
                    createdAt
                    updatedAt
                  }
                }
                approved
                rejected
                rejectionReason
                deleted
                likesCount
                likes(first: $pageSizeMedium) {
                  edges {
                    node {
                      id
                      pin {
                        id
                      }
                      owner {
                        address
                      }
                    }
                  }
                }
                dislikesCount
                dislikes(first: $pageSizeMedium) {
                  edges {
                    node {
                      id
                      pin {
                        id
                      }
                      owner {
                        address
                      }
                    }
                  }
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
              pins(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    website {
                      id
                    }
                    owner {
                      id
                      address
                    }
                    category {
                      id
                      name
                    }
                    piece {
                      id
                      CID
                      name
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
                      metadata {
                        createdAt
                        updatedAt
                      }
                    }
                    approved
                    rejected
                    rejectionReason
                    deleted
                    likesCount
                    likes(first: $pageSizeMedium) {
                      edges {
                        node {
                          id
                          pin {
                            id
                          }
                          owner {
                            address
                          }
                        }
                      }
                    }
                    dislikesCount
                    dislikes(first: $pageSizeMedium) {
                      edges {
                        node {
                          id
                          pin {
                            id
                          }
                          owner {
                            address
                          }
                        }
                      }
                    }
                  }
                }
              }
              pinsCount
              likesCount
              likes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              dislikesCount
              dislikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
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
              pins(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                  }
                }
              }
              pinsCount
              pinLikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              pinLikesCount
              pinDislikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              pinDislikesCount
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

export const GET_WEBSITE_PINS = graphql(`
  query WebsitePieces($id: ID!, $pageSizeMedium: Int!) {
    node(id: $id) {
      ... on Website {
        id
        pins(first: $pageSizeMedium) {
          edges {
            node {
              id
              website {
                id
              }
              owner {
                id
                address
              }
              category {
                id
                name
              }
              piece {
                id
                CID
                name
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
                metadata {
                  createdAt
                  updatedAt
                }
              }
              approved
              rejected
              rejectionReason
              deleted
              likesCount
              likes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
              dislikesCount
              dislikes(first: $pageSizeMedium) {
                edges {
                  node {
                    id
                    pin {
                      id
                    }
                    owner {
                      address
                    }
                  }
                }
              }
            }
          }
        }
        pinsCount
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
        pins(first: $pageSizeMedium) {
          edges {
            node {
              id
            }
          }
        }
        pinsCount
        pinLikes(first: $pageSizeMedium) {
          edges {
            node {
              id
              pin {
                id
              }
              owner {
                address
              }
            }
          }
        }
        pinLikesCount
        pinDislikes(first: $pageSizeMedium) {
          edges {
            node {
              id
              pin {
                id
              }
              owner {
                address
              }
            }
          }
        }
        pinDislikesCount
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const CREATE_ETH_ACCOUNT = graphql(`
  mutation CreateEthAccount($input: CreateEthAccountInput!, $pageSizeMedium: Int!) {
    createEthAccount(input: $input) {
      document {
        id
        address
        ensName
        pins(first: $pageSizeMedium) {
          edges {
            node {
              id
            }
          }
        }
        pinsCount
        pinLikes(first: $pageSizeMedium) {
          edges {
            node {
              id
              pin {
                id
              }
              owner {
                address
              }
            }
          }
        }
        pinLikesCount
        pinDislikes(first: $pageSizeMedium) {
          edges {
            node {
              id
              pin {
                id
              }
              owner {
                address
              }
            }
          }
        }
        pinDislikesCount
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const GET_PIN = graphql(`
  query Pin($id: ID!, $pageSizeMedium: Int!) {
    node(id: $id) {
      ... on Pin {
        id
        website {
          id
        }
        owner {
          id
          address
        }
        category {
          id
          name
        }
        piece {
          id
          CID
          name
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
          metadata {
            createdAt
            updatedAt
          }
        }
        approved
        rejected
        rejectionReason
        deleted
        likesCount
        likes(first: $pageSizeMedium) {
          edges {
            node {
              id
              pin {
                id
              }
              owner {
                address
              }
            }
          }
        }
        dislikesCount
        dislikes(first: $pageSizeMedium) {
          edges {
            node {
              id
              pin {
                id
              }
              owner {
                address
              }
            }
          }
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
        metadata {
          createdAt
          updatedAt
        }
      }
    }
  }
`)

export const UPDATE_PIN = graphql(`
  mutation UpdatePin($input: UpdatePinInput!) {
    updatePin(input: $input) {
      document {
        id
        website {
          id
        }
        owner {
          id
          address
        }
        category {
          id
          name
        }
        piece {
          id
          CID
          name
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
          metadata {
            createdAt
            updatedAt
          }
        }
        approved
        rejected
        rejectionReason
        deleted
        likesCount
      }
    }
  }
`)

export const CREATE_PIN_LIKE = graphql(`
  mutation CreatePinLike($input: CreatePinLikeInput!) {
    createPinLike(input: $input) {
      document {
        id
        pin {
          id
        }
        owner {
          address
        }
      }
    }
  }
`)

export const CREATE_PIN_DISLIKE = graphql(`
  mutation CreatePinDislike($input: CreatePinDislikeInput!) {
    createPinDislike(input: $input) {
      document {
        id
        pin {
          id
        }
        owner {
          address
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

export const pinCategories = [
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
