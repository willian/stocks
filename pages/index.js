import { useSession } from 'next-auth/client'

import Loader from '../components/Loader'
import LoginButtons from '../components/LoginButtons'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) return <Loader big />

  if (!session) return <LoginButtons />

  return (
    <div>
      <h2 className="text-sm font-semibold text-center text-gray-400 uppercase dark:text-purple-300">
        Performance
      </h2>
      <h2 className="text-sm font-semibold text-center text-gray-400 uppercase dark:text-purple-300">
        My Holdings
      </h2>
    </div>
  )
}
