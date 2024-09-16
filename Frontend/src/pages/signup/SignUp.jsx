import React from 'react'

const SignUp = () => {
  return (
    <div class="px-40 bg-white flex flex-1 justify-center py-0">
          <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h1 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Welcome to Learnly</h1>
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
                <p class="text-[#141414] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Choose an email"
                  type="email"
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
                  type="password"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
                   
                />
              </label>
            </div>
            <div className="flex flex-row gap-4 px-4 ">
              <div className="form-control">
                <label className="label cursor-pointer gap-4 items-center justify-center">
                  <span className="label-text text-[#141414] text-base font-medium leading-normal pb-2">Staff</span>
                  <input type="radio" name="radio-10" className="radio  checked:bg-green-400 border-slate-400" defaultChecked />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-4 items-center justify-center">
                  <span className="label-text text-[#141414] text-base font-medium leading-normal pb-2">Student</span>
                  <input type="radio" name="radio-10" className="radio  border-2 border-slate-400 checked:bg-green-400" defaultChecked />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-4 items-center justify-center">
                  <span className="label-text text-[#141414] text-base font-medium leading-normal pb-2">Admin</span>
                  <input type="radio" name="radio-10" className="radio  checked:bg-green-400 border-slate-400" defaultChecked />
                </label>
              </div>
            </div>
            <div class="flex px-4 py-3">
              <button className="btn w-[50%]  text-white text-base font-medium leading-normal">Sign up</button>
            </div>
          </div>
        </div>
  )
}

export default SignUp