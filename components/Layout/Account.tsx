
import { HiOutlineUserCircle } from 'react-icons/hi'

interface Props {
  address: string;
  ensName?: string | null;
  handleShowUserMenu?: () => void;
  userIcon?: boolean
}

export default function Account({ address, ensName, handleShowUserMenu, userIcon = false }: Props) {
  return (
    <div className='flex gap-1 items-center'>
      {userIcon && <HiOutlineUserCircle className='h-8 w-8 text-slate-50 hover:cursor-pointer' onClick={handleShowUserMenu} />}
      <p className="font-semibold hover:cursor-pointer select-none hover:text-cyan-200" onClick={handleShowUserMenu}>
        {ensName ? ensName : `${address.substring(0, 6)}...${address.substring(address.length - 4)}`}
      </p>
    </div>
  )
}
