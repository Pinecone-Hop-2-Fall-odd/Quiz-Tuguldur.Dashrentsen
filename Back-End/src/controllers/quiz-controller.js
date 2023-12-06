import { QuizModel } from "../models/quiz-model.js";

export const createQuiz = async (req, res) => {
  const body = req.body;
  console.log(body);

  try {
    await QuizModel.create({
      question: body.question,
      answers: body.answers,
      category: body.category,
      createdOn: new Date(),
    });
    const quizs = await QuizModel.find();

    res.status(200).json({ quizs: quizs });
  } catch (err) {
    res.status(406).json({ message: err.message });
  }
};
export const getQuiz = async (req, res) => {
  const params = req.params
  console.log(params);
  try {
    const quiz = await QuizModel.find({ category: params.category });

    res.status(200).json({ quizs: quiz });
  } catch (err) {
    res.status(406).json({ message: err.message });
  }
};
