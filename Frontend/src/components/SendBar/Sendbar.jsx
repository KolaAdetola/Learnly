import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const Sendbar = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line in the textarea
      handleSubmit(e);
    }
  };

  return (
    <form
      className="px-4 my-0 w-full flex items-center justify-between h-10"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex items-center gap-4 h-12">
        <textarea
          className="w-full py-2 px-3 custom-scrollbar h-10 text-[#140821] focus:outline-0 rounded-xl border-none bg-[#e7daf6] placeholder:text-[#6c2db4] resize-none text-base leading-normal"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} // 🔥 Detect Enter key
        />
        <button
          className="btn btn-primary btn-sm cursor-pointer flex items-center justify-center rounded-lg h-8 px-4 bg-[#9436ff] text-[#f4effb] text-sm font-medium disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-md text-accent"></span>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </form>
  );
};

export default Sendbar;
