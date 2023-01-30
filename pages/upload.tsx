import { gql, useApolloClient, useMutation, useFragment_experimental as useFragment } from "@apollo/client"
import { NextPage } from "next/types"
import { useState, useMemo } from "react"
import { HiOutlineQuestionMarkCircle } from "react-icons/hi"
import { useAccount } from "wagmi"
import Connect from "../components/Layout/Connect"
import Spinner from "../components/Layout/Spinner"
import Tooltip from "../components/Layout/Tooltip"
import useFormState from "../hooks/useFormState"
import { CategoryFragment, CREATE_PIECE, formatOptions, mediaOptions, movieTypeOptions, pageSizeMedium, pieceCategories, releaseTypesOptions, WebsiteData, websiteDataQueryParams } from "../utils/constants"
import { getDate } from "../utils/getDate"
import checkCID from "../utils/checkCID"
import { CategoryFragment as CategoryFragmentType, PieceFragment as PieceFragmentType } from '../utils/__generated__/graphql';

const UploadPage: NextPage = () => {

  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const { address, isConnected } = useAccount()
  const apolloClient = useApolloClient()
  const [showAdvancedForm, setShowAdvancedForm] = useState(false)
  const { store, dispatch } = useFormState()

  const [createPiece, { loading: loadingMutation }] = useMutation(CREATE_PIECE, {
    update: (cache, result) => {
      cache.updateFragment({
        id: `Website:${websiteID}`,
        fragment: WebsiteData,
        fragmentName: 'WebsiteData',
        variables: {
          ...websiteDataQueryParams
        }
      }, (data) => {
        if (data?.pieces.edges && data?.subscriptions.edges) {
          return {
            ...data,
            pieces: {
              ...data.pieces,
              edges: [
                ...data.pieces.edges,
                { __typename: 'PieceEgde', node: result.data?.createPiece?.document }
              ]
            },
            piecesCount: data.piecesCount + 1
          }
        } else {
        }
        return data
      })
    }
  })

  const handleOnClickAdvanced = () => {
    setShowAdvancedForm(prev => !prev)
  }

  const { data: categoryData } = useFragment<CategoryFragmentType, any>({
    from: {
      __typename: "Category",
      name: store?.category ? store.category : null
    },
    fragment: CategoryFragment,
    variables: {
      pageSizeMedium
    }
  })
  const handleSubmit = () => {
    dispatch({ type: 'reset', payload: undefined });
    const userEthAccount = apolloClient.readFragment({
      id: apolloClient.cache.identify({ __typename: "EthAccount", address }),
      fragment: gql`
      fragment EthAccountId on EthAccount {
        id
      }`
    })
    createPiece({
      variables: {
        input: {
          content: {
            websiteID,
            ownerID: userEthAccount.id,
            name: store.name,
            CID: store.CID,
            categoryID: categoryData?.id,
            details: store.details,
            approved: false,
            rejected: false,
            metadata: {
              createdAt: getDate(),
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
    <div className='px-4 py-10 min-h-screen'>
      <div className="w-[25rem] border px-6 pt-8 pb-12 m-auto rounded">
        <p className="text-lg font-semibold mb-4 text-center">Pin a new item</p>
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
          <input
            placeholder="bafkreico2zlmcinytg2ri26o4mt73i25ikisd3vth6p4du5gcpek4fsace"
            name="cid"
            type="text"
            className="form-input bg-slate-800 mb-4"
            onChange={(e) => dispatch({ type: 'CID', payload: e.target.value })}
            value={store.CID}
          />
          {store.CID.length > 0 && !isValidCID && <p className="text-xs text-red-500 mb-2">Please enter a valid CIDv0 or CIDv1 ID.</p>}
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
          {
            isConnected ? (
              <button
                className="py-2 px-4 h-10 mt-4 rounded-lg bg-cyan-500 disabled:hover:bg-cyan-900 disabled:bg-cyan-900 disabled:text-slate-400 hover:cursor-point disabled:hover:cursor-default delay-100 hover:bg-cyan-600"
                disabled={loadingMutation || !store.name || !store.CID || store.category === 'default'}
                onClick={handleSubmit}
              >
                {loadingMutation ? <Spinner className="h-5 w-5 text-white animate-spin mx-auto" /> : <p>Submit</p>}
              </button>
            ) : (
              <Connect className="py-2 px-4 h-10 mt-4 rounded-lg bg-cyan-500 disabled:hover:bg-cyan-500 hover:cursor-point disabled:hover:cursor-default delay-100 hover:bg-cyan-600" />
            )
          }
        </div>
      </div>

    </div>
  )
}

export default UploadPage