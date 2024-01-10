"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [quizdata, setQuizData] = useState();
  const [counter, setCounter] = useState(0);
  const [iscorrect, setIscorrect] = useState(null);
  const [isCorrectCounter, setIsCorrectCounter] = useState(0);
  const [userData, setUserData] = useState();
  const [answerIndex,setAnswerIndex] = useState()

  const getData = async () => {
    const token = localStorage.getItem("token");
    const quizData = await axios.get(
      `http://localhost:8000/getQuiz/${searchParams.get("category")}`
    );
    const userData = await axios.get(`http://localhost:8000/getUser`, {
      headers: { token },
    });
    setQuizData(quizData);
    setUserData(userData);
    console.log(quizData);
  };

  useEffect(() => {
    getData();
  }, []);

  function interval() {
    setIscorrect(null)
    setCounter(counter + 1);
  }

  function isCorrect(answer, index) {
    if (answer.isCorrect == true) {
      
      setIsCorrectCounter(isCorrectCounter + 1);
      setIscorrect(true)
    } else {
      setIscorrect(false)
    }
    setAnswerIndex(index);
    console.log("index",index);

    setTimeout(interval, 1000);
    console.log("answer",answer);

    console.log("counter" , counter);
    console.log("iscorrect",iscorrect);
  }

  if (quizdata?.data?.quizs.length === counter) {
    return (
      <div class="justify-center items-center  relative bg-gray-400 w-screen h-screen flex-col flex gap-[40px]">
        <div className="absolute top-[0px] w-screen h-[135px] bg-white flex items-center ">
          <h1 className="absolute left-[890px] font-bold text-[50px] text-[#50566B] font-montserrat">
            "Congratulations"
          </h1>
        </div>
        <div className="relative flex flex-col items-center pt-[40px] bg-white w-[700px] h-auto rounded-[30px]">
          <h1 className="font-bold text-[50px] text-[#50566B] flex flex-col items-center">
            {userData?.data?.user[0]?.userName}
          </h1>
          <h1 className="font-bold text-[50px] text-[#50566B]">
            You got {isCorrectCounter} out of {quizdata?.data?.quizs.length}
            right
          </h1>
          <div className="right-[100px] flex flex-row gap-[30px] absolute bottom-[100px] ">
            <button
              onClick={() => router.push("/CategoriesHome")}
              className="text-white text-[20px] bg-[#1A8BBB] w-[100px] h-[60px] rounded-[10px] "
            >
              Categories
            </button>
            <button
              onClick={() => router.push("/HomePageHome")}
              className="text-white text-[20px] bg-[#1A8BBB] w-[100px] h-[60px] rounded-[10px]"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  console.log(iscorrect)

  return (
    <div class=" relative bg-white  w-screen h-screen flex-col flex gap-[40px]">
      <div className="absolute top-[0px] w-screen h-[135px] bg-[#1A8BBB] flex flex-row justify-center  items-center ">
        <h1 className=" font-bold text-[50px] text-white font-montserrat">
          {quizdata?.data?.quizs[counter]?.question}
        </h1>
        <h1 className="absolute right-[100px] font-bold text-[50px] text-white  font-montserrat">
          {quizdata?.data?.quizs.length}/{counter}
        </h1>
      </div>
      <div className="text-[#50566B] g-[30px] absolute left-[80px] bottom-[50px] w-[2900px] flex flex-row gap-[30px] flex-wrap">
        {quizdata?.data?.quizs[counter]?.answers.map((answer, index) => (
          <button
          onClick={() => isCorrect(answer, index)}
            style={
              { background: ColorChanger(iscorrect, answerIndex, index),
                color:TextColorChanger(iscorrect, answerIndex, index),
                borderColor:BorderColorChanger(iscorrect, answerIndex, index),
              }
            }
   
            className="pl-[10px] flex justify-start items-center font-[550]  text-[80px] w-[1000px] h-[250px]  bg-white border-solid border-[1px] border-black"
          >
            {answer?.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
const ColorChanger = (isCorrect, answerIndex, index) => {
  console.log("isCorrect", isCorrect);
  console.log("answerindex", answerIndex);
  console.log("index", index);

  if (isCorrect === null) {
    return "white";
  } else {
    if (answerIndex === index) {
      if (isCorrect === true) {
        return "rgb(74 222 128)";
      } else {
        return "rgb(248 113 113)";
      }
    } else {
      return "white";
    }
  }
};
const TextColorChanger = (isCorrect, answerIndex, index) => {
  console.log("isCorrect", isCorrect);
  console.log("answerindex", answerIndex);
  console.log("index", index);

  if (isCorrect === null) {
    return "#50566B";
  } else {
    if (answerIndex === index) {
      if (isCorrect === true) {
        return "white";
      }
    }
  }
};
const BorderColorChanger = (isCorrect, answerIndex, index) => {
  console.log("isCorrect", isCorrect);
  console.log("answerindex", answerIndex);
  console.log("index", index);

  if (isCorrect === null) {
    return "black";
  } else {
    if (answerIndex === index) {
      if (isCorrect === true) {
        return "white";
      }
    }
  }
};
