import React from 'react'
import Message from './Message'
import Sendbar from '../SendBar/Sendbar'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected=false
  return (
    <div className='h-[89vh]'>
      {noChatSelected? <NoChatSelected /> : 
      <>
        <div className='overflow-auto px-2 py-2 h-[79vh] '>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
        </div>
        <div className="w-full h-[10vh] flex justify-center items-center">
          <Sendbar/>
        </div>
      </>
      
      }
    </div>
  )
}

export default MessageContainer
  const NoChatSelected = () => {
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
          <p className='text-3xl md:text-5xl text-black'>Welcome 👋 kolawole</p>
          <p className='text-lg md:text-xl text-black'>Select a chat to start messaging</p>
          <TiMessages className='text-3xl md:text-6xl text-center text-black' />
        </div>
      </div>
    );
  };