import Exam from "../models/exam.model.js";

// Create and Save a new Exam
const createExam = async (req, res) => {
  try {
    const {
      examName,
      examDuration,
      examTotalMarks,
      examPassingMarks,
      examQuestions,
    } = req.body;

    // Check if exam already exists with the same name (case insensitive)
    const examKey = await Exam.findOne({ examName: new RegExp('^' + examName + '$', 'i') });
    if (examKey) {
      return res.status(400).json({ message: "Exam with this name already exists." });
    }

    // Validate input fields
    if (
      !examName ||
      !examDuration ||
      !examTotalMarks ||
      !examPassingMarks ||
      !examQuestions || !Array.isArray(examQuestions) || examQuestions.length === 0
    ) {
      return res.status(400).json({ message: "Please fill all the fields and provide at least one question." });
    }

    // Create exam date
    const now = new Date();
    now.setHours(now.getHours() + 1);
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const formattedDateTime = `${year}-${month}-${day}`;

    // Create a new exam instance
    const exam = new Exam({
      examName,
      examDate: formattedDateTime,
      examDuration,
      examTotalMarks,
      examPassingMarks,
      examQuestions,
    });

    // Save the exam to the database
    await exam.save();

    res.status(201).json({
      message: "Exam created successfully",
      examCode: exam.examCode,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get Exam by Exam Code
const getExams = async (req, res) => {
  try {
    const exam = await Exam.findOne({ examCode: req.params.examcode });
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    console.log('Exam found:', exam.examName);
    res.json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log('Error fetching exam:', error.message);
    
  }
}

// Update Exam Questions
const updateExam = async (req, res) => {
  try {
    const { examCode } = req.params.examcode;
    const { newQuestions } = req.body;

    console.log('Exam Code:', examCode);
    console.log('New Questions:', newQuestions);

    if (!Array.isArray(newQuestions) || newQuestions.length === 0) {
      return res.status(400).json({ message: "Invalid questions format. Provide an array of questions with options and correctAnswer." });
    }

    for (let question of newQuestions) {
      if (
        !question.question ||
        !Array.isArray(question.options) ||
        question.options.length < 2 ||
        !question.correctAnswer
      ) {
        return res.status(400).json({ message: "Each question must have a question text, at least two options, and a correct answer." });
      }

      if (!question.options.includes(question.correctAnswer)) {
        return res.status(400).json({ message: `Correct answer '${question.correctAnswer}' must be one of the provided options.` });
      }
    }

    const exam = await Exam.findOne({ examCode: examCode });
    if (!exam) {
      console.log('Exam not found');
      return res.status(404).json({ message: "Exam not found" });
    }

    exam.examQuestions.push(...newQuestions);

    await exam.save();

    res.json({ message: "Questions added successfully", examQuestions: exam.examQuestions });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

export { createExam, getExams, updateExam };
