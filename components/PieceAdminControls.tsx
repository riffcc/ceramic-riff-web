import { useApolloClient, useMutation } from "@apollo/client";
import { HiOutlineTrash, HiOutlinePencilAlt, HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";
import { UPDATE_PIECE } from "../utils/constants"
import { getDate } from "../utils/getDate";
import { Piece } from "../utils/__generated__/graphql";
import { UserFragment } from "./Layout/Header";

interface Props {
  piece: Omit<Piece, 'website' | 'websiteID'>;
  newName: string;
}

export default function ItemAdminControls({ piece, newName }: Props) {
  const [updatePiece, { loading: loadingMutation }] = useMutation(UPDATE_PIECE)
  const apolloClient = useApolloClient()

  const handleEditItem = () => {
    updatePiece({
      variables: {
        input: {
          id: piece.id,
          content: {
            name: newName,
            metadata: {
              createdAt: piece.metadata.createdAt,
              updatedAt: getDate()
            }
          }
        }
      }
    })
  }

  const handleDeleteItem = () => {

    const zeroAddressEthAccount = apolloClient.cache.readFragment({
      id: apolloClient.cache.identify({
        __typename: 'EthAccount',
        address: "0x0000000000000000000000000000000000000000"
      }),
      fragment: UserFragment
    })

    updatePiece({
      variables: {
        input: {
          id: piece.id,
          content: {
            websiteID: process.env.NEXT_PUBLIC_WEBSITE_ID,
            ownerID: zeroAddressEthAccount?.id,
            metadata: {
              createdAt: piece.metadata.createdAt,
              updatedAt: getDate()
            }
          },
          options: {
            replace: true
          }
        }
      }
    })
  }

  const handleApproveItem = () => {
    updatePiece({
      variables: {
        input: {
          id: piece.id,
          content: {
            approved: true,
            rejected: false,
            metadata: {
              createdAt: piece.metadata.createdAt,
              updatedAt: getDate()
            }
          }
        }
      }
    })
  }

  const handleRejectItem = () => {
    updatePiece({
      variables: {
        input: {
          id: piece.id,
          content: {
            approved: false,
            rejected: true,
            metadata: {
              createdAt: piece.metadata.createdAt,
              updatedAt: getDate()
            }
          }
        }
      }
    })
  }

  return (
    <div className="flex gap-2 items-center justify-center w-full mt-1">
      {
        !piece.approved &&
        !piece.rejected &&
        <HiOutlineCheckCircle className="h-4 w-4 text-green-400 hover:cursor-pointer" onClick={handleApproveItem} />
      }
      {
        !piece.rejected &&
        <HiOutlineXCircle className="h-4 w-4 text-red-400 hover:cursor-pointer" onClick={handleRejectItem} />
      }
      {
        !piece.rejected &&
        <HiOutlinePencilAlt className="h-4 w-4 text-slate-50 hover:cursor-pointer" onClick={handleEditItem} />
      }
      <HiOutlineTrash className="h-4 w-4 text-red-400 hover:cursor-pointer" onClick={handleDeleteItem} />
    </div>
  )
}
