import type { NextPage } from 'next'
import PieceList from '../components/PieceList';
import { initializeApollo } from '../lib/apolloClient'
import { WEBSITE_INFO } from '../utils/contants'
import { PieceEdge } from '../utils/__generated__/graphql';

interface Props {
  list: Array<PieceEdge | null>
}

const IndexPage: NextPage<Props> = ({ list }) => {
  console.log(list)
  return (
    <div className='flex flex-col px-4 py-10 gap-3'>
      <div className='bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl mx-auto w-5/6 p-6 min-h-screen flex'>
        <div className='flex flex-col w-full'>
          <h1 className='font-bold text-xl border-b border-slate-500 flex-none pb-2'>Content</h1>
          { list.length > 0 ? <PieceList list={list} filter='approved' /> : <p className='m-auto'>Not content found.</p> }
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps() {

  const apolloClient = await initializeApollo()

  if (!process.env.NEXT_PUBLIC_WEBSITE_ID) throw new Error("ENVIROMENT VARIABLE NEXT_PUBLIC_WEBSITE_ID UNDEFINED");

  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID

  const { data: { node: websiteNode } } = await apolloClient.query({
    query: WEBSITE_INFO,
    variables: { 
      id: websiteID,
      piecesPageSize: 100,
      subscriptionsPageSize: 100
    }
  })

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

  // // Merge all contents

const subscriptionsPieceEdgesFlat: Array<PieceEdge | null> = Array.prototype.concat.apply([], subscriptionsPieceEdges ? subscriptionsPieceEdges : [])
const websitePieceEdgesFlat: Array<PieceEdge | null> = websitePieceEdges ? websitePieceEdges.concat.apply(websitePieceEdges, subscriptionsPieceEdgesFlat) : subscriptionsPieceEdgesFlat


  return {
    props: {
      list: websitePieceEdgesFlat
    }
  }
}
export default IndexPage
