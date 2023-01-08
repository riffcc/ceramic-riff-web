import { useFragment_experimental } from "@apollo/client";
import { useMemo } from "react";
import { websiteDataQueryParams } from "../utils/constants";
import { WebsiteEdge } from "../utils/__generated__/graphql";
import SubscriptionItem from "./SubscriptionItem";

type Props = {
  list: any;
}
export default function SubscriptionList({ list }: Props) {

  return (
    <div className="grid grid-cols-2 gap-3 min-h-[20rem]">
      {
        list.map((subscription: WebsiteEdge) => (
          subscription &&
          subscription.node &&
          <SubscriptionItem key={subscription.node.id} subscription={subscription.node} />
        ))
      }
    </div>
  )
}
