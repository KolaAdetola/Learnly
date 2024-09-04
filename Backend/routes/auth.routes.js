const express=require('express')
const app=express()
const { login, logout, signup } = require('../controllers/auth.controller')

const router=express.Router()

router.post('/login',login)
router.post('/logout',logout)
router.post('/signup',signup)

module.exports=router