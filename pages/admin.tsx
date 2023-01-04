import type { NextPage } from 'next'
import PieceList from '../components/PieceList';
import { initializeApollo } from '../lib/apolloClient'
import { WEBSITE_INFO } from '../utils/contants'
import { Maybe, Piece, PieceEdge } from '../utils/__generated__/graphql';

export type PropPieceList = Array<{ __typename?: "PieceEdge", node?: Maybe<Omit<Piece, 'websiteID' | 'website'>> } | null>;

interface Props {
  list: PropPieceList;
}

const AdminPage: NextPage<Props> = ({ list }) => {
  console.log(list)
  return (
    <div className='flex flex-col px-4 py-10 gap-3'>
      <div className='bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl mx-auto w-5/6 p-6 min-h-screen flex'>
        <div className='flex flex-col w-full'>
          <h1 className='font-bold text-xl border-b border-slate-500 flex-none pb-2'>Approved Content</h1>
          {list.length > 0 ? <PieceList filterApproved list={list} adminControls /> : <p className='m-auto'>Not content found.</p>}
          <h1 className='font-bold text-xl border-b border-slate-500 flex-none pb-2'>Pending Approved Content</h1>
          {list.length > 0 ? <PieceList list={list} adminControls /> : <p className='m-auto'>Not content found.</p>}
        </div>

      </div>
    </div>
  )
}


export async function getServerSideProps() {

  const apolloClient = await initializeApollo()

  if (!process.env.WEBSITE_ID) throw new Error("ENVIROMENT VARIABLE WEBSITE_ID UNDEFINED");


  const websiteID = process.env.WEBSITE_ID


  const { data: { node: websiteNode } } = await apolloClient.query({
    query: WEBSITE_INFO,
    variables: {
      id: websiteID,
      piecesPageSize: 100,
      subscriptionsPageSize: 100
    }
  })

  let websitePieceEdges
  if (
    websiteNode &&
    websiteNode.__typename === "Website" &&
    websiteNode.pieces &&
    websiteNode.pieces.edges
  ) {
    websitePieceEdges = websiteNode.pieces.edges
  }

  // // Merge all contents
  const list: PropPieceList = Array.prototype.concat.apply([], websitePieceEdges ? websitePieceEdges : [])

  return {
    props: {
      list
    }
  }
}
export default AdminPage
