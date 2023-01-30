import { useApolloClient, useFragment_experimental as useFragment, useMutation } from "@apollo/client";
import { Maybe } from "graphql/jsutils/Maybe";
import { ChangeEvent, useMemo, useState } from "react";
import { HiOutlineTrash, HiOutlinePencilAlt, HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineX, HiOutlineExternalLink, HiOutlineEye, HiOutlineClock, HiQuestionMarkCircle, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useAccount } from "wagmi";
import useFormState from "../hooks/useFormState";
import { AdminFragment, CategoryFragment, formatOptions, mediaOptions, movieTypeOptions, pageSizeMedium, pieceCategories, releaseTypesOptions, UPDATE_PIECE, UserFragment } from "../utils/constants"
import { getDate } from "../utils/getDate";
import { Piece } from "../utils/__generated__/graphql";
import Spinner from "./Layout/Spinner";
import Tooltip from "./Layout/Tooltip";
import { CID } from 'multiformats'
import checkCID from "../utils/checkCID";
import { CategoryFragment as CategoryFragmentType, PieceFragment as PieceFragmentType } from '../utils/__generated__/graphql';

interface Props {
  piece: Maybe<Piece>;
}

export default function PieceActions({ piece }: Props) {
  const { address } = useAccount()
  const { complete: isAdminUser } = useFragment({
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

  const [rejectionReason, setRejectionReason] = useState('')

  const [showAdvancedForm, setShowAdvancedForm] = useState(false)
  const { data: categoryData } = useFragment<CategoryFragmentType, any>({
    from: {
      __typename: "Category",
      name: piece?.category?.name ? piece.category.name : null
    },
    fragment: CategoryFragment,
    variables: {
      pageSizeMedium
    }
  })
  const { store, dispatch } = useFormState({ 
    name: piece?.name as string, 
    category: piece?.category?.name as string, 
    CID: piece?.CID as string, 
    ...piece?.details 
  })

  const handleOnClickAdvanced = () => {
    setShowAdvancedForm(prev => !prev)
  }

  const showEditModal = () => setOpenEditModal(true)
  const hideEditModal = () => setOpenEditModal(false)
  const showRejectModal = () => setOpenRejectModal(true)
  const hideRejectModal = () => setOpenRejectModal(false)

  const apolloClient = useApolloClient()


  const handleEditPiece = async () => {
    await updatePiece({
      variables: {
        input: {
          id: piece?.id!,
          content: {
            name: store.name,
            CID: store.CID,
            categoryID: categoryData?.id,
            details: store.details,
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

    const zeroAddressEthAccount = apolloClient.cache.readFragment<any>({
      id: apolloClient.cache.identify({
        __typename: 'EthAccount',
        address: "0x0000000000000000000000000000000000000000"
      }),
      fragment: UserFragment,
      variables: {
        pageSizeMedium
      }
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
    setRejectionReason('')
    hideRejectModal()
  }

  const handleUnrejectPiece = async () => {
    await updatePiece({
      variables: {
        input: {
          id: piece?.id!,
          content: {
            approved: false,
            rejected: false,
            rejectionReason: '',
            metadata: {
              createdAt: piece?.metadata.createdAt!,
              updatedAt: getDate()
            }
          }
        }
      }
    })
  }

  const isValidCID = useMemo(() => {
    return checkCID(store.CID)
  }, [store.CID])

  return (
    <div className="flex gap-2 items-center justify-center w-full">
      {
        piece?.rejected &&
        <Tooltip
          key="rejection-reason"
          containerClassname="w-30 bg-slate-800 rounded-md"
          container={<HiOutlineEye className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          content={`Rejection reason: ${piece?.rejectionReason}`}
        />
      }
      {
        (!isAdminUser && !piece?.approved && !piece?.rejected) &&
        <Tooltip
          key="user-edit"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlinePencilAlt className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          onClickContainer={showEditModal}
          content="Edit"
        />
      }
      {
        isAdminUser && !piece?.approved &&
        <Tooltip
          key="approve"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineCheckCircle className="h-4 w-4 text-green-400 hover:cursor-pointer" />}
          onClickContainer={handleApprovePiece}
          content="Approve"
        />

      }
      {
        isAdminUser && !piece?.rejected &&
        <Tooltip
          key="reject"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineXCircle className="h-4 w-4 text-red-400 hover:cursor-pointer" />}
          onClickContainer={showRejectModal}
          content="Reject"
        />
      }
      {
        (!isAdminUser && piece?.approved) &&
        <Tooltip
          key="share"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineExternalLink className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          //onClickContainer={}
          content="Share"
        />
      }
      {
        (isAdminUser && piece?.rejected) &&
        <Tooltip
          key="unreject"
          containerClassname="w-30 bg-slate-800 rounded-md"
          container={<HiOutlineClock className="h-4 w-4 text-blue-400 hover:cursor-pointer" />}
          onClickContainer={handleUnrejectPiece}
          content="Unreject"
        />
      }
      {
        isAdminUser &&
        <Tooltip
          key="edit"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlinePencilAlt className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          onClickContainer={showEditModal}
          content="Edit"
        />
      }
      {
        isAdminUser &&
        <Tooltip
          key='remove'
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineTrash className="h-4 w-4 text-red-400 hover:cursor-pointer" />}
          onClickContainer={handleDeletePiece}
          content="Remove"
        />
      }
      {
        openEditModal && (
          <div className="h-[30rem] w-[25rem] bg-slate-900 rounded-xl shadow-lg border overflow-y-auto border-slate-500 fixed inset-0 m-auto z-30 p-4">
            <div className="grid p-4">
              <HiOutlineX className="h-5 w-5 text-slate-200 justify-self-end" onClick={hideEditModal} />
              <h1 className="text-lg font-semibold text-center">Edit Piece</h1>
              <div className='grid'>
                <p className="text-sm mb-1 ml-1">Name:</p>
                <input
                  placeholder="Nyan Cat Meme"
                  name="name"
                  type="text"
                  className="form-input bg-slate-800 mb-4"
                  onChange={(e) => dispatch({ type: 'name', payload: e.target.value })}
                  value={store.name}
                />
                <p className="text-sm mb-1 ml-1">IPFS CID:</p>
                <div>
                  <input
                  placeholder="bafkreico2zlmcinytg2ri26o4mt73i25ikisd3vth6p4du5gcpek4fsace"
                  name="cid"
                  type="text"
                  className="form-input bg-slate-800"
                  onChange={(e) => dispatch({ type: 'CID', payload: e.target.value })}
                  value={store.CID}
                />
                {store.CID.length > 0 && !isValidCID && <p className="text-xs text-red-500">Please enter a valid CIDv0 or CIDv1 ID.</p>}
                </div>
                <p className="text-sm mb-1 ml-1">Category:</p>
                <select
                  className='form-select bg-slate-800 mb-4'
                  onChange={(e) => dispatch({ type: 'category', payload: e.target.value })}
                  value={store.category}
                >
                  <option disabled hidden value='default'>Select a category</option>
                  {
                    pieceCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))
                  }
                </select>
                <button
                  className="h-9 my-2 mx-auto px-2 rounded uppercase text-sm font-medium bg-transparent disabled:text-slate-400 hover:cursor-point disabled:hover:cursor-default delay-100 border border-slate-500"
                  onClick={handleOnClickAdvanced}
                  disabled={store.category !== 'Movies' && store.category}
                >
                  Advanced
                </button>
                {
                  showAdvancedForm && store.category === 'Music' && (
                    <div className="grid py-4">
                      <p className="text-sm mb-2">Please fill out any extra information about the content that might be useful.</p>
                      <div className="flex gap-1 mb-1 ml-1">
                        <p className="text-sm">Image/thumbnail IPFS CID:</p>
                        <Tooltip
                          key="image-thumbnail"
                          containerClassname="w-40 bg-slate-800 rounded-md"
                          container={<HiOutlineQuestionMarkCircle className="h-4 w-4 text-slate-300 hover:cursor-pointer" />}
                          content="A thumbnail for the music, specified as an IPFS CID."
                        />
                      </div>
                      <input
                        placeholder="QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR"
                        name="image-thumbnail-cid"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'imageThumbnailCID', payload: e.target.value })}
                        value={store.details?.imageThumbnailCID}
                      />
                      <div className="flex gap-1 mb-1 ml-1">
                        <p className="text-sm">Tags:</p>
                        <Tooltip
                          key="tags"
                          containerClassname="w-40 bg-slate-800 rounded-md"
                          container={<HiOutlineQuestionMarkCircle className="h-4 w-4 text-slate-300 hover:cursor-pointer" />}
                          content="Any tags you feel are appropriate for the media - such as rock, country, or pop."
                        />
                      </div>
                      <input
                        placeholder="values separatted with ','"
                        name="tags"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'tags', payload: e.target.value })}
                        value={store.details?.tags}
                      />
                      <div className="flex gap-1 mb-1 ml-1">
                        <p className="text-sm">MusicBrainz ID:</p>
                        <Tooltip
                          key="music-brainz-id"
                          containerClassname="w-40 bg-slate-800 rounded-md"
                          container={<HiOutlineQuestionMarkCircle className="h-4 w-4 text-slate-300 hover:cursor-pointer" />}
                          content="If the content has an entry on MusicBrainz, enter it here to pre-fill the rest of this form."
                        />
                      </div>
                      <input
                        placeholder=""
                        name="music-brainz-id"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'musicBrainzID', payload: e.target.value })}
                        value={store.details?.musicBrainzID}
                      />
                      <p className="text-sm mb-1 ml-1">{'Artist name(s):'}</p>
                      <input
                        placeholder="values separatted with ','"
                        name="artist-names"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'artistNames', payload: e.target.value })}
                        value={store.details?.artistNames}
                      />
                      <p className="text-sm mb-1 ml-1">Album title:</p>
                      <input
                        placeholder=""
                        name="album-title"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'albumTitle', payload: e.target.value })}
                        value={store.details?.albumTitle}
                      />
                      <p className="text-sm mb-1 ml-1">Initial release year:</p>
                      <input
                        placeholder=""
                        name="initial-release-year"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'initialReleaseYear', payload: e.target.value })}
                        value={store.details?.initialReleaseYear}
                      />
                      {/* <p className="text-sm mb-1 ml-1">Tags</p>
                <input
                  placeholder="values separatted with ','"
                  name="tags"
                  type="text"
                  className="form-input text-black rounded-lg mb-4"
                  onChange={(e) => dispatch({ type: 'artistNames', payload: e.target.value })}
                  value={store.details?.artistNames}
                /> */}
                      <p className="text-sm mb-1 ml-1">Release type:</p>
                      <select
                        className='form-select bg-slate-800 mb-4'
                        onChange={(e) => dispatch({ type: 'releaseType', payload: e.target.value })}
                        value={store.details?.releaseType}
                      >
                        <option disabled hidden value='default'>Select a release type</option>
                        {
                          releaseTypesOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))
                        }
                      </select>
                      <p className="text-sm mb-1 ml-1">Format:</p>
                      <select
                        className='form-select bg-slate-800 mb-4'
                        onChange={(e) => dispatch({ type: 'format', payload: e.target.value })}
                        value={store.details?.format}
                      >
                        <option disabled hidden value='default'>Select a format</option>
                        {
                          formatOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))
                        }
                      </select>
                      <p className="text-sm mb-1 ml-1">Bitrate:</p>
                      <input
                        placeholder=""
                        name="bitrate"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'bitrate', payload: e.target.value })}
                        value={store.details?.bitrate}
                      />
                      <p className="text-sm mb-1 ml-1">Media:</p>
                      <select
                        className='form-select bg-slate-800 mb-4'
                        onChange={(e) => dispatch({ type: 'format', payload: e.target.value })}
                        value={store.details?.media}
                      >
                        <option disabled hidden value='default'>Select a media</option>
                        {
                          mediaOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))
                        }
                      </select>
                      <p className="text-sm mb-1 ml-1">Release description:</p>
                      <input
                        placeholder=""
                        name="release-description"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'releaseDescription', payload: e.target.value })}
                        value={store.details?.releaseDescription}
                      />
                    </div>
                  )
                }
                {
                  showAdvancedForm && store.category === 'Movies' && (
                    <div className="grid py-4">
                      <p className="text-sm mb-2">Please fill out any extra information about the content that might be useful.</p>
                      <div className="flex gap-1 mb-1 ml-1">
                        <p className="text-sm">Image/thumbnail IPFS CID:</p>
                        <Tooltip
                          key="image-thumbnail"
                          containerClassname="w-20 bg-slate-800 rounded-md"
                          container={<HiOutlineQuestionMarkCircle className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
                          content="A thumbnail for the music, specified as an IPFS CID."
                        />
                      </div>
                      <input
                        placeholder="QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR"
                        name="image-thumbnail-cid"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'imageThumbnailCID', payload: e.target.value })}
                        value={store.details?.imageThumbnailCID}
                      />
                      <p className="text-sm mb-1 ml-1">Poster:</p>
                      <input
                        placeholder=""
                        name="poster"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'poster', payload: e.target.value })}
                        value={store.details?.poster}
                      />
                      <p className="text-sm mb-1 ml-1">TMDB ID:</p>
                      <input
                        placeholder=""
                        name="tmdb-id"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'TMDBID', payload: e.target.value })}
                        value={store.details?.TMDBID}
                      />
                      <p className="text-sm mb-1 ml-1">IMDB ID:</p>
                      <input
                        placeholder=""
                        name="tmdb-id"
                        type="text"
                        className="form-input bg-slate-800 mb-4"
                        onChange={(e) => dispatch({ type: 'IMDBID', payload: e.target.value })}
                        value={store.details?.IMDBID}
                      />
                      <p className="text-sm mb-1 ml-1">Type:</p>
                      <select
                        className='form-select bg-slate-800 mb-4'
                        onChange={(e) => dispatch({ type: 'type', payload: e.target.value })}
                        value={store.details?.type}
                      >
                        <option disabled hidden value='default'>Select a type</option>
                        {
                          movieTypeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))
                        }
                      </select>
                      <div className="flex gap-4 mt-2">
                        <p className="text-sm">Autofill:</p>
                        <input
                          placeholder=""
                          name="autofill"
                          type="checkbox"
                          className="form-checkbox bg-slate-800 mb-4"
                          onChange={(e) => dispatch({ type: 'autofill', payload: e.target.checked })}
                          checked={store.autofill}
                        />
                      </div>
                    </div>
                  )
                }
              </div>
              <button
                className="h-10 py-1 px-2 mt-2 bg-cyan-600 disabled:hover:bg-cyan-900 disabled:bg-cyan-900 disabled:text-slate-400 hover:cursor-pointer disabled:cursor-default hover:disabled:coursor-default uppercase font-medium rounded"
                onClick={handleEditPiece}
                disabled={loadingUpdatePiece || store.name === '' || store.CID === '' || store.category === 'default' || !isValidCID}
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
            <div className="grid justify-items-stretch">
              <HiOutlineX className="h-5 w-5 text-slate-200 justify-self-end" onClick={hideRejectModal} />
              <h1 className="text-lg font-semibold text-center">Reject Piece</h1>
              <div className="p-4 w-full">
                <p className="text-sm mb-1 ml-1">Reason:</p>
                <input
                  type='text'
                  className="form-input text-black rounded-lg w-full"
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                />
              </div>
              <button
                className="h-10 w-20 py-1 px-2 mt-1 bg-cyan-600 hover:cursor-pointer disabled:hover:bg-cyan-900 disabled:bg-cyan-900 disabled:text-slate-400 disabled:cursor-default hover:disabled:coursor-default mx-auto rounded"
                onClick={handleRejectPiece}
              >
                <p>Reject</p>
              </button>
            </div>
          </div>
        )
      }
    </div >
  )
}
