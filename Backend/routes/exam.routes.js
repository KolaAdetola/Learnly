const express = require('express');
const app = express();
const { createExam, getExams, updateExam } = require('../controllers/exam.controller');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.post('/create-exam', createExam);
router.get('/get-exams/:examcode', getExams);
router.put('/update-exam/:examcode', updateExam);

module.exports = router;