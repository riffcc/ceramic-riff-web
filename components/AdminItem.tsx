import { HiOutlineUser } from "react-icons/hi";
import { Admin } from "../utils/__generated__/graphql";
interface Props {
  admin: Admin
}
export default function AdminItem({ admin }: Props) {
  return (
    <ul>
      <div className="flex gap-2 items-center">
        <HiOutlineUser className="h-4 w-4" />
        <p className="text-sm font-semibold">{admin.admin?.address}</p>
      </div>
    </ul>
  )
}
