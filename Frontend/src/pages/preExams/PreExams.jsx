import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useGetExam from "../../hooks/useGetExams";
import toast from "react-hot-toast";
import UseExamStore from "../../zustand/examStore";

const PreExams = () => {
  const { authUser } = useAuthContext();
  const {updateExamCode} = UseExamStore()
  const [examCode, setExamCode] = useState("");
  const [fetchCode, setFetchCode] = useState(null); // Stores the code when submitted
  const navigate = useNavigate();
  const { exam, loading, error } = useGetExam(fetchCode); // Fetch only when submit happens

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!examCode.trim()) {
      toast.error("Please enter a valid Exam Code");
      return;
    }

    setFetchCode(examCode); // Trigger API call
  };

  // Redirect when exam is successfully fetched
  if (exam) {
    updateExamCode(examCode)
    navigate(`/exam/${examCode}`);
  }

  return (
    <div className="h-[calc(100vh-56px)] bg-white overflow-y-hidden max-h-screen border-red-600">
      <form onSubmit={handleSubmit}>
        <div className="layout-container flex  grow flex-col bg-white pb-8">
          <div className="flex flex-row justify-center gap-4 items-center px-5 py-8">
            {/* <div className="w-[50%]  p-5 border-2 gap-3 border-[#9436ff] rounded-2xl "></div> */}
            <div className="w-[50%]  p-5 border-2 border-[#9436ff] rounded-2xl ">
              <div className="flex items-center justify-between flex-col gap-4 py-1">
                <h2 className="text-[20px] font-bold text-gray-800 text-start py-1">
                  Enter Exam Code:
                </h2>
                <input
                  className="w-1/2 p-3 rounded-lg bg-slate-100 placeholder:text-gray-800"
                  type="text"
                  placeholder="Enter Exam Code"
                  value={examCode}
                  onChange={(e) => setExamCode(e.target.value)}
                  required
                />
              </div>
              <h2 className="text-[25px] font-bold text-gray-800 py-5">
                Instructions
              </h2>
              <ul className="text-[16px] font-normal text-gray-800">
                <li>
                  Write your full name: <strong>{authUser?.fullName}</strong>
                </li>
                <li>Read questions carefully before answering.</li>
                <li>You have a limited time to complete the exam.</li>
                <li>Do not use calculators or external help.</li>
                <li>
                  The exam will enter{" "}
                  <span className="font-bold text-purple-500">
                    LOCKDOWN MODE
                  </span>
                  .
                </li>
              </ul>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-md bg-[#9436ff] text-white text-xl ml-[75%] mr-[1.5%]"
          >
            {loading ? (
              <span className="loading loading-spinner loading-md text-accent"></span>
            ) : (
              "Start Exam"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreExams;
