import express from 'express'
import router from './auth.routes.js';
import connectDB from './db.js';
import dotenv from "dotenv";

dotenv.config();
const app =express()
app.use(express.json())
app.use('/',router)
connectDB()
app.listen(process.env.PORT||5000,()=>{
    console.log('Server is running on port 5000')
});