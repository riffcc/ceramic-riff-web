import { gql, useFragment_experimental, useMutation } from "@apollo/client";
import Image from "next/image";
import { HiOutlineCreditCard } from "react-icons/hi";
import { CREATE_SUBSCRIPTION, WebsiteData, websiteDataQueryParams } from "../utils/constants";
import { getDate } from "../utils/getDate";
import { Website } from "../utils/__generated__/graphql";

interface Props {
  subscription: Website
}
export default function SubscriptionItem({ subscription }: Props) {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID

  const { complete: isSubscribed } = useFragment_experimental({
    from: { __typename: "Subscription", subscribedWebsite: { id: subscription.id } },
    fragment: gql`
      fragment SubscriptionFragment on Subscription {
        id
        subscribedID
        subscribedWebsite {
          websiteName
          description
          image
        }
        metadata {
          createdAt
          updatedAt
        }
      }
    `,
    fragmentName: 'SubscriptionFragment',
  })

  const [createSubscription, { loading }] = useMutation(CREATE_SUBSCRIPTION, {
    variables: {
      input: {
        content: {
          websiteID,
          subscribedID: subscription.id,
          metadata: {
            createdAt: getDate(),
            updatedAt: getDate()
          }
        }
      },
      piecesPageSize: websiteDataQueryParams.piecesPageSize
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
        if (data?.subscriptions.edges) {
          return {
            ...data,
            subscriptions: {
              ...data.subscriptions,
              edges: [
                ...data.subscriptions.edges,
                { __typename: 'SubscriptionEdge', node: result.data?.createSubscription?.document }
              ]
            },
            subscriptionsCount: data.subscriptionsCount + 1
          }
        } else {
          return data
        }
      })
    }
  })

  const handleOnSubscribe = () => {
    createSubscription()
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
              <button className="uppercase text-sm font-bold text-cyan-700 w-24 h-8 px-1" disabled>Subscribed</button>
          }
        </div>
        <div className="overflow-y-auto h-16 w-60 pt-1">
          <p className="text-xs text-slate-400">{subscription.description}</p>
        </div>
      </div>
    </div>
  )
}
