"use client";

import { ProfileIcon } from "@/assets/icons/profile-icon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { TrashIcon } from "@/assets/icons/trash-icon";

export default function CustomQuizMenu() {
  const router = useRouter();
  const [quizsData, setQuizsData] = useState();
  const [isHover,setIsHover] = useState(Boolean)

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await axios.get("http://localhost:8000/getAllQuiz");
    console.log(data);
    setQuizsData(data);
    console.log(quizsData);
  }

  function pageJump(index){
    const quizId = quizsData?.allQuizs?.[index]._id

    router.push(`/CustomQuizPlay?quizId=${quizId}`)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-screen h-[100px] bg-[#1A8BBB] flex flex-row items-center pl-[50px] gap-[1950px]">
        <h1 className="text-[25px] font-extrabold text-white">You're Quizs</h1>
        <div
          onClick={() => router.push("/userProfileHome")}
          className="flex w-auto gap-[10px]"
        >
          <ProfileIcon />
        </div>
      </div>
      <div className="gap-[50px] w-screen h-auto flex flex-row py-[30px] px-[50px]">
        {quizsData?.allQuizs.map((quiz, index) => (
          <div
            onClick={() => pageJump(index)}
            className="gap-[10px] pt-[45px] flex flex-col justify-start items-center bg-[#1A8BBB] shadow-[#1A8BBB] shadow-lg w-[270px] h-[270px]"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <h1 className="text-[30px] text-white font-bold ">
              {quiz?.quizName}
            </h1>
            <h1 className="text-[17px] text-white">
              {quiz?.questions?.length} Quizs
            </h1>
            {isHover ===true
            ? <TrashIcon className="mt-[80px]"/>
            : console.log("not hovering")

            }
          </div>
        ))}
        <Link href="/CustomQuizAdd">
          <div className="gap-[10px] pt-[45px] flex flex-col justify-start items-center bg-white shadow-[#1A8BBB] shadow-lg w-[270px] h-[270px]">
            <div className="relative flex flex-col justify-center items-center rounded-[5px] bg-[#1A8BBB] w-[150px] h-[150px]">
              <div className="absolute rounded-[7px] bg-white w-[110px] h-[15px]"></div>
              <div className="absolute rounded-[7px] bg-white w-[15px] h-[110px]"></div>
            </div>
            <h1 className="text-[25px] font-bold text-[#1A8BBB]">Add Quiz</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
