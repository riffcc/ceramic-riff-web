import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import Layout from '../components/Layout/Layout'
import Spinner from '../components/Layout/Spinner'
import getDID from '../lib/utils/getDID'

function MyApp({ Component, pageProps }: AppProps) {
  const did = getDID()
  const apolloClient = useApollo(did, pageProps)

  return (
    <div>
      {
        apolloClient ? (
          <ApolloProvider client={apolloClient!}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        ) : (
          <div className='bg-slate-800 h-screen flex items-center justify-center'>
            <Spinner className='h-10 w-10 text-slate-100 animate-spin' />
          </div>
        )
      }
    </div>

  )
}

export default MyApp
