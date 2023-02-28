import { getDate } from "../utils/getDate";
import { Featured, FeaturedEdge, Piece, PieceEdge, PinEdge } from "../utils/__generated__/graphql";
import PieceItem from "./PieceItem";
import PieceTable from "./PieceTable";

type Props = {
  list: PinEdge[] | FeaturedEdge[];
  table?: boolean
}

export const runFeaturedTime = (featured: Featured) => {
  const now = getDate('number')
  return parseInt(featured.startAt) < now && parseInt(featured.endAt) > now
}

export default function PieceList({ list, table = false }: Props) {
  return (
    <div className="flex-1 flex flex-wrap justify-center py-8 gap-2 content-evenly">
      {
        table ?
          <PieceTable pins={list as PinEdge[]} /> :
          list.map((edge) => {
            if (
              edge &&
              edge.__typename === 'PinEdge' &&
              edge.node &&
              edge.node.piece?.name &&
              edge.node.piece?.CID
            ) {
              return <PieceItem
                key={edge.node.id}
                pin={edge.node}
              />
            }
            if (
              edge &&
              edge.__typename === 'FeaturedEdge' &&
              edge.node &&
              runFeaturedTime(edge.node) &&
              edge.node.pin &&
              edge.node.pin.piece &&
              edge.node.pin.piece.name &&
              edge.node.pin.piece.CID
              ) {
              return <PieceItem
                key={edge.node.pin.id}
                pin={edge.node.pin}
              />
            }


          })
      }
    </div>
  )
}
