import React from 'react'
import Student from './Student'

const StudentList = () => {
  return (
    <>
    <div className=' flex flex-col overflow-auto custom-scrollbar h-[90%] pt-2'>
      <Student/>
      <Student/>
      <Student/>
      <Student/>
      <Student/>
      <Student/>
      <Student/>
      <Student/>
      <Student/>
      <Student/>
      <Student/>
    </div>
    </>
  )
}

export default StudentList