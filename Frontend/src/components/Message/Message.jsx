import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const isSender = message.senderId === authUser._id 
  const notSender= isSender ? 'chat-end' : 'chat-start'
  const profilePic= isSender ? authUser.profilePicture : selectedConversation?.profilePicture
  const bubbleColor= isSender ? 'bg-[#9436ff] text-[#f4effb]' : 'bg-[#e7daf6] text-[#140821]'
  
  console.log(authUser);
  
  
  return (
    <>
      <div className={`chat ${notSender}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={profilePic} />
          </div>
        </div>
        <div className="chat-header ">
            {isSender ? 'You' : selectedConversation?.fullName}
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className={`chat-bubble text-base font-normal leading-normal ${bubbleColor} `}>{message.message}</div>
          <div className="chat-footer opacity-50">Delivered</div>
      </div> 
      {/* <div className={`chat ${notSender}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="chat-header">
          You
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className={`chat-bubble ${bubbleColor} text-base font-normal leading-normal`}>{message.message}</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}
    </>
    
     
  )
}

export default Message