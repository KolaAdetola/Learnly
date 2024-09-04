const express=require('express')
const app=express()
const { login, logout, signup } = require('../controllers/auth.controller')

const router=express.Router()

router.get('/login',login)
router.get('/logout',logout)
router.get('/signup',signup)

module.exports=router