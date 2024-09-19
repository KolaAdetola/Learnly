import React from 'react'
import Class from '../../components/Class/Class'

const Home = () => {
  return (
    <div className="relative flex size-full  flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5 flex-col">
          <h1 className="text-[#111517] tracking-light text-[32px] font-bold leading-tight min-w-72">Welcome to Learnly</h1>
          <p className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em]  pb-3 pt-5">Your Courses</p>
        </div>
        <Class/>
        <div className="px-40 flex flex-1 justify-center py-5 flex-col">
          <p className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em]  pb-3 pt-5">Upcoming classes</p>
        </div>
        {/* <Class/> */}
        <div className="px-40 flex flex-1 justify-center py-5 flex-col">
          <p className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em]  pb-3 pt-5">Annoucement</p>
        </div>
        {/* <Class/> */}
        
      </div>
    </div>
  )
}

export default Home