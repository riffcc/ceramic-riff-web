import { useFragment_experimental as useFragment, useLazyQuery, useMutation } from "@apollo/client";
import { useCallback, useMemo, useState } from "react";
import { 
  HiOutlineTrash, 
  HiOutlinePencilAlt, 
  HiOutlineCheckCircle, 
  HiOutlineXCircle, 
  HiOutlineX, 
  HiOutlineExternalLink, HiOutlineEye, 
  HiOutlineClock, 
  HiOutlineQuestionMarkCircle 
} from "react-icons/hi";
import { useAccount } from "wagmi";
import useFormState from "../hooks/useFormState";
import { 
  AdminFragment, 
  CategoryFragment, 
  CREATE_PIECE, 
  formatOptions, 
  GET_PIN, 
  GET_WEBSITE_DATA, 
  mediaOptions, 
  movieTypeOptions, 
  pageSizeMedium, 
  pinCategories, 
  releaseTypesOptions, 
  websiteDataQueryParams 
} from "../utils/constants"
import { getDate } from "../utils/getDate";
import Spinner from "./Layout/Spinner";
import Tooltip from "./Layout/Tooltip";
import checkCID from "../utils/checkCID";
import { CategoryFragment as CategoryFragmentType, Pin, WebsiteAdminFragment } from '../utils/__generated__/graphql';
import useMutatePin from "../hooks/useMutatePin";

interface Props {
  pin: Pin;
}

