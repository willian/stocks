import useSWR, { mutate } from 'swr'
import { useSession } from 'next-auth/client'
import fetcher from '../utils/fetcher'

import { MY_HOLDINGS } from '../graphql/queries'

export default function useHoldings() {
  const [session] = useSession()
  const { data, error } = useSWR([MY_HOLDINGS, null, session.user.id], fetcher)

  return {
    holdings: data ? data.holdings : data,
    isLoading: !error && !data,
    isError: error,
    mutate: (...args) => mutate([MY_HOLDINGS, null, session.user.id], ...args),
  }
}
