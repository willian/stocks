import { signIn } from 'next-auth/client'

import Button from './Button'

function GitHub(props) {
  return (
    <svg
      className={`fill-current ${props.className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.58 31.77"
    >
      <path d="M16.29,0C7.29,0,0,7.29,0,16.29c0,7.2,4.67,13.3,11.14,15.46c0.81,0.15,1.11-0.35,1.11-0.79 c0-0.39-0.01-1.41-0.02-2.77c-4.53,0.98-5.49-2.18-5.49-2.18C6,24.13,4.93,23.62,4.93,23.62c-1.48-1.01,0.11-0.99,0.11-0.99 c1.63,0.12,2.5,1.68,2.5,1.68c1.45,2.49,3.81,1.77,4.74,1.35c0.15-1.05,0.57-1.77,1.03-2.18C9.7,23.08,5.9,21.68,5.9,15.44 c0-1.78,0.63-3.23,1.68-4.37C7.41,10.65,6.85,9,7.73,6.76c0,0,1.37-0.44,4.48,1.67c1.3-0.36,2.69-0.54,4.08-0.55 c1.38,0.01,2.78,0.19,4.08,0.55c3.11-2.11,4.48-1.67,4.48-1.67c0.89,2.24,0.33,3.9,0.16,4.31c1.04,1.14,1.67,2.59,1.67,4.37 c0,6.26-3.81,7.63-7.44,8.04c0.58,0.5,1.11,1.5,1.11,3.02c0,2.18-0.02,3.93-0.02,4.47c0,0.44,0.29,0.94,1.12,0.78 c6.47-2.16,11.13-8.26,11.13-15.45C32.58,7.29,25.29,0,16.29,0z" />
    </svg>
  )
}

function Google(props) {
  return (
    <svg
      className={`fill-current ${props.className}`}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Google icon</title>
      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
    </svg>
  )
}

export default function LoginButtons() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">Sign in</h1>

      <Button className="mt-8 " onClick={() => signIn('github')}>
        Sign in with Git Hub <GitHub className="w-6 h-6 ml-2" />
      </Button>

      <Button className="mt-4" onClick={() => signIn('google')}>
        Sign in with Google <Google className="w-6 h-6 ml-2" />
      </Button>
    </div>
  )
}
