import { useSession } from 'next-auth/client'

import Loader from '../components/Loader'
import LoginButtons from '../components/LoginButtons'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) return <Loader big />

  if (!session) return <LoginButtons />

  return (
    <div>
      <h2 className="text-3xl text-center text-gray-700 dark:text-gray-100">Performance</h2>
      <h2 className="text-3xl text-center text-gray-700 dark:text-gray-100">My Holdings</h2>
    </div>
  )
}
