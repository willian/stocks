export default function Title({ as: Component = 'h1', children, className }) {
  return (
    <Component
      className={`text-sm font-semibold text-center text-gray-400 uppercase dark:text-purple-300 ${className}`}
    >
      {children}
    </Component>
  )
}
