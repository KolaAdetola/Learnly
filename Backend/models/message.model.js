const mongoose = require('mongoose');

const messageSchema= new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    text:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

const message=mongoose.model('messages',personSchema)
module.exports=message