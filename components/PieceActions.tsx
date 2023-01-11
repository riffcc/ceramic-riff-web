import { useApolloClient, useFragment_experimental, useMutation } from "@apollo/client";
import { Maybe } from "graphql/jsutils/Maybe";
import { ChangeEvent, useState } from "react";
import { HiOutlineTrash, HiOutlinePencilAlt, HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineX, HiOutlineExternalLink, HiOutlineEye } from "react-icons/hi";
import { useAccount } from "wagmi";
import { AdminFragment, pieceCategories, UPDATE_PIECE, UserFragment } from "../utils/constants"
import { getDate } from "../utils/getDate";
import { Piece } from "../utils/__generated__/graphql";
import Spinner from "./Layout/Spinner";
import Tooltip from "./Layout/Tooltip";

interface Props {
  piece: Maybe<Piece>;
}

export default function PieceActions({ piece }: Props) {
  const { address } = useAccount()
  const { complete: isAdminUser } = useFragment_experimental({
    from: {
      __typename: "Admin",
      admin: {
        address: address ? address : null
      }
    },
    fragment: AdminFragment
  })
  const [updatePiece, { loading: loadingUpdatePiece }] = useMutation(UPDATE_PIECE)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openRejectModal, setOpenRejectModal] = useState(false)

  const [name, setName] = useState(piece?.name!)
  const [category, setCategory] = useState(piece?.category!)
  const [cid, setCid] = useState(piece?.cid!)
  const [rejectionReason, setRejectionReason] = useState('')



  const showEditModal = () => setOpenEditModal(true)
  const hideEditModal = () => setOpenEditModal(false)
  const showRejectModal = () => setOpenRejectModal(true)
  const hideRejectModal = () => setOpenRejectModal(false)

  const apolloClient = useApolloClient()

  const handleOnChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setName('')
    }
    setName(e.target.value)
  }

  const handleOnChangeCid = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setCid('')
    }
    setCid(e.target.value)
  }

  const handleOnChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const handleOnChangeRejectionReason = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setRejectionReason('')
    }
    setRejectionReason(e.target.value)
  }

  const handleEditPiece = async () => {
    await updatePiece({
      variables: {
        input: {
          id: piece?.id!,
          content: {
            name,
            cid,
            category,
            metadata: {
              createdAt: piece?.metadata.createdAt!,
              updatedAt: getDate()
            }
          }
        }
      }
    })
    hideEditModal()
  }

  const handleDeletePiece = () => {

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
          id: piece?.id!,
          content: {
            websiteID: process.env.NEXT_PUBLIC_WEBSITE_ID,
            ownerID: zeroAddressEthAccount?.id,
            metadata: {
              createdAt: piece?.metadata.createdAt!,
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

  const handleApprovePiece = () => {
    updatePiece({
      variables: {
        input: {
          id: piece?.id!,
          content: {
            approved: true,
            rejected: false,
            metadata: {
              createdAt: piece?.metadata.createdAt!,
              updatedAt: getDate()
            }
          }
        }
      }
    })
  }

  const handleRejectPiece = async () => {
    await updatePiece({
      variables: {
        input: {
          id: piece?.id!,
          content: {
            approved: false,
            rejected: true,
            rejectionReason,
            metadata: {
              createdAt: piece?.metadata.createdAt!,
              updatedAt: getDate()
            }
          }
        }
      }
    })
    hideRejectModal()
  }
  console.log(piece)
  return (
    <div className="flex gap-2 items-center justify-center w-full">
      {
        isAdminUser && !piece?.approved &&
        <Tooltip
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineCheckCircle className="h-4 w-4 text-green-400 hover:cursor-pointer" />}
          onClickContainer={handleApprovePiece}
          content="Approve"
        />

      }
      {
        isAdminUser && !piece?.rejected &&
        <Tooltip
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineXCircle className="h-4 w-4 text-red-400 hover:cursor-pointer" />}
          onClickContainer={showRejectModal}
          content="Reject"
        />
      }
      {
        (!isAdminUser && !piece?.approved && !piece?.rejected) &&
        <Tooltip
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlinePencilAlt className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          onClickContainer={showEditModal}
          content="Edit"
        />
      }
      {
        (!isAdminUser && piece?.approved) &&
        <Tooltip
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineExternalLink className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          //onClickContainer={}
          content="Share"
        />
      }
      {
        (!isAdminUser && piece?.rejected) &&
        <Tooltip
          containerClassname="w-30 bg-slate-800 rounded-md"
          container={<HiOutlineEye className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          content={`Rejection reason: ${piece?.rejectionReason}`}
        />
      }
      {
        isAdminUser &&
        <Tooltip
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlinePencilAlt className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          onClickContainer={showEditModal}
          content="Edit"
        />
      }
      {
        isAdminUser &&
        <Tooltip
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineTrash className="h-4 w-4 text-red-400 hover:cursor-pointer" />}
          onClickContainer={handleDeletePiece}
          content="Delete"
        />
      }
      {
        openEditModal && (
          <div className="h-96 w-96 bg-slate-900 rounded-xl shadow-lg border border-slate-500 fixed inset-0 m-auto z-30 p-4">
            <div className="grid justify-Pieces-stretch">
              <HiOutlineX className="h-5 w-5 text-slate-200 justify-self-end" onClick={hideEditModal} />
              <h1 className="text-lg font-semibold text-center">Edit Piece</h1>
              <div className="py-4 px-6 space-y-2">
                <div>
                  <p>Name:</p>
                  <input
                    type="text"
                    className="text-black py-1 px-2 mt-1 rounded w-full"
                    value={name}
                    onChange={handleOnChangeName}
                  />
                </div>
                <div>
                  <p>CID:</p>
                  <input
                    type="text"
                    className="text-black py-1 px-2 mt-1 rounded w-full"
                    value={cid}
                    onChange={handleOnChangeCid}
                  />
                </div>
                <div>
                  <p>Category:</p>
                  <select
                    className='text-black py-1 px-2 mt-1 rounded w-full'
                    value={category}
                    onChange={handleOnChangeCategory}
                  >
                    {
                      pieceCategories.map((category) => (
                        <option value={category}>{category}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <button
                className="h-10 w-20 py-1 px-2 mt-1 bg-cyan-600 hover:cursor-pointer disabled:bg-cyan-700 disabled:cursor-default hover:disabled:coursor-default mx-auto rounded"
                onClick={handleEditPiece}
                disabled={loadingUpdatePiece || name === '' || cid === ''}
              >
                {
                  loadingUpdatePiece ?
                    <Spinner className="h-5 w-5 animate-spin mx-auto text-slate-200" /> :
                    <p>Save</p>
                }
              </button>
            </div>
          </div>
        )
      }
      {
        openRejectModal && (
          <div className="h-60 w-96 bg-slate-900 rounded-xl shadow-lg border border-slate-500 fixed inset-0 m-auto z-30 p-4">
            <div className="grid justify-Pieces-stretch">
              <HiOutlineX className="h-5 w-5 text-slate-200 justify-self-end" onClick={hideEditModal} />
              <h1 className="text-lg font-semibold text-center">Reject Piece</h1>
              <div className="py-4 px-6 space-y-2">
                <div>
                  <p>Reason:</p>
                  <input
                    type='text'
                    className="text-black py-1 px-2 mt-1 rounded w-full"
                    value={rejectionReason}
                    onChange={handleOnChangeRejectionReason}
                  />
                </div>

              </div>
              <button
                className="h-10 w-20 py-1 px-2 mt-1 bg-cyan-600 hover:cursor-pointer disabled:bg-cyan-700 disabled:cursor-default hover:disabled:coursor-default mx-auto rounded"
                onClick={handleRejectPiece}
                disabled={rejectionReason === ''}
              >
                <p>Reject</p>
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}
