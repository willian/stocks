export default function Button({ className, small, ...props }) {
  const padding = small ? 'px-8 py-3' : 'px-8 py-3 md:py-4 md:px-10'
  const textSize = small ? 'text-base' : 'text-base md:text-lg'
  return (
    <button
      className={`flex items-center justify-center w-full font-medium text-white bg-purple-500 border border-transparent rounded-md hover:bg-purple-600 focus:outline-none ${padding} ${textSize} ${className}`}
      {...props}
    />
  )
}
