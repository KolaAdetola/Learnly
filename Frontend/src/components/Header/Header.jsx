import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiChat2 } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="bg-white flex items-center justify-between whitespace-nowrap border-b  w-full h-14 px-10 py-3">
      <Link to={'/'}
        className="flex items-center gap-4 text-[#141414]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
        </div>
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Learnly</h2>
      </Link>
      <nav className="flex items-center justify-between gap-4">
        <ul className="flex flex-row gap-2 [&>li>a]:text-black [&>li>a]:w-full [&>li>a]:h-8  [&>li>a]:p-2 [&>li>a]:rounded-md [&>li>a]:flex [&>li>a]:items-center [&>li>a]:justify-center [&>li>a]:text-sm [&>li>a]:font-medium ">
          <li><Link to={'/'} className='hover:bg-slate-100 ' href="/courses">Courses</Link></li>
          <li><Link to={'/'} className='hover:bg-slate-100 ' href="/assignments">Assignments</Link></li>
          <li><Link to={'/exams'} className='hover:bg-slate-100 ' href="/assignments">Exams</Link></li>
          <li><Link to={'/'} className='hover:bg-slate-100 ' href="/grades">Grades</Link></li>
          <li><Link to={'/chat'} className='hover:bg-slate-100 ' href="/grades">Chat</Link></li>
          <li><Link to={'/'} className='hover:bg-slate-100 ' href="/resources">Resources</Link></li>
        </ul>
        <div className="size-8 hover:bg-slate-200 flex items-center justify-center rounded-md cursor-pointer">
          <RxHamburgerMenu className='text-black size-5'/>
        </div>
        <div className="avatar cursor-pointer">
          <div className="size-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Header