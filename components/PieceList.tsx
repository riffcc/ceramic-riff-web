import { PieceEdge } from "../utils/__generated__/graphql";
import PieceItem from "./PieceItem";
import PieceTable from "./PieceTable";

type Props = {
  list: any;
  table?: boolean
}
export default function PieceList({ list, table = false }: Props) {
  
  return (
    <div className="flex-1 flex flex-wrap justify-center py-8 gap-2 content-evenly">
      {
        table ?
          <PieceTable pieces={list} /> :
          list.map((piece: PieceEdge) => (
            piece &&
            piece.node &&
            piece.node.name &&
            piece.node.CID &&
            <PieceItem
              key={piece.node.id}
              piece={piece.node}
            />
          ))
      }
    </div>
  )
}
