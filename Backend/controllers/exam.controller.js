const Exam = require("../models/exam.model");

// Create and Save a new Exam

const createExam = async (req, res) => {
  try {
    const {
      examName,
    //   examDate,
      examDuration,
      examTotalMarks,
      examPassingMarks,
      examQuestions,
    } = req.body;
    if (
      !examName ||
    //   !examDate ||
      !examDuration ||
      !examTotalMarks ||
      !examPassingMarks ||
      !examQuestions
    ) {
      return res.status(400).json({ message: "please fill all the fields" });
    }
    const now = new Date();
    now.setHours(now.getHours() + 1);
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const formattedDateTime = `${year}-${month}-${day}`;
    const exam = new Exam({
      examName,
      examDate: formattedDateTime,
      examDuration,
      examTotalMarks,
      examPassingMarks,
      examQuestions,
    });
    await exam.save();
    res.status(201).json({ message: "exam created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

const getExams = async (req, res) => {
    try {
        const exam = await Exam.findOne({ examCode: req.params.examCode });
        if (!exam) return res.status(404).json({ message: 'Exam not found' });
        res.json(exam);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createExam, getExams };
