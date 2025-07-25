import { useEffect, useState } from "react";
import axios from "axios";
import { api_url } from "../utils/constants";

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
        const response = await axios.get(`${api_url}api/exams/get-exams/${examCode}`,{
          withCredentials: true, // Include cookies for authentication
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
         // Fetch specific exam
        setExam(response.data);
      } catch (error) {
        setError("Exam not found. Please check the exam code.", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [examCode]);

  return { exam, loading, error };
};

export default useGetExam;
