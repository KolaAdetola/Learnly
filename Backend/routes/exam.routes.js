import express from 'express';
import { createExam, getExams, updateExam } from '../controllers/exam.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/create-exam', protectRoute, createExam);
router.get('/get-exams/:examcode', protectRoute, getExams);
router.put('/update-exam/:examcode', protectRoute, updateExam);

export default router;
