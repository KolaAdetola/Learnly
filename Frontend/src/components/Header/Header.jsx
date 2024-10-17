import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logoutbutton from "../logoutbtn/Logoutbutton";

const Header = () => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null); // Reference to detect clicks outside

  // Toggle popover on avatar click
  const handleTogglePopover = () => {
    setShowPopover(!showPopover);
  };

  // Close popover if clicking outside of it
  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setShowPopover(false);
    }
  };

  // Set up event listener for outside clicks
  useEffect(() => {
    if (showPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopover]);

  return (
    <>
      <div className="bg-white flex items-center justify-between whitespace-nowrap border-b w-full h-14 px-10 py-3">
        <Link to={"/"} className="flex items-center gap-4 text-[#141414]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
            Learnly
          </h2>
        </Link>
        <nav className="flex items-center justify-between gap-4">
          <ul className="flex flex-row gap-2 [&>li>a]:text-black [&>li>a]:w-full [&>li>a]:h-8 [&>li>a]:p-2 [&>li>a]:rounded-md [&>li>a]:flex [&>li>a]:items-center [&>li>a]:justify-center [&>li>a]:text-sm [&>li>a]:font-medium">
            <li>
              <Link to={"/"} className="hover:bg-slate-100" href="/courses">
                Courses
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:bg-slate-100" href="/assignments">
                Assignments
              </Link>
            </li>
            <li>
              <Link
                to={"/exams"}
                className="hover:bg-slate-100"
                href="/assignments"
              >
                Exams
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:bg-slate-100" href="/grades">
                Grades
              </Link>
            </li>
            <li>
              <Link to={"/chat"} className="hover:bg-slate-100" href="/grades">
                Chat
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:bg-slate-100" href="/resources">
                Resources
              </Link>
            </li>
          </ul>
          <div className="size-8 hover:bg-slate-200 flex items-center justify-center rounded-md cursor-pointer">
            <RxHamburgerMenu className="text-black size-5" />
          </div>
          <div
            className="avatar cursor-pointer relative"
            onClick={handleTogglePopover} // Click to toggle popover
          >
            <div className="size-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
            {/* Popover */}
            {showPopover && (
              <div
              ref={popoverRef}
              className="flex border flex-col absolute top-14 right-0 h-[300px] bg-white w-[400px] shadow-lg shadow-gray-200 rounded-lg p-4 z-50"
            >
              {/* Profile Section */}
              <div className="w-full bg-white flex flex-row items-center gap-4 py-2">
                <div className="h-[70px] w-[70px] border rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="profile pic"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-lg text-gray-800 font-medium">Kolawole Adetola</h6>
                  <h6 className="text-md text-gray-500">
                    Student &#128900; <span>Student ID</span>
                  </h6>
                </div>
              </div>
            
              {/* Divider */}
              <div className="my-4 border-b border-gray-200"></div>
            
              {/* Menu Items */}
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link
                    to="/profile"
                    className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Logoutbutton  />
                </li>
              </ul>
            </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
