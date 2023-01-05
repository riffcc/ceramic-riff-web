import { useApolloClient, useLazyQuery } from "@apollo/client"
import { useEffect } from "react"
import { useConnect } from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { CREATE_ETH_ACCOUNT, GET_WEBSITE_USERS } from "../../utils/contants"
import { getDate } from "../../utils/getDate"
import Spinner from "./Spinner"

export default function Connect() {
  const { connectAsync, isLoading } = useConnect({
    connector: new MetaMaskConnector(),
  })

  const apolloClient = useApolloClient()

  const handleConnect = async () => {
    try {
      const { account } = await connectAsync()
      const { data: websiteData } = await apolloClient.query({
        query: GET_WEBSITE_USERS,
        variables: {
          id: process.env.NEXT_PUBLIC_WEBSITE_ID!,
          usersPageSize: 1000
        }
      })
      if (websiteData.node?.__typename === "Website") {
        const userIndex = websiteData.node.users.edges?.findIndex(
          (edge) => edge && edge.node && edge.node.address === account)

        if (userIndex && userIndex === -1) {
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
              }
            }
          })
        } else {
        }
      }


    } catch (error) {

    }
  }

  return (
    <button
      className="h-9 min-w-[8rem] px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 hover:cursor-pointer disabled:cursor-default hover:disabled:bg-cyan-600 "
      onClick={handleConnect}
      disabled={isLoading}
    >
      {isLoading ? <Spinner className="h-5 w-5 animate-spin mx-auto" /> : <p className="font-semibold">Connect</p>}
    </button>
  )
}
