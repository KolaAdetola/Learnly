const mongoose=require('mongoose')

const personSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female','other']
    },
    profilePicture:{
        type:String,
        default:''
    }
})

const User=mongoose.model('user',personSchema)
module.exports=User