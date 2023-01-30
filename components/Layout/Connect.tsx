import { gql, useApolloClient } from "@apollo/client"
import { useConnect } from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { CREATE_ETH_ACCOUNT, pageSizeMedium, UserFragment, WebsiteData, websiteDataQueryParams } from "../../utils/constants"
import { getDate } from "../../utils/getDate"
import Spinner from "./Spinner"

type Props = {
  className: string;
}
export default function Connect({ className }: Props) {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const { connectAsync, isLoading } = useConnect({
    connector: new MetaMaskConnector(),
  })
  const apolloClient = useApolloClient()

  const handleConnect = async () => {
    try {
      const { account } = await connectAsync()

      const userEthAccount = apolloClient.cache.readFragment({
        id: apolloClient.cache.identify({ __typename: "EthAccount", address: account }),
        fragment: UserFragment,
        variables: {
          pageSizeMedium
        }
      })

      if (!userEthAccount) {
        await apolloClient.mutate({
          mutation: CREATE_ETH_ACCOUNT,
          variables: {
            input: {
              content: {
                address: account as string,
                websiteID,
                metadata: {
                  createdAt: getDate(),
                  updatedAt: getDate()
                }
              }
            },
          },
          update: (cache, result) => {
            cache.updateFragment({
              id: `Website:${websiteID}`,
              fragment: WebsiteData,
              fragmentName: 'WebsiteData',
              variables: {
                ...websiteDataQueryParams
              }
            }, (data) => {
              if (data?.users.edges) {
                return {
                  ...data,
                  users: {
                    ...data.users,
                    edges: [
                      ...data.users.edges,
                      { __typename: 'EthAccountEdge', node: result.data?.createEthAccount?.document }
                    ]
                  },
                  usersCount: data.usersCount + 1
                }
              } else {
                return data
              }
            })
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
