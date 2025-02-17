import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// const socket = io("http://localhost:2500"); 

const Sendbar = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    socket.emit("sendMessage", message); // Send message to server
    setMessage(""); // Clear input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="px-4 my-0 w-full flex items-center justify-between h-10" onSubmit={handleSubmit}>
      <div className="w-full flex items-center gap-4 h-12">
        <textarea
          className="w-full py-2 px-3 rounded-md custom-scrollbar h-10 text-[#140821] focus:outline-0 border-none bg-[#e7daf6] placeholder:text-[#6c2db4] resize-none text-base leading-normal"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-primary btn-sm cursor-pointer flex items-center justify-center rounded-lg h-8 px-4 bg-[#9436ff] text-[#f4effb] text-sm font-medium disabled:opacity-50"
          type="submit"
        >
          Send
        </button>
      </div>

      {/* Display Messages */}
      <div className="mt-4">
        {messages.map((msg, index) => (
          <p key={index} className="text-black bg-gray-100 p-2 rounded-md mb-2">{msg}</p>
        ))}
      </div>
    </form>
  );
};

export default Sendbar;
