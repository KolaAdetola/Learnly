import React from "react";
import Student from "./Student";
import useGetConversations from "../../hooks/useGetConversation";

const StudentList = () => {
  const { loading, conversations } = useGetConversations(); // Destructure as an object

  console.table(conversations);
  if (loading)
    return <span className="loading loading-spinner text-accent"></span>;
  if (conversations.length === 0) return <div>No conversations</div>;

  return (
    <div className="flex flex-col overflow-auto custom-scrollbar h-[90%] pt-2">
      {conversations.map((conversation, index) => (
        <Student key={conversation.id}
        conversation={conversation} 
        lastIndex={index=== conversations.length -1}

         />
      ))}
      {loading ? <span className="loading loading-spinner loading-lg text-accent"></span> : null}
    </div>
  );
};

export default StudentList;
