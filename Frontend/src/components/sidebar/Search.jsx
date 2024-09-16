import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {
  return (
    <>
    <div className="w-full h-12 rounded-md bg-[#e7daf6] flex  items-center justify-center border-r-2">
        <div class="text-[#6c2db4] flex border-none bg-[#e7daf6] items-center justify-center pl-4 rounded-l-lg border-r-0" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
        </div>
        <input type="text" placeholder="Search for students" className="text-[#140821] overflow-hidden w-full h-12 bg-transparent placeholder:text-[#6c2db4] px-4 rounded-l-none border-l-0  text-base font-normal leading-normal  pl-2 outline-none rounded-md  flex items-center justify-center"></input>
    </div>
    </>
  )
}

export default Search