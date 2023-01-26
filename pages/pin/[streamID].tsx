import type { NextPage } from 'next'
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PIECE } from '../../utils/constants'
import Image from 'next/image'
import Link from 'next/link';
import Spinner from '../../components/Layout/Spinner';

const PiecePage: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const { data, loading, error } = useQuery(GET_PIECE, {
    variables: {
      id: query.streamID as string
    }
  })

  const piece = useMemo(() => {
    if (!data || data.node?.__typename !== 'Piece') {
      return undefined;
    }
    return data.node
  }, [data])

  return (
    <div className='flex flex-col gap-3'>
      <div className='rounded-xl mx-auto w-5/6 py-16 px-10 min-h-screen flex flex-col'>
        <div className='flex flex-col w-full gap-3'>
          <p className='font-semibold ml-4 text-lg flex-none'></p>
          <div className='border rounded-xl border-slate-500 min-h-[20rem] flex'>
            <div className='w-full px-32 space-y-4 py-6'> 
              <div className='w-fit'>
                <Link href={'/'} >
                  <p className='-ml-2 text-sm text-slate-200'>
                    Back to Home
                  </p>
                </Link>
              </div>
              {!piece || !piece.approved && (
                <div className='w-full flex py-4'>
                  <p className='m-auto'>Pin not found.</p>
                </div>
              )} 
              {error && (
                <div className='w-full flex py-4'>
                  <p className='m-auto text-red-400'>Error to fetch pin</p>
                </div>
              )} 
              {loading && (
                <div className='w-full flex py-4'>
                <Spinner className='m-auto h-8 w-8 animate-spin' />
                </div>
              )} 
              {piece && piece.approved && (
                  <div className='flex gap-1'>
                  <a href={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${piece.CID}`} target='_blank'>
                    <div className="rounded-xl p-4 h-36 w-36 relative mx-auto bg-gradient-to-b from-slate-700 to-slate-600">
                      <Image
                        alt=""
                        src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${piece.CID}`}
                        fill
                        priority
                      />
                    </div>
                  </a>
                    <div className='p-2 space-y-2'>
                    <p className="font-bold text-lg truncate text-ellipsis ml-2">{piece.name}</p>
                    <p className="font-medium truncate text-ellipsis ml-2">{piece.category}</p>
                    <p className="font-medium truncate text-ellipsis ml-2">{piece.details?.artistNames}</p>
                    <p className="font-medium truncate text-ellipsis ml-2">{piece.details?.initialReleaseYear}</p>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PiecePage
