export default function Button({ className, ...props }) {
  return (
    <button
      className={`flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-purple-500 border border-transparent rounded-md hover:bg-purple-600 md:py-4 md:text-lg md:px-10 ${className}`}
      {...props}
    />
  )
}
