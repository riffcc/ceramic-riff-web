import { useFragment_experimental, useQuery } from '@apollo/client';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useAccount } from 'wagmi';
import AdminList from '../components/AdminList';
import Connect from '../components/Layout/Connect';
import Spinner from '../components/Layout/Spinner';
import NewAdmin from '../components/NewAdmin';
import PieceList from '../components/PieceList';
import SubscriptionList from '../components/SubscriptionList';
import SubscriptionSearch from '../components/SubscriptionSearch';
import { AdminFragment, GET_WEBSITE_INDEX, WebsiteData, websiteDataQueryParams } from '../utils/constants';

const AdminPage: NextPage = () => {
  const { address, isConnected } = useAccount()
  const router = useRouter()
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID

  // const { loading: loadingWebsiteIndex, data: websiteIndexData } = useQuery(GET_WEBSITE_INDEX, {
  //   variables: {
  //     pageSize: 100
  //   }
  // })

  const { data: websiteData } = useFragment_experimental({
    from: { __typename: "Website", id: websiteID },
    fragment: WebsiteData,
    fragmentName: 'WebsiteData',
    variables: {
      ...websiteDataQueryParams
    }
  })

  const { complete: isAdminUser, data: adminData } = useFragment_experimental({
    from: {
      __typename: "Admin",
      admin: {
        address: address ? address : null
      }
    },
    fragment: AdminFragment,
  })

  if (isConnected && !isAdminUser) router.push('/')

  const pieces = useMemo(() => {
    const list = websiteData?.pieces.edges && websiteData.pieces.edges
      .filter((piece: any) => (piece?.node.name && piece.node.cid))
    const approvedPieces = list && list.filter((piece: any) => (piece?.node.approved))
    const pendingPieces = list && list.filter((piece: any) => (!piece?.node.approved && !piece?.node.rejected))
    const rejectedPieces = list && list.filter((piece: any) => (piece?.node.rejected))
    return {
      approvedPieces,
      pendingPieces,
      rejectedPieces
    }
  }, [websiteData, address])

  const subscriptionList = useMemo(() => {
    const list = websiteData?.subscriptions.edges
    return list ? list : []
  }, [websiteData])

  const adminList = useMemo(() => {
    const list = websiteData?.admins.edges
    const activeAdminsList = list.filter((edge) => !edge?.node?.inactive)
    return activeAdminsList ? activeAdminsList.filter((edge) => edge?.node?.id !== adminData.id) : []
  }, [websiteData, adminData])
  return (
    <div className='flex flex-col px-4 py-10 gap-3'>
      {
        !isConnected ?
          <Connect className='h-10 w-40 m-auto px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 hover:cursor-pointer disabled:cursor-default hover:disabled:bg-cyan-600' />
          : isAdminUser && !adminData.inactive ?
            <div className=' rounded-xl mx-auto w-5/6 p-6 min-h-screen flex flex-col'>
              <div className='flex flex-col w-full gap-3'>
                <h1 className='font-bold text-xl border-b border-slate-500 pb-2'>Content</h1>
                <p className='font-semibold mx-auto flex-none'>Approved</p>
                <div className='border rounded-xl border-slate-500 min-h-[20rem] flex'>
                  {pieces.approvedPieces && pieces.approvedPieces.length > 0 ? <PieceList list={pieces.approvedPieces} table /> : <p className='m-auto'>No content found.</p>}
                </div>
                <p className='font-semibold mx-auto flex-none'>Pending</p>
                <div className='border rounded-xl border-slate-500 min-h-[20rem] flex'>
                  {pieces.pendingPieces && pieces.pendingPieces.length > 0 ? <PieceList list={pieces.pendingPieces} table /> : <p className='m-auto'>No content found.</p>}
                </div>
                <p className='font-semibold mx-auto flex-none'>Rejected</p>
                <div className='border rounded-xl border-slate-500 min-h-[20rem] flex'>
                  {pieces.rejectedPieces && pieces.rejectedPieces.length > 0 ? <PieceList list={pieces.rejectedPieces} table /> : <p className='m-auto'>No content found.</p>}
                </div>
              </div>
              <div className='flex flex-col w-full mt-10 border-t-2 border-slate-500 py-2'>
<<<<<<< HEAD
                <div>
                  <h1 className='font-bold text-xl flex-none mb-2'>Subscriptions</h1>
                  <div className='border-t border-slate-500 py-4'>
                    {subscriptionList && subscriptionList.length > 0 ? <SubscriptionList list={subscriptionList} /> : <p className='m-auto'>Not subscriptions found.</p>}
                  </div>
                </div>
=======
                {
                  loadingWebsiteIndex ?
                    <Spinner className="h-8 w-8 animate-spin text-slate-200 m-auto" /> :
                    <div>
                      <h1 className='font-bold text-xl flex-none mb-2'>Subscriptions</h1>
                      <div className='border-t border-slate-500 py-10'>

                        {subscriptionList && subscriptionList.length > 0 ? <SubscriptionList list={subscriptionList} /> : <p className='m-auto'>No subscriptions found.</p>}
                      </div>
                    </div>
                }
>>>>>>> a6bec289f629bc2cfd8d3a6ef14f9a3206e644aa
              </div>
              {
                adminData.super &&
                <div className='grid w-full mt-10 border-t-2 border-slate-500 py-2'>
                    <h1 className='font-bold text-xl mb-2'>Admins</h1>
                    <div className="flex justify-center py-10 border-t border-slate-500  min-h-[20rem] gap-10">
                      <NewAdmin />
                      <div className='w-[25rem]'>
                        {adminList && adminList.length > 0 ?
                          <AdminList list={adminList} />
                          : <p className='m-auto text-sm text-center'>No extra admins found.</p>
                        }
                      </div>
                    </div>
                </div>
              }
            </div> : <p className='text-xl font-bold text-red-400 m-auto'>Unauthorized access!</p>
      }
    </div>
  )
}

export default AdminPage
