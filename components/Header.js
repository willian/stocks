import Link from 'next/link'
import { useSession } from 'next-auth/client'

import AvatarImage from './AvatarImage'

export default function Header() {
  const [session, loading] = useSession()

  return (
    <header className="box-border fixed z-10 flex items-end w-full shadow-sm bg-gradient-to-r from-purple-900 to-purple-600 h-11">
      <div className="relative flex justify-center flex-1 pt-3 mx-4" style={{ paddingBottom: 14 }}>
        <Link href="/">
          <a className="text-lg font-semibold leading-none text-white">Stocks</a>
        </Link>

        {!loading && session && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <AvatarImage src={session.user.image} alt={session.user.name || session.user.email} />
          </div>
        )}
      </div>
    </header>
  )
}
