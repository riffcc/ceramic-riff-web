import { Subscription, SubscriptionEdge, Website, WebsiteEdge } from "../utils/__generated__/graphql";
import SubscriptionItem from "./SubscriptionItem";
import SubscriptionSearch from "./SubscriptionSearch";

type Props = {
  list: any;
}
export default function SubscriptionList({ list }: Props) {

  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {
        list.map((subscription: SubscriptionEdge) => (
          subscription &&
          subscription.node &&
          <SubscriptionItem key={subscription.node.subscribedWebsite?.id} subscription={subscription.node.subscribedWebsite as Website} />
        ))
      }
    </div>
  )
}
