import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { PieceEdge } from '../utils/__generated__/graphql'
import Image from 'next/image'
import PieceActions from './PieceActions'

const columnHelper = createColumnHelper<PieceEdge>()

const columns = [
  columnHelper.accessor('node', {
    id: 'thumbnail',
    cell: props => <div className='h-16 w-16 mx-auto relative my-1'>
      <Image src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${props.getValue()?.CID}`} fill alt='' />
    </div>
  }),
  columnHelper.accessor('node', {
    id: 'name',
    cell: props => <p className='text-center'>{props.getValue()?.name}</p>
  }),
  columnHelper.accessor('node', {
    id: 'category',
    cell: props => {
      return <p className='text-center'>{props.getValue()?.category?.name}</p>
    }
  }),
  columnHelper.accessor('node', {
    id: 'cid',
    cell: props =>
      <a href={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${props.getValue()?.CID}`} target='_blank'>
        <p className='text-center hover:text-cyan-200'>
          {`${props.getValue()?.CID?.substring(0, 5)}...${props.getValue()?.CID?.substring(props.getValue()?.CID?.length! - 5)}`}
        </p>
      </a>
  }),
  columnHelper.accessor('node', {
    id: 'actions',
    cell: props => <PieceActions piece={props.getValue()} />
  })
]

interface Props {
  pieces: Array<PieceEdge>,
}

export default function PieceTable({ pieces }: Props) {

  const table = useReactTable({
    data: pieces,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className='table-auto w-full mx-auto'>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className='px-8'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
