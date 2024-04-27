import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
import listingRouter from './routes/listingRoute.js';
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config()
mongoose.connect(process.env.URL)


mongoose.connect(process.env.URL).then(()=>{
    console.log('DB connected succesfully')
}).catch((err)=>{
    console.log(err)
})
const app =express()
app.use(cors());


app.use(express.json())
app.use(cookieParser())
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });




const Port=5000;

app.listen(Port,()=>{
    console.log(`server run on port ${Port}`)
})
