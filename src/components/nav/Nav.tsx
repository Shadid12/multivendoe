import Link from "next/link";

const loginButtonStyle = `
px-3 py-2 rounded-full shadow-lg text-white bg-violet-600 hover:bg-violet-700
`

const navButtonStyle = `
border-indigo-500 inline-flex items-center px-1 border-b-2 font-medium
`

export default function Nav() {
  return (
    <nav className="shadow">
      <div className="px-8 flex justify-between h-16">
        <Link href="/">
          <a className={navButtonStyle}> Home </a>
        </Link>
        <div className="flex items-center ml-3">
          <button className={loginButtonStyle}>
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}