import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import Layout from '../components/Layout/Layout'
import Spinner from '../components/Layout/Spinner'
import { WagmiConfig } from 'wagmi'
import { client } from '../utils/wagmi'


function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <div>
      {
        apolloClient ? (
          <WagmiConfig client={client}>
            <ApolloProvider client={apolloClient!}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ApolloProvider>
          </WagmiConfig>
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
