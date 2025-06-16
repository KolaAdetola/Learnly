import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true }, // Array of options
  correctAnswer: { type: String, required: true }, // Must be one of the options
});

const examSchema = new mongoose.Schema({
  examName: { type: String, required: true, trim: true },
  examCode: { type: Number, unique: true },
  examDate: { type: Date, required: true, default: Date.now },
  examDuration: { type: Number, required: true },
  examTotalMarks: { type: Number, required: true },
  examPassingMarks: { type: Number, required: true },
  examQuestions: { type: [questionSchema], required: true },
});

// Pre-save middleware to generate a unique 6-digit examCode before saving
examSchema.pre("save", async function (next) {
  if (!this.examCode) {
    let code;
    let exists = true;

    while (exists) {
      code = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
      exists = await mongoose.model("Exam").exists({ examCode: code }); // Check if code already exists
    }

    this.examCode = code;
  }
  next();
});

// Define the model *after* applying the pre-save middleware
const Exam = mongoose.model("Exam", examSchema);

export default Exam;
