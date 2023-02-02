import { gql, useApolloClient, useFragment_experimental as useFragment, useMutation } from "@apollo/client"
import { useAccount, useConnect } from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { CREATE_ETH_ACCOUNT, pageSizeMedium, UserFragment, WebsiteData, websiteDataQueryParams } from "../../utils/constants"
import { getDate } from "../../utils/getDate"
import Spinner from "./Spinner";

type Props = {
  className: string;
}
export default function Connect({ className }: Props) {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const { connectAsync, isLoading } = useConnect({
    connector: new MetaMaskConnector(),
  })
  const { address } = useAccount()
  const [createEthAccount] = useMutation(CREATE_ETH_ACCOUNT)
  const apolloClient = useApolloClient()
  const { complete: isUser } = useFragment({
    from: {
      __typename: "EthAccount",
      address: address ? address : null
    },
    fragment: UserFragment,
    variables: {
      pageSizeMedium
    }
  })

  const handleConnect = () => {
    connectAsync().then(({account}) => {
      const userEthAccount = apolloClient.cache.readFragment({
        id: apolloClient.cache.identify({ __typename: "EthAccount", address: account }),
        fragment: UserFragment,
        variables: {
          pageSizeMedium
        }
      })

      if (!userEthAccount) {
        createEthAccount({
          variables: {
            input: {
              content: {
                address: account as `0x${string}`,
                websiteID,
                metadata: {
                  createdAt: getDate() as string,
                  updatedAt: getDate() as string
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
    })

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
