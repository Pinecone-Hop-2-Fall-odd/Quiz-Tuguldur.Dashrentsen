"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [addQuizData, setAddQuizData] = useState({});
  // const [answers, setAnswers] = useState([
  //   { answer: addQuizData.answerA, isCorrect: false },
  //   { answer: addQuizData.answerB, isCorrect: false },
  //   { answer: addQuizData.answerC, isCorrect: false },
  //   { answer: addQuizData.answerD, isCorrect: false },
  // ]);

  const addQuiz = async () => {
    let answers = [
      {
        answer: addQuizData.answerA,
        isCorrect: addQuizData.correctAnswer === "A",
      },
      {
        answer: addQuizData.answerB,
        isCorrect: addQuizData.correctAnswer === "B",
      },
      {
        answer: addQuizData.answerC,
        isCorrect: addQuizData.correctAnswer === "C",
      },
      {
        answer: addQuizData.answerD,
        isCorrect: addQuizData.correctAnswer === "D",
      },
    ];

    const { data } = await axios.post("http://localhost:8000/addQuiz", {
      quizName: addQuizData.quizName,
      question: addQuizData.question,
      answers: answers,
    });
  };

  console.log(addQuizData);
  console.log(addQuiz);

  return (
    <div class="gap-[20px] flex-col bg-[#DDDFE5]  w-screen h-screen flex justify-center items-center ">
      <div className="flex flex justify-center items-center text-[40px] font-bold text-white w-[392px] h-[80px] bg-[#1A8BBB]">
        Add Quiz
      </div>
      <div className="gap-[20px] p-[20px] w-[392px] h-auto bg-white justify-center items-center flex flex-col ">
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[40px] w-[350px] h-[50px] justify-start items-center  ">
          <h1 className="text-[20px] text-[#50566B]">Quiz Name</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[220px] h-[30px]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, quizName: e.target.value }))
            }
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[40px] w-[350px] h-[50px] justify-start items-center  ">
          <h1 className="text-[20px] text-[#50566B]">Question</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[220px] h-[30px]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, question: e.target.value }))
            }
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[40px] w-[350px] h-[50px] justify-start items-center  ">
          <h1 className="text-[20px] text-[#50566B]">Answer A</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[220px] h-[30px]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, answerA: e.target.value }))
            }
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[40px] w-[350px] h-[50px] justify-start items-center  ">
          <h1 className="text-[20px] text-[#50566B]">Answer B</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[220px] h-[30px]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, asnwerB: e.target.value }))
            }
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[40px] w-[350px] h-[50px] justify-start items-center  ">
          <h1 className="text-[20px] text-[#50566B]">Answer C</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[220px] h-[30px]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, answerC: e.target.value }))
            }
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[40px] w-[350px] h-[50px] justify-start items-center  ">
          <h1 className="text-[20px] text-[#50566B]">Answer D</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[220px] h-[30px]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, answerD: e.target.value }))
            }
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[40px] w-[350px] h-[50px] justify-start items-center  ">
          <h1 className="text-[20px] text-[#50566B]">Correct Answer</h1>
          <label className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[220px] h-[30px]">
            <select
              id="answers"
              onChange={(e) =>
                setAddQuizData((prev) => ({
                  ...prev,
                  correctAnswer: e.target.value,
                }))
              }
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </label>
        </div>
        <button
          onClick={() => addQuiz()}
          className="text-white text-[16px] font-[700] rounded-[30px] w-[151px] h-[50px] bg-[#1A8BBB]"
        >
          Add Quiz
        </button>
      </div>
    </div>
  );
}
