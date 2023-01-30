import { ComposeClient } from '@composedb/client'
import { useEffect, useState } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  from,
  NormalizedCacheObject,
  ApolloLink,
  Observable,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { createComposeClient } from './composeClient'
import getDID from './utils/getDID'
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

async function createApolloLinkWithCompose(composeClient: ComposeClient) {
  return new ApolloLink((operation) => {
    return new Observable((observer) => {
      composeClient.execute(operation.query, operation.variables).then(
        (result) => {
          observer.next(result)
          observer.complete()
        },
        (error) => {
          observer.error(error)
        }
      )
    })
  })
}

async function createApolloClient() {
  const did = await getDID()
  const composeClient = createComposeClient(did)
  const apolloLinkWithCompose = await createApolloLinkWithCompose(composeClient)
  return new ApolloClient({
    link: from([errorLink, apolloLinkWithCompose]),
    cache: new InMemoryCache({
      typePolicies: {
        EthAccount: {
          keyFields: ['address'],
        },
        Category: {
          keyFields: ['name'],
        },
        Admin: {
          keyFields: ['admin', ['address']],
        },
        Query: {
          queryType: true,
          fields: {
            node: {
              merge: true,
            },
          },
        },
        Subscription: {
          keyFields: ['subscribedID'],
        },
        PieceLike: {
          keyFields: ['owner', ['address'], 'piece', ['id']],
        },
        PieceDislike: {
          keyFields: ['owner', ['address'], 'piece', ['id']],
        },
        // Website: {
        //   fields: {
        //     subscriptions: {
        //       merge: (existing, incoming) => {
        //         console.log(existing, incoming)
        //         return incoming
        //       },
        //     },
        //   },
        // },
      },
    }),
    connectToDevTools: true,
  })
}

export async function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? (await createApolloClient())

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

// export function addApolloState(
//   client: ApolloClient<NormalizedCacheObject>,
//   pageProps: { props: any; revalidate?: number }
// ) {
//   if (pageProps?.props) {
//     pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
//   }
//   return pageProps
// }

export function useApollo(pageProps: { [x: string]: any }) {
  const [store, setStore] = useState<ApolloClient<NormalizedCacheObject>>()
  //const state = pageProps[APOLLO_STATE_PROP_NAME]
  useEffect(() => {
    initializeApollo().then((_store) => setStore(_store))
  }, [])
  return store
}
