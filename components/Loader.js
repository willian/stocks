import ReactLoaderSpinner from 'react-loader-spinner'

export default function Loader({ big }) {
  let classNames = 'flex items-center w-24 pt-24 mx-auto'
  if (big) {
    classNames += ' w-24 pt-24'
  }
  const size = big ? 96 : 40

  const mediaQuery =
    typeof window === 'undefined' ? null : window.matchMedia('(prefers-color-scheme: light)')

  const color = mediaQuery && mediaQuery.matches ? '#A78BFA' : '#EDE9FE'

  return (
    <div className={classNames}>
      <ReactLoaderSpinner type="ThreeDots" color={color} height={size} width={size} />
    </div>
  )
}
