import { useFragment_experimental as useFragment, useMutation } from "@apollo/client"
import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { CREATE_FEATURED, pageSizeMax, PieceFragment, WebsiteData, websiteDataQueryParams } from "../utils/constants"
import { getDate } from "../utils/getDate";
import { PieceFragment as PieceFragmentType, WebsiteDataFragment } from "../utils/__generated__/graphql";
import Spinner from "./Layout/Spinner";
import "react-datetime/css/react-datetime.css";
export default function NewFeatured() {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const [pinID, setPinID] = useState('')
  const [startAt, setStartAt] = useState('')
  const [endAt, setEndAt] = useState('')

  const [createFeatured, { loading: loadingNewFeatured }] = useMutation(CREATE_FEATURED)

  const handleOnChangePinID = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setPinID('')
      return
    }
    setPinID(e.target.value)
  }

  const handleOnChangeStartAt = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setStartAt('')
      return
    }
    setStartAt(e.target.value)
  }

  const handleOnChangeEndAt = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setEndAt('')
      return
    }
    setEndAt(e.target.value)
  }

  const resetForm = () => {
    setPinID('')
    setStartAt('')
    setEndAt('')
  }

  const { complete: isPin, data: pinData } = useFragment<PieceFragmentType, any>({
    from: {
      __typename: "Piece",
      id: pinID !== '' ? pinID : null
    },
    fragment: PieceFragment,
    variables: {
      pageSizeMax
    }
  })

  const startAtIsValid = useMemo(() => {
    return getDate('number') < Date.parse(startAt) && Date.parse(startAt) < Date.parse(endAt)
  }, [startAt, endAt])

  const handleSubmit = useCallback(async () => {
    if (pinID === '' || !isPin) throw new Error("Invalid Pin ID");
    if (!startAtIsValid) throw new Error("StartAt invalid");
    await createFeatured({
      variables: {
        input: {
          content: {
            websiteID,
            pinID: pinID,
            startAt: Date.parse(startAt).toString(),
            endAt: Date.parse(endAt).toString()
          }
        }
      },
      update: (cache, result) => {
        cache.updateFragment({
          id: cache.identify({ __typename: "Website", id: websiteID }),
          fragment: WebsiteData,
          variables: {
            id: websiteID!,
            ...websiteDataQueryParams
          }
        }, (data) => {
          return {
            ...data,
            featured: {
              edges: [...data.featured.edges, { __typeName: "Featured", node: result.data?.createFeatured?.document }],
            },
            featuredCount: data.featuredCount + 1
          }
        })
      }
    })
    resetForm()
  }, [pinID, startAt, endAt])

  return (
    <div className="grid w-[25rem] h-full mx-auto">
      <p className="font-medium mx-auto">New featured</p>
      <div className="h-24">
        <p className="text-sm mb-1 ml-1">Pin ID:</p>
        <input
          placeholder=""
          type="text"
          className="form-input bg-slate-800 w-full"
          onChange={handleOnChangePinID}
          min={(new Date).toISOString().replace(/.\d+Z$/g, "Z")}
          value={pinID}
        />
        {pinID !== '' && pinData?.__typename !== 'Piece' && <p className="text-xs text-red-600 mt-1 ml-2">Not pin exists.</p>}
      </div>
      <div className="h-24 text-slate-100">
        <p className="text-sm mb-1 ml-1">Start at:</p>
        <input
          placeholder=""
          type="datetime-local"
          min={getDate('iso')}
          className="form-datetime-local bg-slate-800 w-full cursor-pointer "
          onChange={handleOnChangeStartAt}
          value={startAt}
        />
        {startAt !== '' && endAt !== '' && !startAtIsValid && <p className="text-xs text-red-600 mt-1 ml-2">Invalid date.</p>}
      </div>
      <div className="h-24">
        <p className="text-sm mb-1 ml-1">End at:</p>
        <input
          placeholder=""
          type="datetime-local"
          min={getDate('iso')}
          className="form-datetime-local bg-slate-800 w-full cursor-pointer text-slate-100"
          onChange={handleOnChangeEndAt}
          value={endAt}
        />
      </div>
      <button
        className="py-2 px-4 h-10 w-1/3 mx-auto rounded-lg bg-cyan-500 disabled:hover:bg-cyan-900 disabled:bg-cyan-900 disabled:text-slate-400 hover:cursor-point disabled:hover:cursor-default delay-100 hover:bg-cyan-600"
        disabled={!isPin || !startAtIsValid || loadingNewFeatured}
        onClick={handleSubmit}
      >
        {loadingNewFeatured ? <Spinner className="h-5 w-5 text-white animate-spin mx-auto" /> : <p>Create</p>}
      </button>
    </div>
  )
}
