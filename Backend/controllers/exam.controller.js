const Exam = require("../models/exam.model");

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
    const exam = await Exam.findOne({ examCode: req.params.examCode });
    if (!exam) return res.status(404).json({ message: 'Exam not found' });

    res.json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update Exam Questions
const updateExam = async (req, res) => {
    try {
      const { examCode } = req.params.examcode; // Accessing examCode from the URL
      const { newQuestions } = req.body; // Expecting an array of question objects
  
      console.log('Exam Code:', examCode); // Debugging: Check if examCode is received correctly
      console.log('New Questions:', newQuestions); // Debugging: Check if newQuestions is received
  
      // Validate newQuestions format
      if (!Array.isArray(newQuestions) || newQuestions.length === 0) {
        return res.status(400).json({ message: "Invalid questions format. Provide an array of questions with options and correctAnswer." });
      }
  
      // Validate each new question
      for (let question of newQuestions) {
        if (
          !question.question ||
          !Array.isArray(question.options) ||
          question.options.length < 2 ||
          !question.correctAnswer
        ) {
          return res.status(400).json({ message: "Each question must have a question text, at least two options, and a correct answer." });
        }
  
        // Ensure correctAnswer exists in the provided options
        if (!question.options.includes(question.correctAnswer)) {
          return res.status(400).json({ message: `Correct answer '${question.correctAnswer}' must be one of the provided options.` });
        }
      }
  
      // Find the exam by examCode
      const exam = await Exam.findOne({ examCode:examCode });
      if (!exam) {
        console.log('Exam not found'); // Debugging: Ensure exam is found by examCode
        return res.status(404).json({ message: "Exam not found" });
      }
  
      // Append new questions to the existing questions array
      exam.examQuestions.push(...newQuestions);
  
      // Save updated exam
      await exam.save();
  
      res.json({ message: "Questions added successfully", examQuestions: exam.examQuestions });
    } catch (error) {
      console.log('Error:', error); // Debugging: Log any errors that occur
      res.status(500).json({ error: error.message });
    }
  }
  
  

module.exports = { createExam, getExams, updateExam };
