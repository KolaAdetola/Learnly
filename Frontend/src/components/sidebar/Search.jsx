import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import { motion } from "framer-motion"; // Import Framer Motion
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversation';

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredConversations, setFilteredConversations] = useState([]);
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations(search);

  useEffect(() => {
    if (search.length >= 2) {
      const filtered = conversations.filter((conversation) =>
        conversation.fullName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredConversations(filtered);
    } else {
      setFilteredConversations([]);
    }
  }, [search, conversations]);

  const handleSearch = () => {
    if (!search) return;

    const conversation = conversations.filter((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation.length > 0) {
      setSelectedConversation(conversation);
      setSearch("");
      setFilteredConversations([]);
    } else {
      toast.error("No user found with that name");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setSearch("");
    setFilteredConversations([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="rounded-md bg-[#e7daf6] flex items-center justify-center border-r-2">
        <div className="text-[#6c2db4] flex border-none bg-[#e7daf6] items-center justify-center pl-4 rounded-l-lg border-r-0">
          <HiOutlineSearch size={24} />
        </div>
        <input
          type="text"
          placeholder="Search for students"
          className="text-[#140821] overflow-hidden w-full h-12 bg-transparent placeholder:text-[#6c2db4] px-4 rounded-l-none border-l-0 text-base font-normal leading-normal pl-2 outline-none rounded-md flex items-center justify-center"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {filteredConversations.length > 0 && (
        <motion.ul 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }} 
          className="absolute bg-white border border-gray-300 w-[320px] mt-1 rounded-md shadow-xl z-[9999]"
        >
          {filteredConversations.map((conversation) => (
            <li
              key={conversation.id}
              className="p-2 hover:bg-gray-200 cursor-pointer w-full flex gap-2 items-center py-1 rounded"
              onClick={() => handleSelectConversation(conversation)}
            >
              <div className="avatar online">
                <div className="w-[50px] rounded-full">
                  <img src={conversation.profilePicture} alt={`${conversation.fullName}'s profile`} />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex gap-1 justify-between flex-col">
                  <p className="whitespace-nowrap font-bold text-md text-gray-700">
                    {conversation.fullName}
                  </p>
                  <p className="whitespace-nowrap text-xs text-gray-400">Last message</p>
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default Search;
