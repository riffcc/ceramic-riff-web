import { useMutation } from "@apollo/client";
import { HiOutlineTrash, HiOutlinePencilAlt, HiOutlineCheckCircle } from "react-icons/hi";
import { UPDATE_PIECE } from "../utils/contants"

interface Props {
  itemID: string;
  newName: string;
  editButton: boolean;
}

export default function ItemAdminControls({ itemID, newName, editButton }: Props) {
  const [updatePiece, { loading: loadingMutation }] = useMutation(UPDATE_PIECE)


  const handleEditItem = () => {
    updatePiece({
      variables: {
        input: {
          id: itemID,
          content: {
            name: newName
          }
        }
      }
    })
  }
  const handleDeleteItem = () => {
    updatePiece({
      variables: {
        input: {
          id: itemID,
          content: {
            approved: false,
            inGarbage: true
          }
        }
      }
    }).then(() => window.location.reload())
  }
  const handleApproveItem = () => {
    updatePiece({
      variables: {
        input: {
          id: itemID,
          content: {
            approved: true
          }
        }
      }
    }).then(() => window.location.reload())
  }

  return (
    <div className="flex gap-2 items-center justify-center w-full mt-1">
      {editButton  && <HiOutlineCheckCircle className="h-4 w-4 text-green-400 hover:cursor-pointer" onClick={handleApproveItem} /> }
      <HiOutlinePencilAlt className="h-4 w-4 text-slate-50 hover:cursor-pointer" onClick={handleEditItem} />
      <HiOutlineTrash className="h-4 w-4 text-red-400 hover:cursor-pointer" onClick={handleDeleteItem} />
    </div>
  )
}
