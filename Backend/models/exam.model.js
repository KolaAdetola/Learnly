const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    enum: ["MCQ", "True/False", "Short Answer", "Essay", "Fill in the Blank"],
    required: true,
  },
  options: [
    {
      type: String,
    },
  ], // For MCQs
  correctAnswer: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium",
  },
  subject: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: { 
    type: Date,
    default: Date.now 
},
});

const ExamSchema = new mongoose.Schema({
  title: { 
    type: String,
     required: true ,
     unique: true,
     
     index: true,

    },
  description: { 
    type: String 
},
  questions: [QuestionSchema],
  duration: { 
    type: Number,
    required: true 
}, // in minutes
  totalMarks: { 
    type: Number,
    required: true 
},
  createdAt: { 
    type: Date,
    default: Date.now 
},
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" }, // Assuming a User model exists
});

const Exam = mongoose.model("Exam", ExamSchema);
const Question = mongoose.model("Question", QuestionSchema);

module.exports = { Exam, Question };

// const examSchema= new mongoose.Schema({
//     course:{
//         type:String,
//         required:true
//     },
//     data:{
//         type: JSON,
//         required:true
//     }
//     // name: {
//     //     type: String,
//     //     required: true,
//     // },
//     // description: {
//     //     type: String,
//     //     required: true,
//     // },
//     // course: {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     ref: "Course",
//     //     required: true,
//     // },
//     // questions: [
//     //     {
//     //         type: mongoose.Schema.Types.ObjectId,
//     //         ref: "Question",
//     //         required: true,
//     //     },
//     // ],
//     // duration: {
//     //     type: Number,
//     //     required: true,
//     // },
//     // maxMarks: {
//     //     type: Number,
//     //     required: true,
//     // },
// },{timestamps:true})

// const Exam=mongoose.model('exam',examSchema)
// module.exports=Exam
