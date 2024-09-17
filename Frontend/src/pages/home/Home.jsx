import React from 'react'

const Home = () => {
  return (
    <div className="relative flex size-full  flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5 flex-col">
          <h1 className="text-[#111517] tracking-light text-[32px] font-bold leading-tight min-w-72">Welcome to Learnly</h1>
          <p className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em]  pb-3 pt-5">Your Courses</p>
        </div>
        <div className="flex items-center gap-4 flex-col  px-40 justify-between">
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
        </div>
        <div className="px-40 flex flex-1 justify-center py-5 flex-col">
          <p className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em]  pb-3 pt-5">Upcoming classes</p>
        </div>
        <div className="flex items-center gap-4 flex-col  px-40 justify-between">
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
        </div>
        <div className="px-40 flex flex-1 justify-center py-5 flex-col">
          <p className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em]  pb-3 pt-5">Annoucement</p>
        </div>
        <div className="flex items-center gap-4 flex-col  px-40 justify-between">
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
          <div className="w-full h-12 bg-blue-400 py-3"></div>
        </div>
        
      </div>
    </div>
  )
}

export default Home