import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const isSender = message.senderId === authUser._id 
  const formattedTime=extractTime(message.createdAt)
  const notSender= isSender ? 'chat-end' : 'chat-start'
  const profilePic= isSender ? authUser.profilePicture : selectedConversation?.profilePicture
  const bubbleColor= isSender ? 'bg-[#9436ff] text-[#f4effb]' : 'bg-[#e7daf6] text-[#140821]'
  
  
  
  
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
            {/* {isSender ? 'You' : selectedConversation?.fullName} */}
          </div>
          <div className={`chat-bubble text-base font-normal leading-normal shake ${bubbleColor} `}>{message.message}</div>
          <div className="chat-footer opacity-50  ">{formattedTime}</div>
      </div> 
      
    </>
    
     
  )
}

export default Message