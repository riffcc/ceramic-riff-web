import { configureChains, createClient, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
)

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})