import { useState } from 'react'
import { Transition } from '@headlessui/react'

import Title from '../Title'
import PlusIcon from '../icons/PlusIcon'

import Form from './Form'

export default function Holdings() {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = (event) => {
    event.preventDefault()
    setShowForm(!showForm)
  }

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
        <Form />
      </Transition>
    </div>
  )
}
