import { useMutation } from "@apollo/client";
import { HiOutlineTrash, HiOutlineUser } from "react-icons/hi";
import { UPDATE_ADMIN } from "../utils/constants";
import { getDate } from "../utils/getDate";
import { Admin } from "../utils/__generated__/graphql";
import Tooltip from "./Layout/Tooltip";
interface Props {
  admin: Admin
}
export default function AdminItem({ admin }: Props) {
  const [updateAdmin] = useMutation(UPDATE_ADMIN, {
    variables: {
      input: {
        id: admin.id,
        content: {
          inactive: true,
          metadata: {
            createdAt: admin.metadata.createdAt,
            updatedAt: getDate() as string
          }
        }
      }
    }
  })

  const handleDeleteAdmin = async () => {
    await updateAdmin()
  }
  console.log(admin)
  return (
    <li>
      <div className="flex items-center justify-between gap-1">
        {
          admin.super ?
            <p className="">🇸</p> :
            <HiOutlineUser className="h-4 w-4" />
        }
        <p className="text-sm font-semibold">{admin.admin?.address}</p>
        <Tooltip
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineTrash className="h-4 w-4 text-red-400 hover:cursor-pointer" />}
          onClickContainer={handleDeleteAdmin}
          content="Remove"
        />
      </div>
    </li>
  )
}
