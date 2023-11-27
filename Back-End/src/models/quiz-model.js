import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: { type: String, unique: true },
  createdOn: Date,
});

export const QuizModel = mongoose.model("quiz", quizSchema);

const quiz = [
  {
    question: "dsagdsiua"
    [
        {Aanswer :"ebjerb",correct:true},
        {Banswer:"ouebvroeubr",correct:false},
        {Canswer:"iuwgfeuw",correct:false},
        {Danswer:"wouegfouh",correct:false}
    ]
  },
  {
    question: "dsagdsiua",
    Aanswer :"ebjerb",
    Banswer:"ouebvroeubr",
    Canswer:"iuwgfeuw",
    Danswer:"wouegfouh",
  },
  {
    question: "dsagdsiua",
    Aanswer :"ebjerb",
    Banswer:"ouebvroeubr",
    Canswer:"iuwgfeuw",
    Danswer:"wouegfouh",
  },
  {
    question: "dsagdsiua",
    Aanswer :"ebjerb",
    Banswer:"ouebvroeubr",
    Canswer:"iuwgfeuw",
    Danswer:"wouegfouh",
  },
];
