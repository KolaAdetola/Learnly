import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../../skeleton/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex flex-col-reverse gap-4 overflow-y-auto ">
      {!loading && messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id} ref={index === 0 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))
      }

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <h1 className="flex justify-center items-center w-full mt-[20%] text-slate-900 text-xl font-semibold">
          Send a message to start the conversation.
        </h1>
      )}
    </div>
  );
};

export default Messages;
