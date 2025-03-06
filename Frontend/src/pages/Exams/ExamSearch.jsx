import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExamSearch = () => {
  const [examCode, setExamCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (examCode.trim() !== "") {
      navigate(`/exam/${examCode}`); // Redirect to the exam page
    }
  };

  return (
    <div>
      <h2>Enter Exam Code</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Exam Code"
          value={examCode}
          onChange={(e) => setExamCode(e.target.value)}
          required
        />
        <button type="submit">Start Exam</button>
      </form>
    </div>
  );
};

export default ExamSearch;
