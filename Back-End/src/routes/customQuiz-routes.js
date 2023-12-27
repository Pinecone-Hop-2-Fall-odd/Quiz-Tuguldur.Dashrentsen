import express from "express";
import { addQuiz,getAllQuizs,getQuiz,quizDelete} from "../controllers/customQuiz-controller.js";

export const customQuizRouter = express.Router();

// customQuizRouter.get('/getQuiz/:category', getQuiz);
customQuizRouter.post('/addQuiz', addQuiz);
customQuizRouter.get('/getAllQuiz', getAllQuizs);
customQuizRouter.get('/getCustomQuiz/:id', getQuiz);
customQuizRouter.get('/quizDelete/:id', quizDelete);