"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { BACK_END_URL } from "@/utils/backend-url";

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
      `${BACK_END_URL}/getQuiz/${searchParams.get("category")}`
    );
    const userData = await axios.get(`${BACK_END_URL}/getUser`, {
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
      <div class="justify-center items-center  relative bg-gray-400 w-screen h-screen flex-col flex gap-[3.4100596760443307vh]">
        <div className="absolute top-[0px] w-screen h-[11.508951406649617vh] bg-white flex items-center ">
          <h1 className="absolute left-[39.732142857142854vw] font-bold text-[2.232142857142857vw] text-[#50566B] font-montserrat">
            "Congratulations"
          </h1>
        </div>
        <div className="relative flex flex-col items-center pt-[3.4100596760443307vh] bg-white w-[31.25vw] h-[34.10059676044331vh] rounded-[1.3392857142857142vw]">
          <h1 className="font-bold text-[2.232142857142857vw] text-[#50566B] flex flex-col items-center">
            {userData?.data?.user[0]?.userName}
          </h1>
          <h1 className="font-bold text-[2.232142857142857vw] text-[#50566B]">
            You got {isCorrectCounter} out of {quizdata?.data?.quizs.length}
            right
          </h1>
          <div className="right-[4.464285714285714vw] flex flex-row gap-[1.3392857142857142vw] absolute bottom-[8.525149190110827vh] ">
            <button
              onClick={() => router.push("/CategoriesHome")}
              className="text-white text-[0.8928571428571429vw] bg-[#1A8BBB] w-[4.464285714285714vw] h-[5.115089514066496vh] rounded-[0.44642857142857145vw] "
            >
              Categories
            </button>
            <button
              onClick={() => router.push("/HomePageHome")}
              className="text-white text-[0.8928571428571429vw] bg-[#1A8BBB] w-[4.464285714285714vw] h-[5.115089514066496vh] rounded-[0.44642857142857145vw]"
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
    <div class=" relative bg-white  w-screen h-screen flex-col flex gap-[3.4100596760443307vh]">
      <div className="absolute top-[0px] w-screen h-[11.508951406649617vh] bg-[#1A8BBB] flex flex-row justify-center  items-center ">
        <h1 className=" font-bold text-[2.232142857142857vw] text-white font-montserrat">
          {quizdata?.data?.quizs[counter]?.question}
        </h1>
        <h1 className="absolute right-[4.464285714285714vw] font-bold text-[2.232142857142857vw] text-white  font-montserrat">
          {quizdata?.data?.quizs.length}/{counter}
        </h1>
      </div>
      <div className="text-[#50566B] g-[1.3392857142857142vw] absolute left-[3.5714285714285716vw] bottom-[4.262574595055414vh] w-[129.46428571428572vw] flex flex-row gap-[1.3392857142857142vw] flex-wrap">
        {quizdata?.data?.quizs[counter]?.answers.map((answer, index) => (
          <button
          onClick={() => isCorrect(answer, index)}
            style={
              { background: ColorChanger(iscorrect, answerIndex, index),
                color:TextColorChanger(iscorrect, answerIndex, index),
                borderColor:BorderColorChanger(iscorrect, answerIndex, index),
              }
            }
   
            className="pl-[0.44642857142857145vw] flex justify-start items-center font-[550]  text-[3.5714285714285716vw] w-[44.642857142857146vw] h-[21.312872975277067vh]  bg-white border-solid border-[1px] border-black"
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
      }else{
        return "white"
      }
    }
  }
};
