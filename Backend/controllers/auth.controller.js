const User=require('../models/user.model')
const bcrypt=require('bcryptjs')
const generateToken = require('../utils/generateToken')
const signup=async(req,res)=>{
    try {
        const {fullName,username,password,confirmPassword,gender } =req.body
        if(!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:'please fill all the fields'})
        }
        if(password !== confirmPassword){
            return res.status(400).json({message:'password does not match'})
        }
        const user=await User.findOne({username})
        if(user){
            return res.status(400).json({message:'user already exists'})
        }
        if(!['male','female','other'].includes(gender)){
            return res.status(400).json({message:'invalid gender'})
        }
        if(password.length<6){
            return res.status(400).json({message:'password must be at least 6 characters'})
        }
        if(username.length<6){
            return res.status(400).json({message:'username must be at least 6 characters'})
        }
        if(fullName.length<6){
            return res.status(400).json({message:'full name must be at least 6 characters'})
        }
        if(fullName.length>20){
            return res.status(400).json({message:'full name must be less than 20 characters'})
        }
        if(username.length>20){
            return res.status(400).json({message:'username must be less than 20 characters'})
        }

        //hash password
        //10 is the number of rounds to hash the password
        const salt=await bcrypt.genSalt(6)
        const hashedPassword=await bcrypt.hash(password,6)

        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser=new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePicture:gender==='male'? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            
            
            await newUser.save()
            console.log(newUser.profilePicture)
            
            // Generate JWT token here
            
            generateToken(newUser._id,res)

            res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            gender:newUser.gender,
            profilePicture:newUser.profilePicture
        })
        // console.log(profilePicture)
        } else {
            res.status(400).json({message:'invalid user data'})
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:'internal server error'})
    }
}
const login=async(req,res)=>{
    try {
       const {username,password}=req.body
       const user=await User.findOne({username})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:'internal server error'})
    }
}
const logout=async(req,res)=>{
    console.log('logout route')
    res.send('logout route')
}

module.exports={signup,login,logout}