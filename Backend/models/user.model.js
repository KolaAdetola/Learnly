import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  member: {
    type: String,
    enum: ['staff', 'student', 'admin']
    // required: true
  },
  profilePicture: {
    type: String,
    default: ''
  },
  createdAt: {
    type: String,
    default: new Date().toISOString().slice(0, 10) + ' ' + new Date().toLocaleTimeString()
  }
});

const User = mongoose.model('user', personSchema);
export default User;
