import { customQuizModel } from "../models/customQuiz-model.js";

export const addQuiz = async (req, res) => {
  const body = req.body;
  console.log(body);

  try {
    await customQuizModel.create({
      quizName: body.quizName,
      questions: body.questions,
      creator:body.creator,
      createdOn: new Date(),
    });
    const allQuizs = await customQuizModel.find();

    res.status(200).json({ allQuizs: allQuizs });
  } catch (err) {
    res.status(406).json({ message: err.message });
  }
};

export const getQuiz = async (req,res) => {

const quizId = req.params.id

  try{
    const oneQuiz = await customQuizModel.findOne({_id:quizId})
    console.log(oneQuiz);
    res.status(200).json({oneQuiz:oneQuiz})
  }catch (err) {
    res.status(401).json({message:err.message})
  }
}

export const getAllQuizs = async (req, res) => {
  try {
    const allQuizs = await customQuizModel.find();
    res.status(200).json({allQuizs:allQuizs})
  } catch (err) {
    res.status(407).json({ message: err.message });
  }
};
export const quizDelete = async (req,res) => {
  const quizId = req.params.id
  try{
    const deletedQuiz = await customQuizModel.findOneAndDelete({_id:quizId})
    res.status(200).json({deletedQuiz:deletedQuiz})
  }catch (err) {
    res.status(407).json({message:err.message})
  }
}
