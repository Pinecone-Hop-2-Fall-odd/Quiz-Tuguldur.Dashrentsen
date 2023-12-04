"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

export default function HomePage() {
  const router = useRouter();
  const [quizdata, setQuizData] = useState();
  const [counter, setCounter] = useState(0);
  const [iscorrect, setIscorrect] = useState(null);
  const [isCorrectCounter, setIsCorrectCounter] = useState(0);
  const [userData, setUserData] = useState();

  const getData = async () => {
    const userId = localStorage.getItem("uid");
    const quizData = await axios.get("http://localhost:8000/allQuiz");
    const userData = await axios.get(`http://localhost:8000/user/${userId}`);
    setQuizData(quizData);
    setUserData(userData);
    console.log(userData);
  };

  useEffect(() => {
    getData();
  }, []);

  function isCorrect(answer, index) {
    if (answer.isCorrect == true) {
      setIscorrect(index);
      alert("Correct");
      setIsCorrectCounter(isCorrectCounter + 1);
    } else {
      alert("Incorrect");
    }
    console.log(answer);

    setCounter(counter + 1);

    console.log(counter);
  }
  function homePush(){
    router.push("/HomePageHome")
  }

  if (quizdata?.data?.quizs.length === counter) {
    return (
      <div class="justify-center items-center  relative bg-gray-400 w-screen h-screen flex-col flex gap-[40px]">
        <div className="absolute top-[0px] w-screen h-[135px] bg-white flex items-center ">
          <h1 className="absolute left-[890px] font-bold text-[50px] text-[#50566B] font-montserrat">
            "Congratulations"
          </h1>
        </div>
        <div className="relative flex flex-col items-center pt-[40px] bg-white w-[700px] h-[860px] rounded-[30px]">
          <h1 className="font-bold text-[50px] text-[#50566B] flex flex-col items-center">
            {userData?.data?.user[0]?.userName}
          </h1>
          <h1 className="font-bold text-[50px] text-[#50566B]">
            You got {isCorrectCounter} out of {quizdata?.data?.quizs.length}{" "}
            right
          </h1>
          <div className="right-[100px] flex flex-row gap-[30px] absolute bottom-[100px] ">
            <button className="text-white text-[20px] bg-[#1A8BBB] w-[100px] h-[60px] rounded-[10px] ">Categories</button>
            <button onClick={homePush} className="text-white text-[20px] bg-[#1A8BBB] w-[100px] h-[60px] rounded-[10px]">Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class=" relative bg-gray-400 w-screen h-screen flex-col flex gap-[40px]">
      <div className="absolute top-[0px] w-screen h-[135px] bg-white flex items-center ">
        <h1 className="absolute left-[890px] font-bold text-[50px] text-[#50566B] font-montserrat">
          {quizdata?.data?.quizs[counter]?.question}
        </h1>
        <h1 className="absolute right-[100px] font-bold text-[50px] text-[#50566B] font-montserrat">
          {quizdata?.data?.quizs.length}/{counter}
        </h1>
      </div>
      <div className="g-[30px] absolute left-[80px] bottom-[50px] w-[2900px] flex flex-row gap-[30px] flex-wrap">
        {quizdata?.data?.quizs[counter]?.answers.map((answer, index) => (
          <button
            // style={
            //   iscorrect === index
            //     ? { background: "green" }
            //     : { background: "white" }
            // }
            onClick={() => isCorrect(answer, index)}
            className="pl-[10px] flex justify-start items-center text-[50px] w-[1000px] h-[250px]  bg-white border-solid border-[1px] border-black"
          >
            {answer?.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
