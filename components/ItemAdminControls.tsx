import { useMutation } from "@apollo/client";
import { HiOutlineTrash, HiOutlinePencilAlt, HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";
import { UPDATE_PIECE } from "../utils/constants"
import { Piece } from "../utils/__generated__/graphql";

interface Props {
  piece: Omit<Piece, 'website' | 'websiteID'>;
  newName: string;
}

export default function ItemAdminControls({ piece, newName }: Props) {
  const [updatePiece, { loading: loadingMutation }] = useMutation(UPDATE_PIECE)


  const handleEditItem = () => {
    updatePiece({
      variables: {
        input: {
          id: piece.id,
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
          id: piece.id,
          content: {
            websiteID: process.env.NEXT_PUBLIC_WEBSITE_ID
          },
          options: {
            replace: true
          }
        }
      }
    }).then(() => window.location.reload())
  }

  const handleApproveItem = () => {
    updatePiece({
      variables: {
        input: {
          id: piece.id,
          content: {
            approved: true,
            rejected: false
          }
        }
      }
    }).then(() => window.location.reload())
  }

  const handleRejectItem = () => {
    updatePiece({
      variables: {
        input: {
          id: piece.id,
          content: {
            approved: false,
            rejected: true
          }
        }
      }
    }).then(() => window.location.reload())
  }

  return (
    <div className="flex gap-2 items-center justify-center w-full mt-1">
      {!piece.approved && !piece.rejected  && <HiOutlineCheckCircle className="h-4 w-4 text-green-400 hover:cursor-pointer" onClick={handleApproveItem} /> }
      {!piece.rejected && <HiOutlineXCircle className="h-4 w-4 text-red-400 hover:cursor-pointer" onClick={handleRejectItem} />}
      <HiOutlinePencilAlt className="h-4 w-4 text-slate-50 hover:cursor-pointer" onClick={handleEditItem} />
      <HiOutlineTrash className="h-4 w-4 text-red-400 hover:cursor-pointer" onClick={handleDeleteItem} />
    </div>
  )
}
