import axios from "axios";

const createExam = async () => {
    try {
        const response = await axios.post(
            "http://localhost:2500/api/exams",
            {
                title: "Math Test",
                subject: "Mathematics",
                subjectCode: "MATH101",
                timeLimit: 60, // 60 minutes
                questions: [
                    {
                        questionText: "What is 2 + 2?",
                        options: ["1", "2", "3", "4"],
                        correctAnswer: "4"
                    }
                ]
            },
            { withCredentials: true } // Ensure cookies are sent
        );

        console.log("Exam created:", response.data);
    } catch (error) {
        console.error("Error creating exam:", error.response?.data || error.message);
    }
};
