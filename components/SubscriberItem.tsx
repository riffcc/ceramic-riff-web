
import { HiOutlineCreditCard } from 'react-icons/hi'
import { Website } from '../utils/__generated__/graphql'
import Image from 'next/image'

interface Props {
  subscriber: Website
}

export default function Subscribertem({ subscriber }: Props) {
  return (
    <div className="flex items-center justify-center gap-1 ">
      <div className="h-24 w-24 border-slate-800 border relative">
        {
          subscriber.image ?
            <Image
              alt=""
              src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${subscriber.image}`}
              fill
              priority
            /> :
            <div className="flex h-full">
              <HiOutlineCreditCard className="h-12 w-12 text-slate-200 m-auto" />
            </div>
        }
      </div>
      <div className="border-slate-800 border h-24 px-2 py-1">
        <div className="flex items-center justify-between w-60 h-8">
          <p className="truncate text-sm font-medium">{subscriber.websiteName}</p>
        </div>
        <div className="overflow-y-auto h-16 w-60 pt-1">
          <p className="text-xs text-slate-400">{subscriber.description}</p>
        </div>
      </div>
    </div>
  )
}
