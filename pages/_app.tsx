import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { WagmiConfig } from 'wagmi'
import { client } from '../utils/wagmi'
import CeramicProvider from '../context/Ceramic'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WagmiConfig client={client}>
        <QueryClientProvider client={queryClient}>
          <CeramicProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CeramicProvider>
        </QueryClientProvider>
      </WagmiConfig>
    </div>
  )
}

export default MyApp

