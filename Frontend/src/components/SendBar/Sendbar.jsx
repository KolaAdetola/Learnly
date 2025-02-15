import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const Sendbar = () => {

  const [message, setMessage] = useState('')
  const {loading,sendMessage}=useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  
  return (
    <form
      className="px-4 my-0 w-full flex items-center justify-between h-10"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex items-center justify-between gap-4 h-12">
        <div className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg text-[#140821] focus:outline-0 focus:ring-0 border-none bg-[#e7daf6] focus:border-none h-12 placeholder:text-[#6c2db4] px-4 pr-2 text-base font-normal leading-normal items-center gap-2 py-5">
          <textarea
            name=""
            className="form-input w-full py-2 px-1 custom-scrollbar h-10 text-[#140821] focus:outline-0 focus:ring-0 border-none bg-inherit focus:border-none placeholder:text-[#6c2db4] resize-none text-base font-normal leading-normal scroll-pb-5"
            placeholder="Type a message"
            id=""
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <button
            className="btn btn-primary btn-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#9436ff] text-[#f4effb] text-sm font-medium leading-normal "
            type="button"
            onClick={handleSubmit}
          >
            {loading ? <span className="loading loading-spinner loading-md text-accent"></span> : 'Send'}
            {/* Send */}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Sendbar;
