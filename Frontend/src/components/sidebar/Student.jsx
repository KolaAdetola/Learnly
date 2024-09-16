import React from 'react'

const Student = () => {
  return (
    <>
    <div className="flex gap-2 items-center p-2 py-1 cursor-pointer hover:bg-purple-300 rounded">
      <div className="avatar online">
        <div className="w-[50px] rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-1 justify-between flex-col">
          <p className='whitespace-nowrap font-bold text-md text-gray-700'>Kolawole Adetola</p>
          <p className='whitespace-nowrap text-xs text-gray-400'>Last message</p>
        </div>
      </div>
    </div>
    <div className="divider w-full "></div>


    </>
  )
}

export default Student