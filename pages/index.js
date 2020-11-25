import { signIn, signOut, useSession } from 'next-auth/client'

import Loader from '../components/Loader'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) {
    return <Loader big />
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">Hello World</h1>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </div>
  )
}
