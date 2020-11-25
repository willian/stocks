function Main({ children }) {
  return <div className="flex-1 p-2 py-4 pt-0">{children}</div>
}
function Footer({ children }) {
  return (
    <div className="p-2 py-4 bg-gray-100 border-t-2 border-gray-200 h-72 dark:bg-gray-900 dark:border-gray-700">
      {children}
    </div>
  )
}

export default function Section({ children }) {
  return <div className="flex flex-col flex-1">{children}</div>
}

Section.Main = Main
Section.Footer = Footer
