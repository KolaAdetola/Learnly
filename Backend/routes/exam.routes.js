const express = require('express');
const app = express();
const { createExam, getExams } = require('../controllers/exam.controller');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.post('/create-exam', createExam);
router.get('/get-exams/:examcode', getExams);

module.exports = router;