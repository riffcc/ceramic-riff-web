import { AdminEdge } from "../utils/__generated__/graphql";
import AdminItem from "./AdminItem";

type Props = {
  list: any;
}
export default function AdminList({ list }: Props) {
  return (
    <ul>
      {
        list.map((admin: AdminEdge) => (
          admin &&
          admin.node &&
          <AdminItem key={admin.node.id} admin={admin.node} />
        ))
      }
    </ul>
  )
}
