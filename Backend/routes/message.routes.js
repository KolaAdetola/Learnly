const express=require('express')
const router=express.Router()
const {getMessages, sendMessage}=require('../controllers/message.controller')
const protectRoute=require('../middleware/protectRoute')

router.get('/:id',protectRoute,getMessages)
router.post('/send/:id',protectRoute,sendMessage)

module.exports=router