export default function PinActions({ pin }: Props) {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID

  const { address } = useAccount()
  const { complete: isAdminUser, data: adminData } = useFragment<WebsiteAdminFragment, any>({
    from: {
      __typename: "Admin",
      admin: {
        address: address ? address : null
      }
    },
    fragment: AdminFragment
  })
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openRejectModal, setOpenRejectModal] = useState(false)
  const [rejectionReason, setRejectionReason] = useState('')
  const [showAdvancedForm, setShowAdvancedForm] = useState(false)

  const { store, dispatch } = useFormState({
    name: pin?.piece?.name as string,
    category: pin?.category?.name as string,
    CID: pin?.piece?.CID as string,
    ...pin?.piece?.details
  })

  const { complete: isCategory, data: categoryData } = useFragment<CategoryFragmentType, any>({
    from: {
      __typename: "Category",
      name: store.category ? store.category : null
    },
    fragment: CategoryFragment,
    variables: {
      pageSizeMedium
    }
  })

  const [createPiece, { loading: loadingCreatePiece }] = useMutation(CREATE_PIECE)
  const [getPin, { loading: loadingGetPin, data }] = useLazyQuery(GET_PIN, {
    fetchPolicy: "network-only"
  });
  const [refechPins] = useLazyQuery(GET_WEBSITE_DATA, {
    variables: {
      id: websiteID!,
      ...websiteDataQueryParams
    },
    fetchPolicy: "network-only"
  });
  const { mutateAsync: mutatePin, isLoading: loadingMutatePin } = useMutatePin(getPin)
  const handleOnClickAdvanced = () => {
    setShowAdvancedForm(prev => !prev)
  }

  const showEditModal = () => setOpenEditModal(true)
  const hideEditModal = () => setOpenEditModal(false)
  const showRejectModal = () => setOpenRejectModal(true)
  const hideRejectModal = () => setOpenRejectModal(false)

  const handleEditPin = useCallback(() => {
    createPiece({
      variables: {
        input: {
          content: {
            name: store.name,
            CID: store.CID,
            details: store.details,
            metadata: {
              createdAt: getDate() as string,
              updatedAt: getDate() as string
            }
          }
        }
      }
    }).then(async (result) => {
      if (result.data?.createPiece?.document) {
        const pieceID = result.data.createPiece.document.id
        console.log('piece created! pieceID:', pieceID)
        await mutatePin({
          action: 'edit',
          pinID: pin.id,
          data: {
            ownerID: pin.owner?.id!,
            websiteID: pin.website?.id,
            approved: pin.approved ? pin.approved : undefined,
            rejected: pin.rejected ? pin.rejected : undefined,
            rejectionReason: pin.rejectionReason ? pin.rejectionReason : undefined,
            categoryID: categoryData?.id,
            pieceID,
          }
        })
        refechPins()
        hideEditModal()

      }
    })
  }, [store, categoryData])

  const handleDeletePin = () => {
    if (!isAdminUser || !adminData?.id) return;
    mutatePin({
      action: 'delete',
      pinID: pin.id,
      adminID: adminData.id,
      data: {
        ownerID: pin.owner?.id!,
        websiteID: pin.website?.id!,
        categoryID: pin.category?.id!,
        pieceID: pin.piece?.id!,
      }
    })
  }

  const handleApprovePin = () => {
    if (!isAdminUser || !adminData?.id) return;
    console.log(adminData.id)
    mutatePin({
      action: 'approve',
      adminID: adminData.id,
      pinID: pin.id,
      data: {}
    })
  }

  const handleRejectPin = async () => {
    if (!isAdminUser || !adminData?.id) return;
    mutatePin({
      action: 'reject',
      adminID: adminData.id,
      pinID: pin.id,
      data: {
        rejectionReason: rejectionReason,
      }
    })
    setRejectionReason('')
    hideRejectModal()
  }

  const handleUnrejectPin = async () => {
    if (!isAdminUser || !adminData?.id) return;
    mutatePin({
      action: 'unreject',
      adminID: adminData.id,
      pinID: pin.id,
      data: {}
    })
  }

  const isValidCID = useMemo(() => {
    return checkCID(store.CID)
  }, [store.CID])

  return (
    <div className="flex gap-2 items-center justify-center w-full">
      {
        pin?.rejected &&
        <Tooltip
          key="rejection-reason"
          containerClassname="w-30 bg-slate-800 rounded-md"
          container={<HiOutlineEye className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          content={`Rejection reason: ${pin?.rejectionReason}`}
        />
      }
      {
        (!isAdminUser && !pin?.approved && !pin?.rejected) &&
        <Tooltip
          key="user-edit"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlinePencilAlt className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          onClickContainer={showEditModal}
          content="Edit"
        />
      }
      {
        isAdminUser && !pin?.approved &&
        <Tooltip
          key="approve"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineCheckCircle className="h-4 w-4 text-green-400 hover:cursor-pointer" />}
          onClickContainer={handleApprovePin}
          content="Approve"
        />

      }
      {
        isAdminUser && !pin?.rejected &&
        <Tooltip
          key="reject"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineXCircle className="h-4 w-4 text-red-400 hover:cursor-pointer" />}
          onClickContainer={showRejectModal}
          content="Reject"
        />
      }
      {
        (!isAdminUser && pin?.approved) &&
        <Tooltip
          key="share"
          containerClassname="w-20 bg-slate-800 rounded-md"
          container={<HiOutlineExternalLink className="h-4 w-4 text-slate-50 hover:cursor-pointer" />}
          //onClickContainer={}
          content="Share"
        />
      }
      {
        (isAdminUser && pin?.rejected) &&
        <Tooltip
          key="unreject"
          containerClassname="w-30 bg-slate-800 rounded-md"
          container={<HiOutlineClock className="h-4 w-4 text-blue-400 hover:cursor-pointer" />}
          onClickContainer={handleUnrejectPin}
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
          onClickContainer={handleDeletePin}
          content="Remove"
        />
      }
      {
        openEditModal && (
          <div className="h-[30rem] w-[25rem] bg-slate-900 rounded-xl shadow-lg border overflow-y-auto border-slate-500 fixed inset-0 m-auto z-30 p-4">
            <div className="grid p-4">
              <HiOutlineX className="h-5 w-5 text-slate-200 justify-self-end" onClick={hideEditModal} />
              <h1 className="text-lg font-semibold text-center">Edit Pin</h1>
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
                <div className="w-full">
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
                    pinCategories.map((category) => (
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
                onClick={handleEditPin}
                disabled={loadingMutatePin || loadingGetPin || loadingCreatePiece || store.name === '' || store.CID === '' || store.category === 'default' || !isValidCID}
              >
                {
                  loadingMutatePin || loadingGetPin || loadingCreatePiece ?
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
              <h1 className="text-lg font-semibold text-center">Reject Pin</h1>
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
                onClick={handleRejectPin}
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
