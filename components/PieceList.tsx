import { getDate } from "../utils/getDate";
import { Featured, FeaturedEdge, Piece, PieceEdge } from "../utils/__generated__/graphql";
import PieceItem from "./PieceItem";
import PieceTable from "./PieceTable";

type Props = {
  list: PieceEdge[] | FeaturedEdge[];
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
          <PieceTable pieces={list as PieceEdge[]} /> :
          list.map((edge) => {
            if (
              edge.node &&
              edge.__typename === 'PieceEdge' &&
              edge.node.name &&
              edge.node.CID
            ) {
              return <PieceItem
                key={edge.node.id}
                piece={edge.node}
              />
            }
            if (
              edge &&
              edge.node &&
              edge.__typename === 'FeaturedEdge' &&
              runFeaturedTime(edge.node) &&
              edge.node.piece &&
              edge.node.piece.name &&
              edge.node.piece.CID
              ) {
              return <PieceItem
                key={edge.node.piece.id}
                piece={edge.node.piece}
              />
            }


          })
      }
    </div>
  )
}
