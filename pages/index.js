import { useSession } from 'next-auth/client'

import Loader from '../components/Loader'
import LoginButtons from '../components/LoginButtons'
import Section from '../components/Section'
import Holdings from '../components/Holdings'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) return <Loader big />

  if (!session) return <LoginButtons />

  return (
    <Section>
      <Section.Main>
        <Holdings />
      </Section.Main>

      <Section.Footer>
        <h2 className="text-sm font-semibold text-center text-gray-400 uppercase dark:text-purple-300">
          Performance
        </h2>
      </Section.Footer>
    </Section>
  )
}
