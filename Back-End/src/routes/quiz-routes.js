import express from "express";
import { createQuiz,getQuiz} from "../controllers/quiz-controller.js";

export const quizRouter = express.Router();

quizRouter.get('/getQuiz/:category', getQuiz);
quizRouter.post('/createQuiz', createQuiz);