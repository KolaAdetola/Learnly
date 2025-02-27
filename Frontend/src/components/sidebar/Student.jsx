import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Student = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();


  // Corrected to use `_id` consistently for comparison
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} =useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  console.log(onlineUsers);

  return (
    <>
      <div
        className={`flex gap-2 items-center p-2 py-1 cursor-pointer hover:bg-purple-300 rounded ${
          isSelected ? "bg-purple-300" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-[50px] rounded-full">
            <img src={conversation.profilePicture} alt={`${conversation.fullName}'s profile`} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="hover:bg-purple-300 flex gap-1 justify-between flex-col">
            <p className="whitespace-nowrap font-bold text-md text-gray-700">
              {conversation.fullName}
            </p>
            <p className="whitespace-nowrap text-xs text-gray-400">Last message</p>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="h-[1px] w-full my-2 bg-gray-400 "></div>}
    </>
  );
};

export default Student;
