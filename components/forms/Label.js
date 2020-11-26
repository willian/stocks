export default function Label({ htmlFor, ...props }) {
  return (
    <label
      className="block text-xs font-semibold text-gray-700 uppercase"
      htmlFor={htmlFor}
      {...props}
    />
  )
}
