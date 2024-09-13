import React from 'react'

const Login = () => {
  return (
        <div className="px-40 bg-white h-screen flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
            <h1 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Welcome back to Learnly</h1>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#141414] text-base font-medium leading-normal pb-2">Username or email</p>
                <input
                  placeholder="username@example.com"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#F0F2F5] focus:border-none h-14 placeholder:text-[#3E4D5B] p-4 text-base font-normal leading-normal"
                   
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#141414] text-base font-medium leading-normal pb-2">Password</p>
                <input
                  placeholder="Password" type="password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#F0F2F5] focus:border-none h-14 placeholder:text-[#3E4D5B] p-4 text-base font-normal leading-normal"
                   
                />
              </label>
            </div>
            <p className="text-[#3E4D5B] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">Forgot your password?</p>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#359EFF] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Log in</span>
              </button>
            </div>
            <p className="text-[#3E4D5B] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">New to Learnly?</p>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#F0F2F5] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Sign up</span>
              </button>
            </div>
            <p className="text-[#3E4D5B] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
  )
}

export default Login