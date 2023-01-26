import Image from "next/image";
import Link from "next/link";
import { Piece } from "../utils/__generated__/graphql";

interface Props {
  piece: Piece
}
export default function PieceItem({ piece }: Props) {
  return (
    <div className="flex flex-col w-40">
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
      <Link href={`/pin/${piece.id}`}>
        <p className="text-xs mt-2 truncate text-ellipsis text-center">{piece.name}</p>
      </Link>
    </div>
  )
}
