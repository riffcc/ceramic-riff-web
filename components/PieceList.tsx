import { PieceEdge } from "../utils/__generated__/graphql";
import PieceItem from "./PieceItem";

type Props = {
  list: any;
  adminControls?: boolean
}
export default function PieceList({ list, adminControls = false }: Props) {
  return (
    <div className="flex-1 flex flex-wrap justify-center py-8 gap-2 content-evenly">
      {
        list.map((piece: PieceEdge) => (
          piece &&
          piece.node &&
          piece.node.name &&
          piece.node.cid &&
            <PieceItem
              key={piece.node.id}
              piece={piece.node}
              adminControls={adminControls}
            />
        ))
      }
    </div>
  )
}
