import { forwardRef } from 'react'

const TextField = forwardRef(({ className = '', ...props }, ref) => {
  const roundedClass = className.search('rounded-none') > -1 ? '' : 'rounded-md'

  return (
    <input
      className={`block w-full text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${roundedClass} ${className}`}
      ref={ref}
      type="text"
      {...props}
    />
  )
})

TextField.displayName = 'TextField'

export default TextField
