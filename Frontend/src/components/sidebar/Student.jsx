import React from 'react'

const Student = ({ conversation, lastIndex }) => {
  return (
    <>
    <div className="flex gap-2 items-center p-2 py-1 cursor-pointer hover:bg-purple-300 rounded">
      <div className="avatar online">
        <div className="w-[50px] rounded-full">
          <img src={conversation.profilePicture} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-1 justify-between flex-col">
          <p className='whitespace-nowrap font-bold text-md text-gray-700'>{conversation.fullName}</p>
          <p className='whitespace-nowrap text-xs text-gray-400'>Last message</p>
        </div>
      </div>
    </div>
    {!lastIndex && <div className="divider w-full "></div>  }
    {/* <div className="divider w-full "></div> */}


    </>
  )
}

export default Student