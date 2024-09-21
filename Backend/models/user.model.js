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
    confirmPassword:{
        type:String,
        // required:true,
        minlength:6,
    },
    gender:{
        type:String,
        // required:true,
        enum:['male','female','other']
    },
    member:{
        type:String,
        // required:true,
        enum:['staff','student','admin']
    },
    profilePicture:{
        type:String,
        default:''
    },
    createdAt:{
        type:String,
        default: new Date().toISOString().slice(0,10)+' '+new Date().toLocaleTimeString()
    }
})

const User=mongoose.model('user',personSchema)
module.exports=User