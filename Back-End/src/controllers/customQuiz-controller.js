import { customQuizModel } from "../models/customQuiz-model.js";

export const addQuiz = async (req, res) => {
    const body = req.body;
    console.log(body);
  
    try {
      await customQuizModel.create({
        quizName: body.quizName,
        question: body.question,
        answers: body.answers,
        createdOn: new Date(),
      });
      const customQuizs = await customQuizModel.find();
  
      res.status(200).json({ quizs: customQuizs });
    } catch (err) {
      res.status(406).json({ message: err.message });
    }
  };
//   export const getQuiz = async (req, res) => {
//     const params = req.params
//     console.log(params);
//     try {
//       const quiz = await QuizModel.find({ category: params.category });
  
//       res.status(200).json({ quizs: quiz });
//     } catch (err) {
//       res.status(406).json({ message: err.message });
//     }
//   };