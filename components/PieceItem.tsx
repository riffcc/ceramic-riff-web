import Image from "next/image";
import Link from "next/link";
import { Pin } from "../utils/__generated__/graphql";

interface Props {
  pin: Pin
}
export default function PieceItem({ pin }: Props) {
  return (
    <div className="w-40">
      <div className="rounded-xl p-4 h-36 w-36 relative mx-auto bg-gradient-to-b from-slate-700 to-slate-600">
        <a href={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${pin.piece?.CID}`} target='_blank'>
          <Image
            alt=""
            src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${pin.piece?.CID}`}
            fill
            priority
          />
        </a>
      </div>
      <div className='w-full h-8'>
        <Link href={`/pin/${pin.id}`}>
          <p className="text-xs mt-2 text-center">{pin.piece?.name}</p>
        </Link>
      </div>
    </div>
  )
}
