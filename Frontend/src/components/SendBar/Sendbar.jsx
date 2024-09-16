import React from 'react'

const Sendbar = () => {
  return (
    <div className='px-4 my-0 w-full flex items-center justify-between h-10' >
			<div className="w-full flex items-center justify-between gap-4 h-12">
        <input type="text" placeholder="Type a message" className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg text-[#140821] focus:outline-0 focus:ring-0 border-none bg-[#e7daf6] focus:border-none h-12 placeholder:text-[#6c2db4] px-4 pr-2 text-base font-normal leading-normal" />
        <button className="btn btn-primary btn-sm absolute left-[92%] top-[92%] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#9436ff] text-[#f4effb] text-sm font-medium leading-normal " type='submit'>Send</button>
        
      </div>
		</div>
  )
}

export default Sendbar