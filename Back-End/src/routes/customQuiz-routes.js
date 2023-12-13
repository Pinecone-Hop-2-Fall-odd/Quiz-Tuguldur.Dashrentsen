import express from "express";
import { addQuiz} from "../controllers/customQuiz-controller.js";

export const customQuizRouter = express.Router();

// customQuizRouter.get('/getQuiz/:category', getQuiz);
customQuizRouter.post('/addQuiz', addQuiz);