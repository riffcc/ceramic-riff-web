import { gql, useApolloClient, useQuery } from "@apollo/client"
import { useConnect } from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { CREATE_ETH_ACCOUNT, userPiecesPageSize } from "../../utils/contants"
import { getDate } from "../../utils/getDate"
import Spinner from "./Spinner"

type Props = {
  className: string;
}
export default function Connect({ className }: Props) {
  const { connectAsync, isLoading } = useConnect({
    connector: new MetaMaskConnector(),
  })
  const apolloClient = useApolloClient()

  const handleConnect = async () => {
    try {
      const { account } = await connectAsync()

      const userEthAccount = apolloClient.cache.readFragment({
        id: apolloClient.cache.identify({ __typename: "EthAccount", address: account }),
        fragment: gql`
          fragment UserEthAccountId on EthAccount {
            id
          }
        `
      })

      if (!userEthAccount) {
        await apolloClient.mutate({
          mutation: CREATE_ETH_ACCOUNT,
          variables: {
            input: {
              content: {
                address: account as string,
                websiteID: process.env.NEXT_PUBLIC_WEBSITE_ID,
                metadata: {
                  createdAt: getDate(),
                  updatedAt: getDate()
                }
              }
            },
            userPiecesPageSize
          }
        })
      }
    } catch (error) {

    }
  }

  return (
    <button
      className={className}
      onClick={handleConnect}
      disabled={isLoading}
    >
      {isLoading ? <Spinner className="h-5 w-5 animate-spin mx-auto" /> : <p className="font-semibold">Connect</p>}
    </button>
  )
}
