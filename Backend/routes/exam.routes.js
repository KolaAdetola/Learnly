const express = require('express');
const router = express.Router();
const { createExam, getExams, updateExam } = require('../controllers/exam.controller');

// Routes
router.post('/exams', createExam); // Create a new exam
router.get('/exams/:id?', getExams); // Get all exams or a single exam by ID
router.put('/exams/:id', updateExam); // Update an exam by ID

module.exports = router;