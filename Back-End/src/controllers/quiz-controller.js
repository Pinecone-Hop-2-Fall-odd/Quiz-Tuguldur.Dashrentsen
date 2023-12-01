import { QuizModel } from "../models/quiz-model.js";

export const createQuiz = async (req, res) => {
    const body = req.body;
    console.log(body);
  
    try {
      await QuizModel.create({
        question: body.question,
        answers:body.answers,
        category: body.category,
        createdOn: new Date(),
      });
      const quizs = await QuizModel.find();
  
      res.status(200).json({ quizs:quizs  });
    } catch (err) {
      res.status(406).json({ message: err.message });
    }
  };
export const getAllQuiz = async (req, res) => {
  
    try {

      const quizs = await QuizModel.find();
  
      res.status(200).json({ quizs:quizs  });
    } catch (err) {
      res.status(406).json({ message: err.message });
    }
  };