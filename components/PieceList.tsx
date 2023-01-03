
import { PropPieceList } from "../pages/admin";
import PieceItem from "./PieceItem";

type Props = {
  list: PropPieceList;
  filterApproved?: boolean;
  adminControls?: boolean
}
export default function PieceList({ list, filterApproved = false, adminControls = false }: Props) {
  return (
    <div className="flex-1 flex flex-wrap justify-center py-4 gap-2 content-evenly">
      {
        list.map((piece) =>
          piece && 
          piece.node && 
          !piece.node.inGarbage &&
          (!filterApproved ? !piece.node.approved : piece.node.approved) && (
            <PieceItem key={piece.node.id} piece={piece.node} adminControls={adminControls} editButton={!filterApproved} />
          ))
      }
    </div>
  )
}
