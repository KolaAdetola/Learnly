import React, { useEffect } from 'react';
import Message from './Message';
import Sendbar from '../SendBar/Sendbar';
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from "../../context/AuthContext";
import useGetMessage from '../../hooks/useGetMessage';
import Messages from './Messages';

const MessageContainer = () => {
  
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation();
  }, [setSelectedConversation]);

  return (
    <div className='h-[89vh]'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='overflow-auto px-2 py-2 h-[79vh]'>
            <div className="w-full px-4 py-2 mb-0 bg-gray-200 rounded-md ">
              <span className='text-gray-800 text-[20px]'>To: </span>
              <span className='text-gray-800 text-[20px]'>{selectedConversation?.fullName || "User"}</span>
            </div>
              <Messages />
          </div>
          <div className="w-full h-[10vh] flex justify-center items-center">
            <Sendbar />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p className='text-3xl md:text-5xl text-black'>Welcome 👋 {authUser?.name || "User"}</p>
        <p className='text-lg md:text-xl text-black'>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center text-black' />
      </div>
    </div>
  );
};
