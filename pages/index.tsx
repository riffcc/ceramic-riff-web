import { useFragment_experimental } from '@apollo/client';
import type { NextPage } from 'next'
import { useMemo } from 'react';
import PieceList from '../components/PieceList';
import { WebsiteData, websiteDataQueryParams } from '../utils/constants';


const IndexPage: NextPage = () => {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID

  const { data: websiteData } = useFragment_experimental<any, any>({
    from: { __typename: "Website", id: websiteID },
    fragment: WebsiteData,
    fragmentName: 'WebsiteData',
    variables: {
      ...websiteDataQueryParams
    }
  })

  const piecesList = useMemo(() => {
    let websitePieceEdges
    let subscriptionsPieceEdges

    websitePieceEdges = websiteData?.pieces?.edges
    subscriptionsPieceEdges = websiteData?.subscriptions?.edges && websiteData.subscriptions.edges
      .map((subscriptionEdge: any) => subscriptionEdge &&
        subscriptionEdge.node &&
        subscriptionEdge.node.subscribedWebsite &&
        subscriptionEdge.node.subscribedWebsite.pieces.edges
      )

    // Merge all contents

    const subscriptionsPieceEdgesFlat = Array.prototype.concat.apply([], subscriptionsPieceEdges ? subscriptionsPieceEdges : [])
    const mergedList = websitePieceEdges ? websitePieceEdges.concat.apply(websitePieceEdges, subscriptionsPieceEdgesFlat) : subscriptionsPieceEdgesFlat
    return mergedList.filter((piece: any) => piece?.node?.approved)
  }, [websiteData])

  return (
    <div className='flex flex-col px-4 py-10 gap-3 relative'>
      <div className='bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl mx-auto w-5/6 p-6 min-h-screen flex'>      
        <div className='flex flex-col w-full'>
          <h1 className='font-bold text-xl border-b border-slate-500 flex-none pb-2'>Content</h1>
          {piecesList.length > 0 ? <PieceList list={piecesList} /> : <p className='m-auto'>No content found.</p>}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
