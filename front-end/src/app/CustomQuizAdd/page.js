"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BACK_END_URL } from "@/utils/backend-url";

export default function HomePage() {
  const [addQuizData, setAddQuizData] = useState({});
  const [oneQuiz, setOneQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [quizName, setQuizName] = useState();
  const [userData, setUserData] = useState();
  const router = useRouter();

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/LogInHome");
    } else {
      const data = await axios.get(`${BACK_END_URL}/getUser`, {
        headers: { token },
      });
      setUserData(data);
      console.log("data",data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    if (Object.values(oneQuiz).length > 0) {
      setQuestions((prev) => [...prev, oneQuiz]);
    }
  }, [oneQuiz]);

  const addQuiz = async () => {
    addQuestion();

    const { data } = await axios.post(`${BACK_END_URL}/addQuiz`, {
      quizName: quizName.quizName,
      questions: questions,
      creator:userData?.data?.user?.userName
    });
    router.push("/CustomQuizMenu");
  };

  console.log("one quiz", oneQuiz);
  console.log("questions", questions);
  console.log("correct answer",addQuizData.correctAnswer)
  console.log("addQuizData",addQuizData)
  // console.log("quizname", quizName);

  return (
    <div class="relative gap-[0.8928571428571429vw] flex-row bg-[#DDDFE5]  w-screen h-screen flex justify-center items-center ">
      <div className="flex flex-col  gap-[1.7050298380221653vh] bg-[#DDDFE5] w-[26.785714285714285vw] h-[68.20119352088662vh] ">
        <div className="flex flex justify-center items-center text-[1.7857142857142858vw] font-bold text-white w-[100%] h-[7.672634271099744vh] bg-[#1A8BBB]">
          Quiz Information
        </div>
        <div className=" items-center flex flex-col gap-[0.8525149190110827vh] py-[2.557544757033248vh] px-[0.8928571428571429vw] bg-white w-[100%] h-[95%]">
          <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[5.357142857142857vw] w-auto h-auto pb-[0.8525149190110827vh] justify-start items-center  ">
            <h1 className="text-[1.1160714285714286vw] text-[#50566B]">Quiz Name</h1>
            <input
              className="border-[1px] border-solid border-[#50566B] rounded-[1.1160714285714286vw] w-[13.392857142857142vw] h-[4.262574595055414vh]"
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
          <h1 className=" text[1.3392857142857142vw] text-[#50566B]">You're Questions:</h1>
          <div className="flex flex-col w-auto h-auto">
            {questions?.map((question, index) => (
              <div className="w-auto h-auto">
                <h1 className="text-[1.1160714285714286vw] text-[#50566B]">
                  {index}.{question?.question}?
                </h1>
              </div>
            ))}
          </div>
          <button
            onClick={() => addQuiz()}
            className="font-[700] active:bg-sky-900 shadow-lg shadow-[#1A8BBB] text-white text-[0.7142857142857143vw] rounded-[1.3392857142857142vw] w-[6.741071428571429vw] h-[4.262574595055414vh] bg-[#1A8BBB]"
          >
            Finish Quiz
          </button>
        </div>
      </div>
      <div className="gap-[1.7050298380221653vh] p-[20px] w-[17.5vw] h-auto bg-white justify-center items-center flex flex-col ">
        <div className=" border-b-[0.08525149190110827vh] border-solid border-[#50566B] flex flex-row gap-[1.7857142857142858vw] w-[15.625vw] h-[4.262574595055414vh] justify-start items-center  ">
          <h1 className="text-[0.8928571428571429vw] text-[#50566B]">Question</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[0.22321428571428573vw] w-[9.821428571428571vw] h-[2.557544757033248vh]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, question: e.target.value }))
            }
            value={addQuizData.question}
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[1.7857142857142858vw] w-[15.625vw] h-[4.262574595055414vh] justify-start items-center  ">
          <h1 className="text-[0.8928571428571429vw] text-[#50566B]">Answer A</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[0.22321428571428573vw] w-[9.821428571428571vw] h-[2.557544757033248vh]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, answerA: e.target.value }))
            }
            value={addQuizData.answerA}
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[1.7857142857142858vw] w-[15.625vw] h-[4.262574595055414vh] justify-start items-center  ">
          <h1 className="text-[0.8928571428571429vw] text-[#50566B]">Answer B</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[0.22321428571428573vw] w-[9.821428571428571vw] h-[2.557544757033248vh]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, answerB: e.target.value }))
            }
            value={addQuizData.answerB}
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[1.7857142857142858vw] w-[15.625vw] h-[4.262574595055414vh] justify-start items-center  ">
          <h1 className="text-[0.8928571428571429vw] text-[#50566B]">Answer C</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[0.22321428571428573vw] w-[9.821428571428571vw] h-[2.557544757033248vh]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, answerC: e.target.value }))
            }
            value={addQuizData.answerC}
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[1.7857142857142858vw] w-[15.625vw] h-[4.262574595055414vh] justify-start items-center  ">
          <h1 className="text-[0.8928571428571429vw] text-[#50566B]">Answer D</h1>
          <input
            className="border-[1px] border-solid border-[#50566B] rounded-[0.22321428571428573vw] w-[9.821428571428571vw] h-[2.557544757033248vh]"
            type="text"
            onChange={(e) =>
              setAddQuizData((prev) => ({ ...prev, answerD: e.target.value }))
            }
            value={addQuizData.answerD}
          />
        </div>
        <div className=" border-b-[1px] border-solid border-[#50566B] flex flex-row gap-[1.7857142857142858vw] w-[15.625vw] h-[4.262574595055414vh] justify-start items-center  ">
          <h1 className="text-[0.8928571428571429vw] text-[#50566B]">Correct Answer</h1>
          <label className="border-[1px] border-solid border-[#50566B] rounded-[0.22321428571428573vw] w-[9.821428571428571vw] h-[2.557544757033248vh]">
            <select
              id="answers"
              onChange={(e) =>
                setAddQuizData((prev) => ({
                  ...prev,
                  correctAnswer: e.target.value,
                }))
              }
              className="w-[100%] h-[100%]"
            >
              <option></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </label>
        </div>
        <button
          onClick={() => addQuestion()}
          className="active:bg-sky-900 shadow-lg shadow-[#1A8BBB] text-white text-[0.7142857142857143vw] font-[700] rounded-[1.3392857142857142vw] w-[6.741071428571429vw] h-[4.262574595055414vh] bg-[#1A8BBB]"
        >
          Add Question
        </button>
      </div>
      <button onClick={() => router.push("/CustomQuizMenu")} className="active:bg-sky-900 absolute bottom-[3.4100596760443307vh] right-[1.3392857142857142vw] bg-[#1A8BBB] h-[6.820119352088661vh] w-[6.696428571428571vw] rounded-[1.1160714285714286vw] text-[1.1160714285714286vw] text-white ">Cancel</button>
    </div>
  );
}
