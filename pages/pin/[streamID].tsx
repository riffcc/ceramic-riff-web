import type { NextPage } from 'next'
import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useFragment_experimental as useFragment, useMutation, useQuery } from '@apollo/client';
import {
  CREATE_PIN_DISLIKE,
  CREATE_PIN_LIKE,
  GET_PIN,
  pageSizeMax,
  pageSizeMedium,
  UserFragment,
  CategoryFragment,
  PinDislikeFragment,
  PinLikeFragment,
  PinFragment,
} from '../../utils/constants'
import Image from 'next/image'
import Link from 'next/link';
import Spinner from '../../components/Layout/Spinner';
import { HiThumbDown, HiThumbUp } from 'react-icons/hi';
import { useAccount } from 'wagmi';
import {
  CategoryFragment as CategoryFragmentType,
  PinFragment as PinFragmentType,
  PinLikeFragment as PinLikeFragmentType,
  PinDislikeFragment as PinLDislikeFragmentType,
  WebsiteUserFragment
} from '../../utils/__generated__/graphql';

const PiecePage: NextPage = () => {
  const router = useRouter()
  const { address, isConnected } = useAccount()
  const { query } = router
  const { data: pinData, loading, error } = useQuery(GET_PIN, {
    variables: {
      id: query.streamID as string,
      pageSizeMax
    }
  })
  const pin = useMemo(() => {
    if (!pinData || pinData.node?.__typename !== 'Pin') {
      return undefined;
    }
    return pinData.node
  }, [pinData])

  const [likePin] = useMutation(CREATE_PIN_LIKE)
  const [dislikePin] = useMutation(CREATE_PIN_DISLIKE)

  const { complete: isUser, data: userData } = useFragment<PinFragmentType, any>({
    from: {
      __typename: "EthAccount",
      address: address ? address : null
    },
    fragment: UserFragment,
    variables: {
      pageSizeMedium
    }
  })

  const { data: likedData } = useFragment<PinLikeFragmentType, any>({
    from: {
      __typename: "PieceLike",
      owner: { address: address ? address : null },
      piece: { id: pin ? pin.id : null }
    },
    fragment: PinLikeFragment,
  })
  const alreadyLiked = useMemo(() => !!likedData?.__typename, [likedData])

  const { data: dislikedData } = useFragment<PinLDislikeFragmentType, any>({
    from: {
      __typename: "PieceDislike",
      owner: { address: address ? address : null },
      piece: { id: pin ? pin.id : null }
    },
    fragment: PinDislikeFragment,
  })
  const alreadyDisliked = useMemo(() => !!dislikedData?.__typename, [dislikedData])

  const { data: categoryData } = useFragment<CategoryFragmentType, any>({
    from: {
      __typename: "Category",
      name: pinData?.node?.__typename === 'Pin' && pinData?.node?.category ? pinData.node.category.name : null
    },
    fragment: CategoryFragment,
    variables: {
      pageSizeMedium
    }
  })

  const handleOnLike = useCallback(() => {
    likePin({
      variables: {
        input: {
          content: {
            ownerID: userData?.id,
            pinID: pin?.id,
            categoryID: categoryData?.id
          }
        }
      },
      update: (cache, result) => {
        cache.updateFragment({
          id: cache.identify({ __typename: "Pin", id: pin?.id }),
          fragment: PinFragment,
          variables: {
            pageSizeMax
          }
        }, (data) => ({
          ...data,
          likesCount: data.likesCount + 1,
          likes: {
            edges: [[...data.likes.edges, {
              __typename: "PinLikeEdge",
              node: result.data?.createPinLike?.document
            }]]
          }
        }))
      }
    })
  }, [userData, pin, categoryData])

  const handleOnDisike = useCallback(() => {
    dislikePin({
      variables: {
        input: {
          content: {
            ownerID: userData?.id,
            pinID: pin?.id,
            categoryID: categoryData?.id
          }
        }
      },
      update: (cache, result) => {
        cache.updateFragment({
          id: cache.identify({ __typename: "Pin", id: pin?.id }),
          fragment: PinFragment,
          variables: {
            pageSizeMax
          }
        }, (data) => ({
          ...data,
          dislikesCount: data.dislikesCount + 1,
          dislikes: {
            edges: [[...data.likes.edges, {
              __typename: "PinDislikeEdge",
              node: result.data?.createPinDislike?.document
            }]]
          }
        }))
      }
    })
  }, [userData, pin, categoryData])

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
              {!pin || !pin.approved && (
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
              {pin && pin.approved && (
                <div className='flex gap-1 w-3/4 bg-slate-800 mx-auto'>
                  <a href={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${pin.piece?.CID}`} target='_blank'>
                    <div className="rounded-xl p-4 h-36 w-36 relative mx-auto bg-gradient-to-b from-slate-700 to-slate-600">
                      <Image
                        alt=""
                        src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${pin.piece?.CID}`}
                        fill
                        priority
                      />
                    </div>
                  </a>
                  <div className='p-2 w-full flex flex-col'>
                    <div className='flex w-1/3 place-self-end h-6 items-center justify-evenly'>
                      <div className='flex gap-2 items-center'>
                        <button
                          onClick={handleOnLike}
                          disabled={alreadyLiked || !isConnected || !isUser}
                        >
                          <HiThumbUp
                            className={alreadyLiked ? 'h-5 w-5 shadow-sm shadow-slate-900 text-slate-400' : 'h-5 w-5'}
                          />
                        </button>
                        <p className='text-sm'>{pin.likesCount}</p>
                      </div>
                      <div className='flex gap-2 items-center'>
                        <button
                          onClick={handleOnDisike}
                          disabled={alreadyDisliked || !isConnected || !isUser}
                        >
                          <HiThumbDown
                            className={alreadyDisliked ? 'h-5 w-5 shadow-sm shadow-slate-900 text-slate-400' : 'h-5 w-5'}
                          />
                        </button>
                        <p className='text-sm'>{pin.dislikesCount}</p>
                      </div>
                    </div>
                    <p className="font-bold text-lg truncate text-ellipsis ml-2">{pin.piece?.name}</p>
                    <p className="font-medium truncate text-ellipsis ml-2">{pin.category?.name}</p>
                    <p className="font-medium truncate text-ellipsis ml-2">{pin.piece?.details?.artistNames}</p>
                    <p className="font-medium truncate text-ellipsis ml-2">{pin.piece?.details?.initialReleaseYear}</p>
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
