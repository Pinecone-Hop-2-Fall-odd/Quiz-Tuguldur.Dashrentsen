import express from "express";
import cors from "cors"
import { userRouter } from "./routes/user-routes.js";
import { quizRouter } from "./routes/quiz-routes.js";
import { customQuizRouter } from "./routes/customQuiz-routes.js";
import { categoriesRouter } from "./routes/categories-routes.js";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(quizRouter)
app.use(customQuizRouter)
app.use(categoriesRouter)

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://new_user:test_password@tuguno.mzidixd.mongodb.net/')
    console.log('All Database Connected');
}

connectDb()


app.listen(8000, () => {
    console.log(`Your server running on: http://localhost:8000`)
})