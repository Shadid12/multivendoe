import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0';

const loginButtonStyle = `
px-3 py-2 rounded-full shadow-lg text-white bg-violet-600 hover:bg-violet-700
`

const logoutButtonStyle = `
px-3 py-2 rounded-full shadow-lg text-white bg-pink-600 hover:bg-pink-700
`

const navButtonStyle = `
border-indigo-500 inline-flex items-center px-1 border-b-2 font-medium
`

const sellerProfile = `
bg-indigo-500 m-4 p-4 text-white shadow-lg rounded-lg
`

export default function Nav() {
  const userData = useUser();
  console.log('user', userData)
  return (
    <nav className="shadow">
      <div className="px-8 flex justify-between h-16">
        <Link href="/">
          <a className={navButtonStyle}> Home </a>
        </Link>
        <div className="flex items-center ml-3">
        {
          userData.user ? ( 
            <>
              <span className="mr-2">{userData.user.name}</span>
              <img src={`${userData.user.picture}`} className="mr-2 h-8 w-8 rounded-full" />
              <button className={sellerProfile}>Seller Profile</button>
              <Link href="/api/auth/logout">
                <a className={logoutButtonStyle}> Logout </a>
              </Link>
            </>
          ) : (
            <Link href='/api/auth/login'>
              <a className={loginButtonStyle}>
                Login
              </a>
            </Link>
          )
        }
        </div>
      </div>
    </nav>
  )
}