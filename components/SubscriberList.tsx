import { Website } from "../utils/__generated__/graphql"
import Subscribertem from "./SubscriberItem"

interface Props {
  list: any
}

export default function SubscriberList({ list }: any) {
  return (
    <div className="w-96 bg-blue-700">
      {list.map((subscriber: Website) => <Subscribertem subscriber={subscriber} />)}
    </div>
  )
}
