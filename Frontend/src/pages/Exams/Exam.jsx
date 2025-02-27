import React, { useState } from "react";
import toast from "react-hot-toast";
import True from "../../components/True/True.jsx";

const Exam = () => {
  const [questionType, setQuestionType] = useState("Multiple Choice");
  const [questionText, setQuestionText] = useState(""); // State for question text
  const [options, setOptions] = useState({ A: "", B: "", C: "", D: "" }); // State for options in Multiple Choice
  const [savedQuestions, setSavedQuestions] = useState(0); // State for tracking saved questions
  const [nextNumber,setNextNumber]=useState(1)

  // Handles changing the question type
  const handleQuestionTypeChange = (type) => {
    setQuestionType(type);
  };

  // Handles changing multiple choice options
  const handleOptionChange = (option, value) => {
    setOptions({ ...options, [option]: value });
  };

  // Handles saving a question
  const handleSaveQuestion = () => {
    if (questionText.trim() === "") {
      toast.success("Please enter a question before saving.");
      return;
    }

    // Increment saved questions counter
    setSavedQuestions(savedQuestions + 1);
    setNextNumber(nextNumber + 1)

    // Clear the question and options
    setQuestionText("");
    setOptions({ A: "", B: "", C: "", D: "" });
  };

  return (
    <div className="layout-container flex h-screen grow flex-col bg-white">
      <div className="px-40 flex flex-1 justify-center py-1 ">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

          {/* Indicator for number of saved questions */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#141414] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Question {nextNumber}
            </p>
            <p className="text-sm text-gray-600">Saved Questions: {savedQuestions}</p>
          </div>

          {/* Question Type Selector */}
          <div className="flex px-4 py-3">
            <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#F0F2F5] p-1">
              <label
                onClick={() => handleQuestionTypeChange("Multiple Choice")}
                className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-[#3E4D5B] text-sm font-medium leading-normal"
              >
                <span className="truncate">Multiple Choice</span>
                <input
                  type="radio"
                  name="questionType"
                  className="invisible w-0"
                  checked={questionType === "Multiple Choice"}
                  value="Multiple Choice"
                  readOnly
                />
              </label>

              <label
                onClick={() => handleQuestionTypeChange("True/False")}
                className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-[#3E4D5B] text-sm font-medium leading-normal"
              >
                <span className="truncate">True/False</span>
                <input
                  type="radio"
                  name="questionType"
                  className="invisible w-0"
                  checked={questionType === "True/False"}
                  value="True/False"
                  readOnly
                />
              </label>

              <label
                onClick={() => handleQuestionTypeChange("Subjective")}
                className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-[#3E4D5B] text-sm font-medium leading-normal"
              >
                <span className="truncate">Subjective</span>
                <input
                  type="radio"
                  name="questionType"
                  className="invisible w-0"
                  checked={questionType === "Subjective"}
                  value="Subjective"
                  readOnly
                />
              </label>
            </div>
          </div>

          {/* Question Text Input */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <textarea
                placeholder="Ask your question here"
                className="form-input flex w-full min-w-0 flex-1 resize-none rounded-lg text-[#141414] focus:outline-0 focus:ring-0 border border-[#DBE1E6] bg-[#FFFFFF] focus:border-[#DBE1E6] placeholder:text-[#3E4D5B] p-[15px] text-base font-normal leading-normal"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
              ></textarea>
            </label>
          </div>

          {/* Conditional Rendering for Question Type */}
          {questionType === "True/False" && (
            <div className="px-0 py-3">
              <True />
            </div>
          )}

          {questionType === "Multiple Choice" && (
            <div className="flex flex-col gap-4 items-center justify-between px-4 py-3">
              {["A", "B", "C", "D"].map((option) => (
                <div
                  key={option}
                  className="w-full px-2 py-2 items-center border rounded-md flex flex-row gap-4"
                >
                  <div className="text-gray-800 flex items-center justify-center">
                    {option}.
                  </div>
                  <div className="flex items-center w-full">
                    <textarea
                      type="text"
                      className="bg-gray-50 w-full outline-none rounded-md h-10 px-2 py-2 resize-none overflow-auto text-gray-800"
                      value={options[option]}
                      onChange={(e) => handleOptionChange(option, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Buttons */}
          <div className="flex justify-between px-4 py-3">
            <div className="flex gap-2">
              <button className="btn bg-gray-300 text-[#141414] text-sm font-medium">
                Cancel
              </button>
              <button
                className="btn btn-primary text-[#141414] text-sm font-medium"
                onClick={handleSaveQuestion}
              >
                Save
              </button>
            </div>
            <button className="btn btn-primary text-[#141414] text-sm font-medium" onClick={handleSaveQuestion} >
              Next &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
