import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAccount, useDisconnect, useEnsName } from 'wagmi'
import Account from './Account'
import Connect from './Connect'
import { useEffect, useMemo, useState } from 'react'
import { gql, useApolloClient } from '@apollo/client'

export default function Header() {
  const { pathname } = useRouter()
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect()
  const [showUserMenu, setShowUserMenu] = useState(false);
  const apolloClient = useApolloClient()

  const isAdminUser = useMemo(() => !!(apolloClient.readFragment({
    id: apolloClient.cache.identify({ 
      __typename: "Admin", 
      admin: { 
        address: address ? address.toLowerCase() : null 
      } 
    }),
    fragment: gql`
        fragment AdminUserId on Admin {
          id
        }
      `
  })), [address])

  const isUser = useMemo(() => !!(apolloClient.readFragment({
    id: apolloClient.cache.identify({
      __typename: "EthAccount",
      address: address ? address : null
    }),
    fragment: gql`
        fragment AdminUserId on Admin {
          id
        }
      `
  })), [address])

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
        {isUser && <div>
          <Link href="/profile" legacyBehavior>
            <a className={pathname === '/profile' ? 'text-cyan-200' : ''}>My Pins</a>
          </Link>
        </div>}
        { isAdminUser && <div>
          <Link href="/admin" legacyBehavior>
            <a className={pathname === '/admin' ? 'text-cyan-200' : ''}>Admin Website</a>
          </Link>
        </div>}
      </div>
      <div className='w-1/6 grow-0 shrink-0 flex justify-end'>
        {isConnected && address ?
          <Account
            address={address}
            ensName={ensName}
            handleShowUserMenu={handleShowUserMenu}
            userIcon
          /> :
          <Connect className='h-9 min-w-[8rem] px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 hover:cursor-pointer disabled:cursor-default hover:disabled:bg-cyan-600' />}
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
