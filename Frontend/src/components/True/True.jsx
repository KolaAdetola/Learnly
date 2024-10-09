import React from 'react'

const True = () => {
  return (
          
          <div className="flex bg-inherit flex-col gap-4 items-center justify-between px-4 py-3">
            <button className="w-full px-2 py-2 items-center border rounded-md flex flex-row gap-4 active:border-[#d336fb] cursor-pointer ">
              <div className="text-gray-800 size-5 flex items-center justify-center">
                A.
              </div>
              <div className="flex items-center w-full">
                <p
                  className="w-full text-start rounded-md h-10 px-2 py-2 resize-none  text-gray-800 ">True
                </p>
              </div>
            </button>
            <button className="w-full px-2 py-2 items-center border rounded-md flex flex-row gap-4 active:border-[#d336fb] cursor-pointer ">
              <div className="text-gray-800 size-5 flex items-center justify-center">
                B.
              </div>
              <div className="flex items-center w-full">
                <p
                  className="w-full text-start rounded-md h-10 px-2 py-2 resize-none  text-gray-800 ">False
                </p>
              </div>
            </button>
          </div>
  )
}

export default True