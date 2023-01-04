import { PieceEdge } from "../utils/__generated__/graphql";
import PieceItem from "./PieceItem";

type Props = {
  list: Array<PieceEdge | null>;
  filter?: 'rejected' | 'approved' | 'pending';
  adminControls?: boolean
}
export default function PieceList({ list, filter, adminControls = false }: Props) {
  return (
    <div className="flex-1 flex flex-wrap justify-center py-8 gap-2 content-evenly">
      {
        list.map((piece) => (
          piece &&
          piece.node &&
          piece.node.name &&
          piece.node.cid &&
          (filter === 'rejected' ? piece.node.rejected : true) &&
          (filter === 'pending' ? !piece.node.approved : true) &&
          (filter === 'approved' ? piece.node.approved : true) &&
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
