import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
const port = process. env.PORT ||3001;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI as string || "mongodb://localhost:27017/networx")
.then(()=>{console.log("mongodb successfully connected")})
.catch((err)=>{
    console.log(`error while connecting to mongodb ${err}`)
})

app.listen(port , ()=>{
    console.log("app listening to port " , port);
})
