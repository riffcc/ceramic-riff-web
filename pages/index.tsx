import { useQuery } from '@apollo/client';
import type { NextPage } from 'next'
import { useMemo } from 'react';
import Spinner from '../components/Layout/Spinner';
import PieceList from '../components/PieceList';
import { GET_WEBSITE_CONTENT } from '../utils/contants';

const IndexPage: NextPage = () => {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const { loading: loadingWebsiteData, error, data: websiteData } = useQuery(GET_WEBSITE_CONTENT, {
    variables: {
      id: websiteID!,
      piecesPageSize: 50,
      subscriptionsPageSize: 50
    }
  });

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

  if (error) console.log(error)

  return (
    <div className='flex flex-col px-4 py-10 gap-3 relative'>
      <div className='bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl mx-auto w-5/6 p-6 min-h-screen flex'>
        {
          loadingWebsiteData ?
            <Spinner className='h-8 w-8 animate-spin text-slate-200 m-auto' /> :
            (
              error ?
                <p className='m-auto text-red-400'>Error to fetch content.</p> :
                <div className='flex flex-col w-full'>
                  <h1 className='font-bold text-xl border-b border-slate-500 flex-none pb-2'>Content</h1>
                  {piecesList.length > 0 ? <PieceList list={piecesList} filter='approved' /> : <p className='m-auto'>Not content found.</p>}
                </div>
            )
        }
      </div>
    </div>
  )
}

export default IndexPage
