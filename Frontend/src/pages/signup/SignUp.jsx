import React, { useState } from 'react'
import Gender from './Gender'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  const [inputs,setInputs]=useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    member: '',

  })
  const {loading,signup}=useSignup()
  if(loading){
    return <div>Loading...</div>
  }

  const handleCheckboxChange=(member)=>{
    setInputs({...inputs,member})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(inputs);
    await signup(inputs)
  }
  return (
    <form class="px-40 bg-white flex flex-1 justify-center py-0" onSubmit={handleSubmit} >
      <div class="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
        <h1 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Welcome to Learnly</h1>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#141414] text-base font-medium leading-normal pb-2">Full Name</p>
            <input
              placeholder="First and last name"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} 
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
              value={inputs.email}
              onChange={(e)=>setInputs({...inputs,email:e.target.value})} 
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
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password:e.target.value})} 
            />
          </label>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#141414] text-base font-medium leading-normal pb-2">Confirm Password</p>
            <input
              placeholder="Confirm your password"
              type="password"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} 
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
                
            />
          </label>
        </div>
        <Gender onCheckboxChange={handleCheckboxChange} selectedMember={inputs.member} />
        <div class="flex px-4 py-3">
          <button className="btn w-[50%] btn-light bg-[#359eff] hover:bg-[#66b5ff] font-medium rounded-lg text-sm px-5 py-2.5 text-white text-base font-medium leading-normal">Sign up</button>
        </div>
      </div>
    </form>
  )
}

export default SignUp