import React, { useState, useEffect } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import useGetMessage from '../../hooks/useGetMessage';
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredConversations, setFilteredConversations] = useState([]);
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetMessage(search);

  useEffect(() => {
    if (search.length >= 3) {
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
    // if (search.length < 3) {
    //   return toast.error("Search query must be at least 3 characters long");
    // }

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
      <form onSubmit={handleSubmit} className="w-full h-12 rounded-md bg-[#e7daf6] flex items-center justify-center border-r-2">
        <div className="text-[#6c2db4] flex border-none bg-[#e7daf6] items-center justify-center pl-4 rounded-l-lg border-r-0" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
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
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg z-10">
          {filteredConversations.map((conversation) => (
            <li
              key={conversation.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelectConversation(conversation)}
            >
              {conversation.fullName}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;