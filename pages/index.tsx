import { useApolloClient } from '@apollo/client';
import type { NextPage } from 'next'
import { useMemo } from 'react';
import PieceList from '../components/PieceList';
import { GET_WEBSITE_DATA, websiteDataQueryParams } from '../utils/constants';


const IndexPage: NextPage = () => {
  const apolloClient = useApolloClient();
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const websiteData = apolloClient.cache.readQuery({
    query: GET_WEBSITE_DATA,
    variables: {
      id: websiteID!,
      ...websiteDataQueryParams
    }
  })

  const piecesList = useMemo(() => {
    const websiteNode = websiteData?.node
    let websitePieceEdges
    let subscriptionsPieceEdges

    if (
      websiteNode &&
      websiteNode.__typename === "Website" &&
      websiteNode.pieces &&
      websiteNode.pieces.edges
    ) {
      websitePieceEdges = websiteNode.pieces.edges
    }

    if (
      websiteNode &&
      websiteNode.__typename === "Website" &&
      websiteNode.subscriptions &&
      websiteNode.subscriptions.edges
    ) {
      subscriptionsPieceEdges = websiteNode.subscriptions.edges
        .map((subscriptionEdge) => subscriptionEdge &&
          subscriptionEdge.node &&
          subscriptionEdge.node.subcribedWebsite &&
          subscriptionEdge.node.subcribedWebsite.pieces.edges
        )
    }

    // Merge all contents

    const subscriptionsPieceEdgesFlat = Array.prototype.concat.apply([], subscriptionsPieceEdges ? subscriptionsPieceEdges : [])
    return websitePieceEdges ? websitePieceEdges.concat.apply(websitePieceEdges, subscriptionsPieceEdgesFlat) : subscriptionsPieceEdgesFlat

  }, [websiteData])

  return (
    <div className='flex flex-col px-4 py-10 gap-3 relative'>
      <div className='bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl mx-auto w-5/6 p-6 min-h-screen flex'>      
        <div className='flex flex-col w-full'>
          <h1 className='font-bold text-xl border-b border-slate-500 flex-none pb-2'>Content</h1>
          {piecesList.length > 0 ? <PieceList list={piecesList} filter='approved' /> : <p className='m-auto'>Not content found.</p>}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
