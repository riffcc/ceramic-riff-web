import { useFragment_experimental as useFragment } from '@apollo/client';
import type { NextPage } from 'next'
import { useMemo } from 'react';
import PieceList, { runFeaturedTime } from '../components/PieceList';
import { WebsiteData, websiteDataQueryParams } from '../utils/constants';
import { Featured, FeaturedEdge, PieceEdge, WebsiteDataFragment as WebsiteDataFragmentType, WebsiteDataQueryVariables } from '../utils/__generated__/graphql';


const IndexPage: NextPage = () => {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID

  const { data: websiteData } = useFragment<WebsiteDataFragmentType, any>({
    from: { __typename: "Website", id: websiteID },
    fragment: WebsiteData,
    variables: {
      ...websiteDataQueryParams
    }
  })

  const featuredList = useMemo(() => {
    const empy = {
      list: [] as FeaturedEdge[],
      almostOneActive: false
    }
    if (!websiteData || !websiteData.featured.edges) return empy
    const almostOneActive = (websiteData.featured.edges.filter((edge) => {
      if (edge && edge.node) {
        return runFeaturedTime(edge.node as Featured)
      }
    })).length > 0

    return {
      list: websiteData.featured.edges as FeaturedEdge[],
      almostOneActive
    }
  }, [websiteData])

  console.log(featuredList)

  const piecesList = useMemo(() => {
    const websitePieceEdges = websiteData?.pieces?.edges
    const subscriptionsPieceEdges = websiteData?.subscriptions?.edges && websiteData.subscriptions.edges
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
          {
            featuredList.almostOneActive && featuredList.list.length > 0 &&
            <div className='min-h-[20rem]'>
              <h1 className='font-bold text-xl border-b border-slate-500 flex-none pb-2'>Featured</h1>
              <PieceList list={featuredList.list} />
            </div>
          }
          <h1 className='font-bold text-xl border-b border-slate-500 flex-none pb-2'>Content</h1>
          {piecesList.length > 0 ? <PieceList list={piecesList} /> : <p className='m-auto'>No content found.</p>}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
