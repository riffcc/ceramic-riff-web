import { useFragment_experimental as useFragment } from '@apollo/client';
import type { NextPage } from 'next'
import { useMemo } from 'react';
import { useAccount } from 'wagmi';
import { pageSizeMedium, UserFragment, WebsiteData, websiteDataQueryParams } from '../utils/constants'
import Connect from '../components/Layout/Connect'
import React from 'react';
import PieceList from '../components/PieceList';
import { PinEdge } from '../utils/__generated__/graphql';

const ProfilePage: NextPage = () => {
  const { address, isConnected } = useAccount()
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const { data: websiteData } = useFragment<any, any>({
    from: { __typename: "Website", id: websiteID },
    fragment: WebsiteData,
    fragmentName: 'WebsiteData',
    variables: {
      ...websiteDataQueryParams
    }
  })

  const { complete: isUser } = useFragment({
    from: {
      __typename: "EthAccount",
      address: address ? address : null
    },
    fragment: UserFragment,
    variables: {
      pageSizeMedium
    }
  })

  if (isConnected && !isUser) {
    console.log('you are not an user')
  }

  const pieces = useMemo(() => {
    const list = websiteData?.pins.edges && websiteData.pins.edges
      .filter((pin: any) => (pin?.node && pin.node.owner?.address === address && pin.node.piece?.name && pin.node.piece?.CID))
    const approvedPieces = list && list.filter((pin: PinEdge) => (!pin?.node?.deleted && pin?.node?.approved && !pin?.node?.rejected))
    const pendingPieces = list && list.filter((pin: PinEdge) => (!pin?.node?.deleted && !pin?.node?.approved && !pin?.node?.rejected))
    const rejectedPieces = list && list.filter((pin: PinEdge) => (!pin?.node?.deleted && !pin?.node?.approved && pin?.node?.rejected))
    return {
      approvedPieces,
      pendingPieces,
      rejectedPieces
    }
  }, [websiteData, address])
  return (
    <div className='flex flex-col px-4 py-10 gap-3'>
      {
        !isConnected ?
          <Connect className='h-10 w-40 m-auto px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 hover:cursor-pointer disabled:cursor-default hover:disabled:bg-cyan-600' />
          : isUser ?
            <div className='rounded-xl mx-auto w-5/6 p-6 min-h-screen flex flex-col'>
              <div className='flex flex-col w-full gap-3'>
                <p className='font-semibold ml-4 text-lg flex-none'>Approved</p>
                <div className='border rounded-xl border-slate-500 min-h-[20rem] flex'>
                  {pieces.approvedPieces && pieces.approvedPieces.length > 0 ? <PieceList list={pieces.approvedPieces} table/> : <p className='m-auto'>No content found.</p>}
                </div>
                <p className='font-semibold ml-4 text-lg flex-none'>Pending</p>
                <div className='border rounded-xl border-slate-500 min-h-[20rem] flex'>
                  {pieces.pendingPieces && pieces.pendingPieces.length > 0 ? <PieceList list={pieces.pendingPieces} table/> : <p className='m-auto'>No content found.</p>}
                </div>
                <p className='font-semibold ml-4 text-lg flex-none'>Rejected</p>
                <div className='border rounded-xl border-slate-500 min-h-[20rem] flex'>
                  {pieces.rejectedPieces && pieces.rejectedPieces.length > 0 ? <PieceList list={pieces.rejectedPieces} table/> : <p className='m-auto'>No content found.</p>}
                </div>
              </div>
            </div> : <p>You are not an user</p>
      }
    </div>
  )
}

export default ProfilePage
