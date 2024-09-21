const { Exam } = require('../models/exam.model'); // Import the Exam model

// Create a new exam (POST)
const createExam = async (req, res) => {
    const { title, description, questions, duration, totalMarks, createdBy } = req.body;
    const exams=await Exam.findOne({title})
        if(exams){
            return res.status(400).json({message:'Question already exists'})
        }

    const exam = new Exam({
        title,
        description,
        questions,
        duration,
        totalMarks,
        createdBy
    });

    try {
        const newExam = await exam.save();
        res.status(201).json(newExam);  // Success
    } catch (error) {
        res.status(400).json({ message: error.message });  // Validation error or bad request
    }
};

// Get all exams or a single exam by ID (GET)
const getExams = async (req, res) => {
    try {
        if (req.params.id) {
            // Get a single exam by ID
            const exam = await Exam.findById(req.params.id).populate('createdBy', 'name');
            if (!exam) {
                return res.status(404).json({ message: 'Exam not found' });
            }
            res.status(200).json(exam);
        } else {
            // Get all exams
            const exams = await Exam.find().populate('createdBy', 'name');
            res.status(200).json(exams);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing exam by ID (PUT)
const updateExam = async (req, res) => {
    const { title, description, questions, duration, totalMarks } = req.body;

    try {
        const updatedExam = await Exam.findByIdAndUpdate(req.params.id, {
            title,
            description,
            questions,
            duration,
            totalMarks
        }, { new: true });

        if (!updatedExam) {
            return res.status(404).json({ message: 'Exam not found' });
        }
        res.status(200).json(updatedExam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createExam, getExams, updateExam };

