import mongoose from "mongoose";

const customQuizSchema = new mongoose.Schema({
  quizName: String,
  questions: [
    {question:String,answers: [{ answer: String, isCorrect: Boolean }]}
  ],
  creator:String

});

export const customQuizModel = mongoose.model("customQuiz", customQuizSchema);
