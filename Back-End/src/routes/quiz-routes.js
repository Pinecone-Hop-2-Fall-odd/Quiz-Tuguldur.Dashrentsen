import express from "express";
import { createQuiz,getAllQuiz} from "../controllers/quiz-controller.js";

export const quizRouter = express.Router();

quizRouter.get('/allQuiz', getAllQuiz);
quizRouter.post('/createQuiz', createQuiz);