import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header className="bg-slate-800 h-14 flex items-center px-6 justify-between text-slate-50">
      <p className='text-2xl font-bold text-white'>Rif.CC</p>
      <div className='flex-1 flex justify-center gap-4'>
        <Link href="/" legacyBehavior>
          <a className={pathname === '/' ? 'text-cyan-200' : ''}>Home</a>
        </Link>
        <Link href="/pinner" legacyBehavior>
          <a className={pathname === '/pinner' ? 'text-cyan-200' : ''}>Pinner</a>
        </Link>
      </div>
    </header>
  )
}
