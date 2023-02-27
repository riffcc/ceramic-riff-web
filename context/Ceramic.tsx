import { ApolloProvider } from "@apollo/client";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { useApollo } from "../lib/apolloClient";
import auth3IDConnect from "../lib/auth3IDConnect";
import createCeramicClient from "../lib/createCeramicClient";
import { UserFragment, pageSizeMedium, WebsiteData, websiteDataQueryParams, CREATE_ETH_ACCOUNT } from "../utils/constants";
import { getDate } from "../utils/getDate";

interface CeramicContextInterface {
  ceramicClient: CeramicClient;
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
}

interface Props {
  children: ReactNode;
}

const CeramicContext = createContext<CeramicContextInterface | undefined>(undefined)

export default function CeramicProvider({ children }: Props) {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { address } = useAccount()
  const ceramicClient = useRef(createCeramicClient())
  const apolloClient = useApollo(ceramicClient.current)

  useEffect(() => {
    if (!address) {
      if (isAuthenticated) {
        setIsAuthenticated(false)
      }
      return;
    };
    setIsLoading(true)
    auth3IDConnect(address, ceramicClient.current)
      .then(({ceramic, iframe}) => {
        if (ceramic.did?.authenticated) {
          setIsAuthenticated(true)
        }
        ceramicClient.current = ceramic

        // This must change to searchUserFuncion 
        const userEthAccount = apolloClient?.cache.readFragment({
          id: apolloClient?.cache.identify({ __typename: "EthAccount", address }),
          fragment: UserFragment,
          variables: {
            pageSizeMedium
          }
        })
        console.log('userEthAccount post authenticate 3Id', userEthAccount)
        if (!userEthAccount) {
          apolloClient?.mutate({
            mutation: CREATE_ETH_ACCOUNT,
            variables: {
              pageSizeMedium,
              input: {
                content: {
                  address,
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
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e)
        if (isAuthenticated) {
          setIsAuthenticated(false)
        }
        setIsError(true)
        setIsLoading(false)
      })
  }, [ceramicClient, address])

  if (!apolloClient) {
    return(
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-black text-slate-50">
      </div>
    )
  }

  return (
    <CeramicContext.Provider value={{
      ceramicClient: ceramicClient.current,
      isAuthenticated,
      isLoading,
      isError
    }}>
      <ApolloProvider client={apolloClient}>
        {children}
      </ApolloProvider>
    </CeramicContext.Provider>
  )
}

const useCeramic = () => useContext(CeramicContext)!
export { CeramicProvider, useCeramic }