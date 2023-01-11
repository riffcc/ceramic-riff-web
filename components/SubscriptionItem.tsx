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

  const { complete: isSubscribed, data } = useFragment_experimental({
    from: { __typename: "Subscription", subscribedWebsite: { id: subscription.id } },
    fragment: gql`
      fragment SubscriptionFragment on Subscription {
        id
        subscribedWebsite {
          id
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
    <div className="grid grid-rows-3 grid-flow-col ">
      <div className="row-span-3 rounded-xl relative p-4 h-24 w-24 m-auto bg-gradient-to-b from-slate-700 to-slate-600">
        {
          subscription.image ? <Image
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
      <div className="col-span-2 flex items-center justify-between px-4 w-80">
        <p className="truncate">{subscription.websiteName}</p>
        <button
          className="bg-cyan-600 text-sm delay-200 w-24 h-8 px-2 rounded disabled:border disabled:bg-transparent disabled:cursor-default hover:disabled:cursor-default"
          onClick={handleOnSubscribe}
          disabled={loading || isSubscribed}>
          {!isSubscribed ? <p>Subscribe</p> : <p>Subscribed</p>}
        </button>
      </div>
      <div className="row-span-2 col-span-2 overflow-y-auto w-80 h-24">
        <p className="text-xs text-slate-400">{subscription.description}</p>
      </div>
    </div>
  )
}
