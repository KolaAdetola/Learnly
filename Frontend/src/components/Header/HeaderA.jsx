import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const HeaderA = () => {
  return (
    <div className="bg-white flex items-center justify-between whitespace-nowrap border-b  w-full h-14 px-10 py-3">
      <div className="flex items-center gap-4 text-[#141414]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
        </div>
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Learnly</h2>
      </div>
      <nav className="flex items-center justify-between gap-4">
        <ul className="flex flex-row gap-2 [&>li>a]:text-black [&>li>a]:w-full [&>li>a]:h-8  [&>li>a]:p-2 [&>li>a]:rounded-md [&>li>a]:flex [&>li>a]:items-center [&>li>a]:justify-center [&>li>a]:text-sm [&>li>a]:font-medium ">
          <li><Link to='/login' href="/home" className="hover:bg-slate-100 ">Log in</Link></li>
          <li><Link to='/signup' href="/home" className="hover:bg-slate-100 ">Sign up</Link></li>
          <li><Link to='/logout' href="/home" className="hover:bg-slate-100 ">Log Out</Link></li>
          
        </ul>
      </nav>
    </div>
  )
}

export default HeaderA