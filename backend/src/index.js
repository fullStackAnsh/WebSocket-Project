import express from 'express';
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDb } from './lib/db.js';
import cors from 'cors'
dotenv.config();
const app =express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
         credentials:true,
}));
const PORT = process.env.PORT || 8000;
const url=process.env.MONGO_URI;
 app.use("/api/auth",authRoutes);
 app.use("/api/message",messageRoutes);
 connectDb(url);

app.listen(PORT,()=>{
    console.log("app is listening");
   
    
});