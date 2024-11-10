import React from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'

const Messages = () => {
    const { messages, loading } = useGetMessage()
    console.log(messages)
  return (
    <div className='flex flex-col gap-4'>
        {/* <div className="w-full h-14"></div> */}
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages