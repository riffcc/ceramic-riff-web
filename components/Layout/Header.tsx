import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAccount, useDisconnect, useEnsName } from 'wagmi'
import Account from './Account'
import Connect from './Connect'
import { useState } from 'react'

export default function Header() {
  const { pathname } = useRouter()
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect()
  const [showUserMenu, setShowUserMenu] = useState(false);


  const handleShowUserMenu = () => setShowUserMenu((prev) => !prev)
  const handleOnDisconnect = () => {
    setShowUserMenu(false)
    disconnect()    
  }

  return (
    <header className="bg-slate-800 h-14 flex items-center px-6 justify-between text-slate-50 relative">
      <p className='w-1/6 text-2xl font-bold text-white'>Rif.CC</p>
      <div className='flex justify-center gap-6'>
        <div>
          <Link href="/" legacyBehavior>
          <a className={pathname === '/' ? 'text-cyan-200' : ''}>Home</a>
          </Link>
        </div> 
        <div>
          <Link href="/pinner" legacyBehavior>
          <a className={pathname === '/pinner' ? 'text-cyan-200' : ''}>Pinner</a>
          </Link>
        </div> 
      </div>
      <div className='w-1/6 grow-0 shrink-0 flex justify-end'>
        {isConnected && address ?
          <Account
            address={address}
            ensName={ensName}
            handleShowUserMenu={handleShowUserMenu}
            userIcon
          /> :
          <Connect />}
      </div>
      {showUserMenu &&
        <div className='w-40 p-4 bg-slate-800 border shadow-lg border-slate-400 rounded-xl absolute -bottom-36 right-3 z-30'>
          <div className='h-full space-y-4'>
            <div className='hover:text-cyan-200'>
              <Link href={'/profile'} onClick={handleShowUserMenu}>
                <p>Profile</p>
              </Link>
            </div>
            <div className='hover:text-cyan-200'>
              <Link href={'/profile'} onClick={handleShowUserMenu}>
                <p>Config</p>
              </Link>
            </div>
            <div className='hover:text-cyan-200 hover:cursor-pointer'>
              <Link href={'/'} onClick={handleOnDisconnect}>
                <p>Disconnect</p>
              </Link>
            </div>
          </div>
        </div>
      }
    </header>
  )
}
