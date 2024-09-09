const express=require('express')
const port=2500
const app=express()
const authRoute=require('./routes/auth.routes')
const messageRoute=require('./routes/message.routes')
const connectdb=require('../Backend/db/db')
const cookieParser=require('cookie-parser')
connectdb()

app.use(express.json())
app.use(cookieParser())
app.get('/',(req,res)=>{
    // root route
    res.send('<h1>hello world</h1>')
})
app.use ('/api/auth',authRoute)
app.use ('/api/messages',messageRoute)




app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`)
})