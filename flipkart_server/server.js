import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './router/route.js'

dotenv.config()
const app = express()
const PORT = 5000
const MONGO_DB_URI = process.env.MONGO_DB_URI


//creating mongoose connection for database
mongoose.connect(MONGO_DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//validating mongoose connection
mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error",(err)=>{ 
    console.log("error",err)
})




app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use('/', router)



app.listen(process.env.PORT || PORT, () => console.log('whola! server started'))