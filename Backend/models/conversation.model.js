const mongoose = require('mongoose');

const conversationSchema= new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        },
    ],
    createdAt: {
        type: String,
        default: new Date().toISOString().slice(0, 10) + ' ' + new Date().toLocaleTimeString(),
    },
})

const Conversation=mongoose.model('conversation',conversationSchema)
module.exports=Conversation