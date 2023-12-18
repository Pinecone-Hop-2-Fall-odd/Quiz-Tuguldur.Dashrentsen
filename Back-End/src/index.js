import express from "express";
import cors from "cors"
import { userRouter } from "./routes/user-routes.js";
import { quizRouter } from "./routes/quiz-routes.js";
import { customQuizRouter } from "./routes/customQuiz-routes.js";
import mongoose from "mongoose";
// import { userRouter } from "./routes/user-routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(quizRouter)
app.use(customQuizRouter)

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://new_user:test_password@tuguno.mzidixd.mongodb.net/')
    console.log('User Database Connected');
}

connectDb()


app.listen(8000, () => {
    console.log(`Your server running on: http://localhost:8000`)
})