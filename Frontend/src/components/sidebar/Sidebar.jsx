import React from 'react'
import Search from './Search'
import StudentList from './StudentList'

const Sidebar = () => {
  return (
    <div className="relative flex flex-start size-full min-h-screen flex-col bg-[#f4effb]">
        <div className="layout-container flex h-full grow flex-col ">
            <div className="gap-1 px-6 flex flex-1  py-5 ">
                <div className="layout-content-container flex flex-col w-80 border-r-2">
                  <Search/>
                  <StudentList/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar