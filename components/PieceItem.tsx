import Image from "next/image";
import { useState } from "react";
import { Piece } from "../utils/__generated__/graphql";
import ItemAdminControls from "./ItemAdminControls";

interface Props {
  piece: Omit<Piece, 'website' | 'websiteID'>
  adminControls: boolean
  editButton: boolean
}
export default function PieceItem({ piece, adminControls, editButton }: Props) {
  const [name, setName] = useState(piece.name);
  console.log(piece)
  return (
    <div className="flex flex-col w-40">
      <a href={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${piece.cid}`} target='_blank'>
        <div className="rounded-xl p-4 h-36 w-36 relative mx-auto bg-gradient-to-b from-slate-700 to-slate-600">
          <Image
            alt=""
            src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${piece.cid}`}
            fill
            priority
          />
        </div>
      </a>
      {/* <p className="text-xs mt-2 truncate text-ellipsis text-center">{piece.name}</p> */}
      <input 
      type="text" 
      className="mt-2 text-xs truncate text-ellipsis text-center p-0 bg-transparent border-none outline-none ring-0 focus:ring-0" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      {
        adminControls && (
          <ItemAdminControls itemID={piece.id} newName={name} editButton={editButton} />
        )
      }
    </div>
  )
}
