import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Pin, PinEdge } from '../utils/__generated__/graphql'
import Image from 'next/image'
import PinActions from './PinActions'

const columnHelper = createColumnHelper<PinEdge>()

const columns = [
  columnHelper.accessor('node', {
    id: 'thumbnail',
    cell: props => <div className='h-16 w-16 mx-auto relative my-1'>
      <Image src={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${props.getValue()?.piece?.CID}`} fill alt='' />
    </div>
  }),
  columnHelper.accessor('node', {
    id: 'name',
    cell: props => <p className='text-center'>{props.getValue()?.piece?.name}</p>
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
      <div>
        <a href={`https://${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/ipfs/${props.getValue()?.piece?.CID}`} target='_blank'>
          <p className='text-center hover:text-cyan-200'>
            {`${props.getValue()?.piece?.CID?.substring(0, 5)}...${props.getValue()?.piece?.CID?.substring(props.getValue()?.piece?.CID?.length! - 5)}`}
          </p>
        </a>
        {}
      </div>
  }),
  columnHelper.display({
    id: 'actions',
    cell: props => {
      const pin = props.row.original.node
      return pin ? <PinActions pin={pin as Pin} /> : null
    }
  })
]

interface Props {
  pins: Array<PinEdge>,
}

export default function PieceTable({ pins }: Props) {

  const table = useReactTable({
    data: pins,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className='table-auto w-full mx-auto'>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.original.node?.id}>
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
