import express from "express";
import { addQuiz,getAllQuizs} from "../controllers/customQuiz-controller.js";

export const customQuizRouter = express.Router();

// customQuizRouter.get('/getQuiz/:category', getQuiz);
customQuizRouter.post('/addQuiz', addQuiz);
customQuizRouter.get('/getAllQuiz', getAllQuizs);