import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
// memorable code use everywhere in mern stacck
// https://www.youtube.com/watch?v=SyEQLbbSTWg 
// guide
const app=express()

app.use(express.urlencoded())
app.use(express.json)
app.use(cors())

mongoose.connect('mongodb://localhost:27017/first',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log('DB connected'))

// Routes
app.get("/",(req,res)=>{
    res.send("My API")
})
app.listen(9002,()=>console.log("Be started  at port 9002"))
