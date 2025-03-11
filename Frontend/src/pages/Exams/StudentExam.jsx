import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGetExam from "../../hooks/useGetExams";

const StudentExam = () => {
  const { examCode } = useParams();
  const navigate = useNavigate();
  const { exam, loading, error } = useGetExam(examCode);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    console.log("Exam Code:", examCode);
    console.log("Exam Data:", exam);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleSubmit();
          clearInterval(timer);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examCode, exam]);

  if (loading) return <p>Loading exam details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!exam || !exam.examQuestions || exam.examQuestions.length === 0)
    return <p>Exam not found or has no questions.</p>;

  const totalQuestions = exam.examQuestions.length;
  const currentQuestion = exam.examQuestions[currentQuestionIndex];

  // Handle option selection
  const handleOptionChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  // Navigate through questions
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Submit exam
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">Exam Submitted! ✅</h2>
        <p className="text-gray-700">Here are your answers:</p>
        <ul className="mt-4 w-full max-w-lg text-left">
          {exam.examQuestions.map((q, index) => (
            <li key={index} className="mb-2 p-3 bg-gray-100 rounded-md">
              <p className="font-medium">
                {index + 1}. {q.question}
              </p>
              <p className="text-sm">
                Your Answer:{" "}
                <span
                  className={answers[index] ? "text-green-600" : "text-red-600"}
                >
                  {answers[index] || "Not Answered"}
                </span>
              </p>
            </li>
          ))}
        </ul>
        <button
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col h-[calc(100vh-56px)] bg-white">
      {/* Timer */}
      <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md">
        ⏳ {formatTime(timeLeft)}
      </div>

      {/* Progress Bar */}
      <div className=" bg-gray-200 rounded-full h-3 mt-4 mx-4">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{
            width: `${(Object.keys(answers).length / totalQuestions) * 100}%`,
          }}
        ></div>
      </div>
      <p className="text-center text-sm text-gray-600 mt-1">
        {Object.keys(answers).length} of {totalQuestions} questions answered
      </p>

      {/* Question Progress */}
      <h3 className="text-lg font-bold px-4 pb-2 pt-2">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </h3>

      {/* Display Question */}
      <p className="text-base font-normal pb-3 pt-1 px-4">
        {currentQuestion?.question || "No question available"}
      </p>

      {/* Answer Options */}
      <div className="flex flex-col gap-3 p-4">
        {currentQuestion?.options?.map((option, index) => (
          <label
            key={index}
            className={`flex items-center gap-4 rounded-xl border p-[15px] cursor-pointer ${
              answers[currentQuestionIndex] === option
                ? "bg-blue-100 border-blue-500"
                : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name={`question-${currentQuestionIndex}`}
              value={option}
              checked={answers[currentQuestionIndex] === option}
              onChange={() => handleOptionChange(currentQuestionIndex, option)}
            />
            <div className="flex grow flex-col">
              <p className="text-sm font-medium">{option}</p>
            </div>
          </label>
        ))}
      </div>

      {/* Navigation & Submit Buttons */}
      <div className="flex justify-between px-4 py-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded-md"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          ← Previous
        </button>
        {currentQuestionIndex === totalQuestions - 1 ? (
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit Exam
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
            onClick={handleNextQuestion}
          >
            Next →
          </button>
        )}
      </div>

      {/* Question Navigation Grid */}
      <div className="w-[40%] relative  bottom-[10%]  mx-[30%] ">
        <ul className="  right-[50%]  w-full grid grid-cols-5 gap-4 p-4">
          {exam.examQuestions.map((_, index) => (
            <div
              key={index}
              className={`size-10 border rounded-md flex justify-center items-center cursor-pointer ${
                index === currentQuestionIndex
                  ? "border-yellow-500 bg-yellow-100"
                  : answers[index]
                  ? "border-green-500 bg-green-100"
                  : "border-gray-300"
              }`}
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {index + 1}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentExam;
