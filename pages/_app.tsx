import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import Layout from '../components/Layout/Layout'
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
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-black text-slate-50">
          </div>
        )
      }
    </div>

  )
}

export default MyApp
