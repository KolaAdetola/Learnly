const mongoose = require("mongoose");

// Function to generate a unique 6-digit exam code
const generateUniqueExamCode = async () => {
    let code;
    let exists = true;

    while (exists) {
        code = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
        exists = await Exam.exists({ examCode: code }); // Check if code already exists
    }
    return code;
};

const examSchema = new mongoose.Schema({
    examName: {
        type: String,
        required: true,
        trim: true,
    },
    examCode: { 
        type: Number,
        unique: true // Ensures no duplicates in MongoDB
    },
    examDate: {
        type: Date,
        required: true,
        default: Date.now, // Stores current timestamp in UTC format
    },
    examDuration: {
        type: Number,
        required: true,
    },
    examTotalMarks: {
        type: Number,
        required: true,
    },
    examPassingMarks: {
        type: Number,
        required: true,
    },
    examQuestions: {
        type: Array,
        required: true,
    },
});

// Generate unique examCode before saving a new document
examSchema.pre("save", async function (next) {
    if (!this.examCode) {
        this.examCode = await generateUniqueExamCode();
    }
    next();
});

const Exam = mongoose.model("Exam", examSchema);
module.exports = Exam;
