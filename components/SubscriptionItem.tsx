import { gql, useFragment_experimental, useMutation } from "@apollo/client";
import Image from "next/image";
import { useMemo } from "react";
import { HiOutlineCreditCard } from "react-icons/hi";
import { CREATE_SUBSCRIPTION, UPDATE_SUBSCRIPTION, WebsiteData, websiteDataQueryParams } from "../utils/constants";
import { getDate } from "../utils/getDate";
import { SubscriptionEdge, Website } from "../utils/__generated__/graphql";

const subscriptionFragment = gql`
  fragment SubscriptionFragment on Subscription {
    id
    subscribedID
    subscribedWebsite {
      id
      websiteName
      description
      image
    }
    websiteID
    website {
      id
      websiteName
      description
      image
    }
    inactive
    metadata {
      createdAt
      updatedAt
    }
  }
`

interface Props {
  subscription: Website
}
export default function SubscriptionItem({ subscription }: Props) {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID

  const { complete: isSubscription, data: subscriptionCacheData } = useFragment_experimental<any, any>({
    from: { __typename: "Subscription", subscribedID: subscription.id },
    fragment: subscriptionFragment
  })

  const { data: websiteData } = useFragment_experimental<any, any>({
    from: { __typename: 'Website', id: websiteID },
    fragment: WebsiteData,
    variables: {
      ...websiteDataQueryParams
    }
  })

  const isSubscribed = useMemo(() => {
    if (!websiteData) return false
    const index = websiteData.subscriptions.edges.findIndex((edge: SubscriptionEdge) => edge.node?.subscribedID === subscription.id && !edge.node.inactive)
    return index === -1 ? false : true
  }, [websiteData])

  const [createSubscription, { loading }] = useMutation(CREATE_SUBSCRIPTION, {
    variables: {
      input: {
        content: {
          websiteID,
          subscribedID: subscription.id,
          metadata: {
            createdAt: getDate() as string,
            updatedAt: getDate() as string
          }
        }
      },
    },
    update: (cache, result) => {
      cache.updateFragment({
        id: cache.identify({ __typename: "Subscription", subscribedId: result.data?.createSubscription?.document.subscribedID }),
        fragment: subscriptionFragment,
      }, (data) => ({
        ...data,
        
      }))
    }
  })

  const [updateSubscription] = useMutation(UPDATE_SUBSCRIPTION)

  const handleOnSubscribe = () => {

    if (isSubscription) {
      updateSubscription({
        variables: {
          input: {
            id: subscriptionCacheData.id,
            content: {
              inactive: null,
              metadata: {
                createdAt: subscriptionCacheData.metadata.createAt,
                updatedAt: getDate() as string
              }
            }
          }
        },
        update: (cache, result) => {
          cache.updateFragment({
            id: `Website:${websiteID}`,
            fragment: gql`

            `,
            fragmentName: 'WebsiteData',
            variables: {
              ...websiteDataQueryParams
            }
          }, (data) => data)
        }
      })
    } else {
      createSubscription()
    }
  }

  const handleOnUnSubscribe = () => {
    updateSubscription({
      variables: {
        input: {
          id: subscriptionCacheData.id,
          content: {
            inactive: true,
            metadata: {
              createdAt: subscriptionCacheData.metadata.createdAt,
              updatedAt: getDate() as string
            }
          }
        }
      },
      update: (cache, result) => {
        cache.updateFragment({
          id: `Website:${websiteID}`,
          fragment: WebsiteData,
          fragmentName: 'WebsiteData',
          variables: {
            ...websiteDataQueryParams
          }
        }, (data) => data)
      }
    })
  }


  return (
    <div className="flex items-center justify-center gap-1 ">
      <div className="h-24 w-24 border-slate-800 border relative">
        {
          subscription.image ?
            <Image
              alt=""
              src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${subscription.image}`}
              fill
              priority
            /> :
            <div className="flex h-full">
              <HiOutlineCreditCard className="h-12 w-12 text-slate-200 m-auto" />
            </div>
        }
      </div>
      <div className="border-slate-800 border h-24 px-2 py-1">
        <div className="flex items-center justify-between w-60 h-8">
          <p className="truncate text-sm font-medium">{subscription.websiteName}</p>
          {
            !isSubscribed ?
              <button
                className="uppercase text-sm font-bold bg-cyan-600 rounded delay-200 w-24 h-8 px-1 disabled:border disabled:bg-transparent disabled:cursor-default hover:disabled:cursor-default"
                onClick={handleOnSubscribe}
                disabled={loading || isSubscribed}
              >
                Subscribe
              </button> :
              <button
                className="uppercase text-sm font-bold text-cyan-700 w-24 h-8 px-1"
                onClick={handleOnUnSubscribe}
              >
                Subscribed
              </button>
          }
        </div>
        <div className="overflow-y-auto h-16 w-60 pt-1">
          <p className="text-xs text-slate-400">{subscription.description}</p>
        </div>
      </div>
    </div>
  )
}
