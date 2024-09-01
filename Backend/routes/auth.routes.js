const express=require('express')
const app=express()

const router=express.Router()

router.get('/login',(req,res)=>{
    res.send('Login route')
})
router.get('/logout',(req,res)=>{
    res.send('Logout route')
})
router.get('/signup',(req,res)=>{
    res.send('signup route')
})

module.exports=router