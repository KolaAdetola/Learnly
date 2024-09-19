import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MessageContainer from "./Message/MessageContainer";

const Chat = () => {
  return (
    <>
    <div className="w-full h-[91.5vh] bg-white grid grid-cols-[320px_2px_1fr] gap-4  px-4 py-3">
      <Sidebar/>      
      <div className="w-[2px] h-[89vh] bg-gray-200 "></div>
      <MessageContainer/>
    </div>
    </>
  );
};

export default Chat;
