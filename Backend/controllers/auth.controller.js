const User=require('../models/user.model')
const bcrypt=require('bcryptjs')
const generateToken = require('../utils/generateToken')
const signup=async(req,res)=>{
    try {
        const {fullName,email,password,confirmPassword,member,createdAt } =req.body
        if(!fullName || !email || !password || !confirmPassword || !member){
            return res.status(400).json({message:'please fill all the fields'})
        }
        if(password !== confirmPassword){
            return res.status(400).json({message:'password does not match'})
        }
        const userEmail=await User.findOne({email})
        if(userEmail){
            return res.status(400).json({message:'Email already exists'})
        }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return res.status(400).json({message:'invalid email'})
        }
        if(password.length<6){
            return res.status(400).json({message:'password must be at least 6 characters'})
        }
        // if(email.length<6){
        //     return res.status(400).json({message:'username must be at least 6 characters'})
        // }
        if(fullName.length<6){
            return res.status(400).json({message:'full name must be at least 6 characters'})
        }
        if(fullName.length>20){
            return res.status(400).json({message:'full name must be less than 20 characters'})
        }
        

        //hash password
        //10 is the number of rounds to hash the password
        const salt=await bcrypt.genSalt(6)
        const hashedPassword=await bcrypt.hash(password,6)

        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${fullName}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${fullName}`
        const now = new Date();
        now.setHours(now.getHours() + 1);
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        console.log(formattedDateTime);
        const newUser=new User({
            fullName,
            email,
            password:hashedPassword,
            createdAt: formattedDateTime,
            member,
            profilePicture:member==='student'? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            
            
            await newUser.save()
            console.log(newUser.profilePicture)
            
            // Generate JWT token here
            
            generateToken(newUser._id,res)

            res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            member:newUser.member,
            profilePicture:newUser.profilePicture,
            createdAt:newUser.createdAt,
            message:'user created successfully'


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
       const {email,password}=req.body
       const user=await User.findOne({email})
    //    const isPasswordCorrect=await bcrypt.compare(password,user?.password || "")
       if(!user){
        return res.status(400).json({message:'user does not exist'})
       }
    //    if(!isPasswordCorrect){
    //     return res.status(400).json({message:'incorrect password'})
    //    }
       generateToken(user._id,res)
       res.status(200).json({
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        gender:user.gender,
        profilePicture:user.profilePicture
       })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:'internal server error'})
    }
}
const logout=async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:'Logged out successfully'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:'internal server error'})
    }
}

module.exports={signup,login,logout}