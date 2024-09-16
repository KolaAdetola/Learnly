import React from 'react'
import Search from './Search'
import StudentList from './StudentList'

const Sidebar = () => {
  return (
    <>
      <div className="w-full h-[85vh] bg-grey-200 my-2 ">

        <Search/>
        <StudentList/>

      </div>
    </>
  )
}

export default Sidebar