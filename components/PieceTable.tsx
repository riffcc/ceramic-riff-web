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
    header: () => 'Thumbnail',
    cell: props => <div className='h-16 w-16 mx-auto relative my-1'>
      <Image src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${props.getValue()?.cid}`} fill alt='' />
    </div>
  }),
  columnHelper.accessor('node', {
    id: 'name',
    header: () => 'Name',
    cell: props => <p className='text-center'>{props.getValue()?.name}</p>
  }),
  columnHelper.accessor('node', {
    id: 'category',
    header: () => 'Category',
    cell: props => {
      return <p className='text-center'>{props.getValue()?.category}</p>
    }
  }),
  columnHelper.accessor('node', {
    id: 'cid',
    header: () => 'CID',
    cell: props =>
      <a href={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${props.getValue()?.cid}`} target='_blank'>
        <p className='text-center hover:text-cyan-200'>
          {`${props.getValue()?.cid?.substring(0, 5)}...${props.getValue()?.cid?.substring(props.getValue()?.cid?.length! - 5)}`}
        </p>
      </a>
  }),
  columnHelper.accessor('node', {
    id: 'actions',
    header: 'Actions',
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
    <table className='table-auto border-collapse border border-slate-400 w-5/6 mx-auto'>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className='border border-slate-300 p-4'>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className='border border-slate-300 px-8'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
