import express from "express";
import cors from "cors"
import { userRouter } from "./routes/user-routes.js";
import mongoose from "mongoose";
// import { userRouter } from "./routes/user-routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://new_user:test_password@tuguno.mzidixd.mongodb.net/')
    console.log('database connected');
}

connectDb()

app.listen(8000, () => {
    console.log(`Your server running on: http://localhost:8000`)
})