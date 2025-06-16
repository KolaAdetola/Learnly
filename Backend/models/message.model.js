import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String
    // required: true
  },
  createdAt: {
    type: String,
    default: new Date().toISOString().slice(0, 10) + ' ' + new Date().toLocaleTimeString()
  }
});

const Message = mongoose.model('messages', messageSchema);
export default Message;
