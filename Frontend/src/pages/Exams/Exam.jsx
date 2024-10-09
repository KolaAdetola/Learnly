import React, { useState } from "react";
import True from "../../components/True/True.jsx";

const Exam = () => {
  const [questionType, setQuestionType] = useState("Multiple Choice"); // State to manage selected question type

  const handleQuestionTypeChange = (type) => {
    setQuestionType(type); // Set the selected question type
  };
  return (
    <div className="layout-container flex h-screen grow flex-col bg-white">
      <div className="px-40 flex flex-1 justify-center py-5 ">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#141414] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Question 1
            </p>
          </div>
          <div className="flex  px-4 py-3">
            <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#F0F2F5] p-1">
              <label onClick={() => handleQuestionTypeChange("Multiple Choice")} className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#141414] text-[#3E4D5B] text-sm font-medium leading-normal">
                <span className="truncate">Multiple Choice</span>
                <input
                  type="radio"
                  name="66354f4c-e297-4067-8497-aead72f0af56"
                  className="invisible w-0"
                  checked={questionType === "Multiple Choice"}
                  value="True/False"
                />
              </label>
              <label
               onClick={() => handleQuestionTypeChange("True/False")} className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#141414] text-[#3E4D5B] text-sm font-medium leading-normal"
              >
                <span className="truncate">True/False</span>
                <input
                  type="radio"
                  name="66354f4c-e297-4067-8497-aead72f0af56"
                  className="invisible w-0"
                  checked={questionType === "True/False"}
                  value="True/False"
                />
              </label>
              <label onClick={() => handleQuestionTypeChange("Subjective")} className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#141414] text-[#3E4D5B] text-sm font-medium leading-normal">
                <span className="truncate">Subjective</span>
                <input
                  type="radio"
                  name="66354f4c-e297-4067-8497-aead72f0af56"
                  className="invisible w-0"
                  checked={questionType === "Subjective"}
                  value="True/False"
                />
              </label>
            </div>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 ">
            <label className="flex flex-col min-w-40 flex-1 ">
              <textarea
                type="text"
                placeholder="Ask your question here"
                className="form-input flex w-full min-w-0 flex-1 overflow-auto scroll-pb-2 resize-none rounded-lg text-[#141414] focus:outline-0 focus:ring-0 border border-[#DBE1E6] bg-[#FFFFFF] focus:border-[#DBE1E6] placeholder:text-[#3E4D5B] p-[15px] text-base font-normal leading-normal"
                value=""
              ></textarea>
            </label>
          </div>

          {questionType === "True/False" && (
            <div className="px-0 py-3">
              <True />
            </div>
          )}
          {questionType === "Multiple Choice" && (
            <div className="flex flex-col gap-4 items-center justify-between px-4 py-3">
              <div className="w-full px-2 py-2 items-center border rounded-md flex flex-row gap-4">
                <div className="text-gray-800 size-5 flex items-center justify-center">A.</div>
                <div className="flex items-center w-full">
                  <textarea
                    type="text"
                    className="bg-gray-50 scroll-pb-2 w-[100%] outline-none rounded-md h-10 px-2 py-2 resize-none overflow-auto text-gray-800"
                  />
                </div>
              </div>
              <div className="w-full px-2 py-2 items-center border rounded-md flex flex-row gap-4">
                <div className="text-gray-800 size-5 flex items-center justify-center">B.</div>
                <div className="flex items-center w-full">
                  <textarea
                    type="text"
                    className="bg-gray-50 scroll-pb-2 w-[100%] outline-none rounded-md h-10 px-2 py-2 resize-none overflow-auto text-gray-800"
                  />
                </div>
              </div>
              <div className="w-full px-2 py-2 items-center border rounded-md flex flex-row gap-4">
                <div className="text-gray-800 size-5 flex items-center justify-center">C.</div>
                <div className="flex items-center w-full">
                  <textarea
                    type="text"
                    className="bg-gray-50 scroll-pb-2 w-[100%] outline-none rounded-md h-10 px-2 py-2 resize-none overflow-auto text-gray-800"
                  />
                </div>
              </div>
              <div className="w-full px-2 py-2 items-center border rounded-md flex flex-row gap-4">
                <div className="text-gray-800 size-5 flex items-center justify-center">D.</div>
                <div className="flex items-center w-full">
                  <textarea
                    type="text"
                    className="bg-gray-50 scroll-pb-2 w-[100%] outline-none rounded-md h-10 px-2 py-2 resize-none overflow-auto text-gray-800"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="@container flex flex-wrap justify-between gap-0 px-4 py-3 ">
            <div className="gap-2 px-4 flex flex-wrap justify-start ">
              <div className="flex flex-col items-center gap-2 bg-[#FFFFFF] py-2.5 text-center w-20">
                <p className="btn btn-accent btn-sm text-[#141414] text-sm font-medium leading-normal">
                  Cancel
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#FFFFFF] py-2.5 text-center w-20">
                <button className="btn btn-primary btn-sm text-[#141414] text-sm font-medium leading-normal">
                  Save
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#FFFFFF] py-2.5 text-center w-20">
              <p className="btn btn-primary btn-sm text-[#141414] text-sm font-medium flex flex-row leading-normal">
                Next &#8594;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
