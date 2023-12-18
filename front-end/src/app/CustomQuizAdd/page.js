"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [addQuizData, setAddQuizData] = useState({});
  const [oneQuiz, setOneQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [quizName, setQuizName] = useState();
  const router = useRouter();

  const addQuestion = () => {
    setOneQuiz({
      question: addQuizData.question,
      answers: [
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
      ],
    });
  };

  useEffect(() => {
    questions.push(oneQuiz);
  }, [oneQuiz]);

  const addQuiz = async () => {
    addQuestion();

    const { data } = await axios.post("http://localhost:8000/addQuiz", {
      quizName: quizName.quizName,
      questions: questions,
    });
    router.push("/CustomQuizMenu");
  };

  console.log(oneQuiz);
  console.log(questions);
  console.log(quizName);

  return (
    <div class="gap-[20px] flex-row bg-[#DDDFE5]  w-screen h-screen flex justify-center items-center ">
      <div className="flex flex-col  gap-[20px] bg-[#DDDFE5] border-[1px] border-solid border-black w-[600px] h-[800px] ">
        <div className="flex flex justify-center items-center text-[40px] font-bold text-white w-[100%] h-[90px] bg-[#1A8BBB]">
          Quiz Information
        </div>
        <div className=" items-center flex flex-col gap-[10px] py-[30px] px-[20px] bg-white w-[100%] h-[95%]">
          <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[120px] w-auto h-auto pb-[10px] justify-start items-center  ">
            <h1 className="text-[25px] text-[#50566B]">Quiz Name</h1>
            <input
              className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[300px] h-[50px]"
              type="text"
              onChange={(e) =>
                setQuizName((prev) => ({
                  ...prev,
                  quizName: e.target.value,
                }))
              }
              value={quizName?.quizName}
            />
          </div>
          <h1 className=" text[30px] text-[#50566B]">You're Questions:</h1>
          <div className="flex flex-col w-auto h-auto">
            {questions.map((question,index) => (
              <div className="w-auto h-auto">
                <h1 className="text-[25px] text-[#50566B]">{index}.{question?.question}?</h1>
              </div>
            ))}
          </div>
          <button
            onClick={() => addQuiz()}
            className="shadow-lg shadow-[#1A8BBB] text-white text-[16px] font-[700] rounded-[30px] w-[151px] h-[50px] bg-[#1A8BBB]"
          >
            Finish Quiz
          </button>
        </div>
      </div>
      <div className="gap-[20px] p-[20px] w-[392px] h-auto bg-white justify-center items-center flex flex-col ">
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[40px] w-[350px] h-[50px] justify-start items-center  ">
          <h1 className="text-[20px] text-[#50566B]">Question</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[5px] w-[220px] h-[30px]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, question: e.target.value }))
            }
            value={addQuizData.question}
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
            value={addQuizData.answerA}
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
            value={addQuizData.answerB}
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
            value={addQuizData.answerC}
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
            value={addQuizData.answerD}
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
          onClick={() => addQuestion()}
          className="shadow-lg shadow-[#1A8BBB] text-white text-[16px] font-[700] rounded-[30px] w-[151px] h-[50px] bg-[#1A8BBB]"
        >
          Add Question
        </button>
      </div>
    </div>
  );
}
