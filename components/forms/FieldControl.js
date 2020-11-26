export default function FieldControl({ children, content }) {
  return (
    <div className="flex">
      <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
        {content}
      </span>
      {children}
    </div>
  )
}
