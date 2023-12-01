import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: String,
  answers: [{ answer: String, isCorrect: Boolean }],
  category: String,
});

export const QuizModel = mongoose.model("quiz", quizSchema);

// const quiz = [
//   {
//     question: "dsagdsiua"[
//       ({ Aanswer: "ebjerb", isCorrect: true },
//       { Banswer: "ouebvroeubr", isCorrect: false },
//       { Canswer: "iuwgfeuw", isCorrect: false },
//       { Danswer: "wouegfouh", isCorrect: false })
//     ],
//   },
//   {
//     question: "dsagdsiua",
//     Aanswer: "ebjerb",
//     Banswer: "ouebvroeubr",
//     Canswer: "iuwgfeuw",
//     Danswer: "wouegfouh",
//   },
//   {
//     question: "dsagdsiua",
//     Aanswer: "ebjerb",
//     Banswer: "ouebvroeubr",
//     Canswer: "iuwgfeuw",
//     Danswer: "wouegfouh",
//   },
//   {
//     question: "dsagdsiua",
//     Aanswer: "ebjerb",
//     Banswer: "ouebvroeubr",
//     Canswer: "iuwgfeuw",
//     Danswer: "wouegfouh",
//   },
// ];
