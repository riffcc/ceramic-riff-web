import { useLazyQuery } from "@apollo/client"
import { ChangeEvent, useState } from "react"
import { GET_WEBSITE } from "../utils/constants"
import { Website } from "../utils/__generated__/graphql"
import SubscriptionItem from "./SubscriptionItem"

export default function SubscriptionSearch() {
  const [websiteStreamID, setWebsiteStreamID] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [getWebsite, { loading, data }] = useLazyQuery(GET_WEBSITE)

  const openResult = () => setShowResult(true)
  const hideResult = () => setShowResult(false)
  const onChangeWebsiteStreamID = (e: ChangeEvent<HTMLInputElement>) => {
    hideResult()
    if (!e.target.value) {
      setWebsiteStreamID('')
    }
    setWebsiteStreamID(e.target.value)
  }

  const handleOnSearch = async () => {
    await getWebsite({ variables: { id: websiteStreamID } })
    openResult()
  }

  return (
    <div className='h-20 relative'>
      <div className='flex items-center justify-center gap-2  h-full'>
        <input
          type="text"
          className='form-input w-96 bg-slate-800'
          placeholder='Wesbite StreamID'
          value={websiteStreamID}
          onChange={onChangeWebsiteStreamID}
        />
        <button
          className='w-20 h-10 uppercase text-sm font-semibold border border-slate-500 disabled:text-slate-400'
          onClick={handleOnSearch}
          disabled={websiteStreamID === '' || loading}
        >
          Search
        </button>
      </div>
      {
        showResult &&
        <div
          className="absolute inset-x-0 -mt-3 bg-slate-900 border border-slate-500 z-10 w-[29.5rem] mx-auto py-5"
          onMouseLeave={hideResult}
        >
          {data ?
            <SubscriptionItem subscription={data.node as Website} /> :
            <p className="m-auto text-sm">No website found.</p>}
        </div>
      }
    </div>
  )
}
