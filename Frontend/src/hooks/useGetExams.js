import { useEffect, useState } from "react";
import axios from "axios";

const useGetExam = (examCode) => {
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!examCode) return; // Prevent API call if no examCode is provided

    const fetchExam = async () => {
      setLoading(true);
      setError(null);
      setExam(null); // Reset state before fetching

      try {
        const response = await axios.get(`/api/exams/get-exams/${examCode}`);
        console.log(response.data);
         // Fetch specific exam
        setExam(response.data);
      } catch (err) {
        setError("Exam not found. Please check the exam code.");
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [examCode]);

  return { exam, loading, error };
};

export default useGetExam;
