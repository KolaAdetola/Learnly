import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const Logoutbutton = () => {
  const { loading, error, logout } = useLogout();
  return (
    <li
      onClick={logout}
      className="flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded"
    >
      {!loading ? (
        <>
          <Link to="/logout" className="block text-lg text-gray-700">
            Logout
          </Link>
          <div className="">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21 12L13 12"
                  stroke="#f27171"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                  stroke="#f27171"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                  stroke="#f27171"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </>
      ) : (
        <div className="loader"></div>
      )}
    </li>
  );
};

export default Logoutbutton;
