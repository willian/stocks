import { Transition } from '@headlessui/react'
import { useSession } from 'next-auth/client'
import { useEffect, useRef, useState } from 'react'
import centsToCurrency from 'cents-to-currency'
import dollarsToCents from 'dollars-to-cents'

import fetcher from '../../utils/fetcher'
import useHoldings from '../../hooks/useHoldings'
import { ADD_HOLDING } from '../../graphql/mutations'

import Title from '../Title'
import PlusIcon from '../icons/PlusIcon'

import Form from './Form'
import Loader from '../Loader'

export default function Holdings() {
  const [session] = useSession()
  const { holdings, isLoading, mutate } = useHoldings()
  const [showForm, setShowForm] = useState(false)
  const firstLoadRef = useRef(!holdings)

  useEffect(() => {
    if (firstLoadRef.current) {
      firstLoadRef.current = !holdings
    }
  }, [holdings])

  const toggleForm = (event) => {
    if (event) event.preventDefault()
    setShowForm(!showForm)
  }

  const handleCreate = async (data) => {
    mutate([...holdings, { ...data, id: `new-${data.companyId}` }], false)

    const variables = {
      ...data,
      userId: session.user.id,
      price: dollarsToCents(data.price),
    }
    await fetcher(ADD_HOLDING, variables, session.user.id)

    toggleForm()
    mutate()
  }

  const showLoader = isLoading && firstLoadRef.current

  console.log('showLoader', showLoader)
  console.log('holdings', holdings)

  return (
    <div className="flex flex-col">
      <div className="relative flex content-center justify-center">
        <Title>My Holdings</Title>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            className="text-purple-600 focus:outline-none dark:text-purple-300"
            onClick={toggleForm}
          >
            <PlusIcon className="w-8 h-8" />
          </button>
        </div>
      </div>

      <Transition
        show={showForm}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Form onSubmit={handleCreate} />
      </Transition>

      {showLoader && <Loader big />}

      {!showLoader && holdings && (
        <div className="w-11/12 p-3 mx-auto mt-4 bg-gray-100 rounded-md shadow sm:w-8/12 sm:p-6">
          <table className="w-full table-fixed">
            <thead>
              <tr className="text-xs font-semibold text-gray-700 uppercase border-b-2 border-gray-700">
                <th className="w-4/12 p-3 sm:w-6/12 ">Company</th>
                <th className="w-3/12 p-3 sm:w-2/12">Price</th>
                <th className="w-2/12 p-3 sm:w-2/12">Shares</th>
                <th className="w-3/12 p-3 sm:w-2/12">Total</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding) => (
                <tr key={holding.id}>
                  <td className="p-2 text-gray-500 truncate border border-t-0 border-l-0 border-gray-400">
                    {holding.company.name}
                  </td>
                  <td className="p-2 text-right text-gray-500 border border-gray-400">
                    {centsToCurrency(holding.price)}
                  </td>
                  <td className="p-2 text-right text-gray-500 border border-gray-400">
                    {holding.shares}
                  </td>
                  <td className="p-2 text-right text-gray-500 border border-t-0 border-r-0 border-gray-400">
                    {centsToCurrency(holding.shares * holding.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
