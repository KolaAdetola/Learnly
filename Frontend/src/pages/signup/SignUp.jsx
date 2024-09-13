import React from 'react'

const SignUp = () => {
  return (
    <div class="px-40 bg-white flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141414] text-base font-medium leading-normal pb-2">Full Name</p>
                <input
                  placeholder="First and last name"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
                  //  
                  type='text'
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141414] text-base font-medium leading-normal pb-2">Username</p>
                <input
                  placeholder="Choose a username"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141414] text-base font-medium leading-normal pb-2">Password</p>
                <input
                  placeholder="Create a password"
                  type="password"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
                   
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141414] text-base font-medium leading-normal pb-2">Confirm Password</p>
                <input
                  placeholder="Confirm your password"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
                   
                />
              </label>
            </div>
            <div class="flex flex-col max-w-[480px] gap-3 p-4">
              <label class="flex items-center gap-4 rounded-xl border border-solid border-[#e0e0e0] p-[15px]">
                <input
                  type="radio"
                  class="h-5 w-5 border-2 border-[#e0e0e0] bg-transparent text-transparent  checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 "
                  name="152a452d-3b40-408b-a5a7-5ebf7dcae386"
                />
                <div class="flex grow flex-col"><p class="text-[#141414] text-sm font-medium leading-normal">Male</p></div>
              </label>
              <label class="flex items-center gap-4 rounded-xl border border-solid border-[#e0e0e0] p-[15px]">
                <input
                  type="radio"
                  class="h-5 w-5 border-2 border-[#e0e0e0] bg-transparent text-transparent checked:border-[#141414] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#141414]"
                  name="152a452d-3b40-408b-a5a7-5ebf7dcae386"
                />
                <div class="flex grow flex-col"><p class="text-[#141414] text-sm font-medium leading-normal">Female</p></div>
              </label>
              <label class="flex items-center gap-4 rounded-xl border border-solid border-[#e0e0e0] p-[15px]">
                <input
                  type="radio"
                  class="h-5 w-5 border-2 border-[#e0e0e0] bg-transparent text-transparent checked:border-[#141414] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#141414]"
                  name="152a452d-3b40-408b-a5a7-5ebf7dcae386"
                />
                <div class="flex grow flex-col"><p class="text-[#141414] text-sm font-medium leading-normal">Custom</p></div>
              </label>
            </div>
            <div class="flex px-4 py-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-white text-[#141414] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Sign Up</span>
              </button>
            </div>
          </div>
        </div>
  )
}

export default SignUp