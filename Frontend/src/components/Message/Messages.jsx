import React from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import MessageSkeleton from '../../skeleton/MessageSkeleton'
import { useAuthContext } from '../../context/AuthContext'

const Messages = () => {
    const { messages, loading } = useGetMessage()
  return (
    <div className='flex flex-col flex-col-reverse gap-4'>
      {!loading && messages.length > 0 && messages.map((messages) => (
        <Message key={messages._id} message={messages}  />
      ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}

      {!loading && messages.length === 0 && 
      <h1 className='flex justify-center items-center w-full mt-[20%] text-slate-900 text-xl font-semibold  '>Send a message to start the Conversation </h1>}

    </div>
  )
}

export default Messages