import mongoose from "mongoose";

const customQuizSchema = new mongoose.Schema({
  quizName: String,
  question: String,
  answers: [{ answer: String, isCorrect: Boolean }],
});

export const customQuizModel = mongoose.model("customQuiz", customQuizSchema);
