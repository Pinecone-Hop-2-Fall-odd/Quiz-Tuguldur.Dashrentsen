"use client";

import { ProfileIcon } from "@/assets/icons/profile-icon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { TrashIcon } from "@/assets/icons/trash-icon";
import { PlayIcon } from "@/assets/icons/play-icon";
import { BACK_END_URL } from "@/utils/backend-url";

export default function CustomQuizMenu() {
  const router = useRouter();
  const [quizsData, setQuizsData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await axios.get(`${BACK_END_URL}/getAllQuiz`);
    console.log(data);
    setQuizsData(data);
    console.log(quizsData);
  }

  function pageJump(index) {
    const quizId = quizsData?.allQuizs?.[index]._id;

    router.push(`/CustomQuizPlay?quizId=${quizId}`);
  }
  async function quizDelete(index) {
    const quizId = quizsData?.allQuizs?.[index]._id;
    const deleteQuestion = confirm("Are You Sure?");
    console.log(deleteQuestion);
    if (deleteQuestion==true) {
      const { deletedQuiz } = await axios.get(
        `${BACK_END_URL}/quizDelete/${quizId}`
      );
      fetchData();
    } else {
      fetchData();
      console.log("delete canceled");
    }
  }

  return (
    <div className="relative h-screen w-screen relative flex flex-col items-center">
      <div className="w-screen h-[8.525149190110827vh] bg-[#1A8BBB] flex flex-row items-center pl-[2.232142857142857vw] gap-[87.05357142857143vw]">
        <h1 className="text-[1.1160714285714286vw] font-extrabold text-white">You're Quizs</h1>
        <div
          onClick={() => router.push("/userProfileHome")}
          className="w-auto"
        >
          <ProfileIcon />
        </div>
      </div>
      <div className="gap-[2.232142857142857vw] w-screen h-auto flex flex-row py-[2.557544757033248vh] px-[2.232142857142857vw]">
        {quizsData?.allQuizs.map((quiz, index,creator) => (
          <QuizCard
            pageJump={pageJump}
            quiz={quiz}
            index={index}
            quizDelete={quizDelete}
            creator={creator}
          />
        ))}
        <Link href="/CustomQuizAdd">
          <div className="gap-[0.8525149190110827vh] pt-[3.836317135549872vh] flex flex-col justify-start items-center bg-white shadow-[#1A8BBB] shadow-lg w-[12.053571428571429vw] h-[23.017902813299234vh]">
            <div className="relative flex flex-col justify-center items-center rounded-[0.22321428571428573vw] bg-[#1A8BBB] w-[6.696428571428571vw] h-[12.787723785166241vh]">
              <div className="absolute rounded-[0.3125vw] bg-white w-[4.910714285714286vw] h-[1.278772378516624vh]"></div>
              <div className="absolute rounded-[0.3125vw] bg-white w-[0.6696428571428571vw] h-[9.377664109121909vh]"></div>
            </div>
            <h1 className="text-[1.1160714285714286vw] font-bold text-[#1A8BBB]">Add Quiz</h1>
          </div>
        </Link>
      </div>
      <div className="absolute bottom-[2.557544757033248vh] right-[2.232142857142857vw] gap-[2.232142857142857vw] flex flex-row w-auto h-auto">
        <button onClick={() => router.push("/HomePageHome")} className="active:bg-sky-900 bg-[#1A8BBB] h-[6.820119352088661vh] w-[6.696428571428571vw] rounded-[1.1160714285714286vw] text-[1.1160714285714286vw] text-white ">Back</button>
      </div>
      <div className="bottom-[1.7050298380221653vh] left-[1.3392857142857142vw] absolute">
        <h1 className=" text-[#50566B] text-[0.8928571428571429vw] ">Developed by Pinecone</h1>
      </div>
    </div>
  );
}

const QuizCard = ({ pageJump, quiz, index, quizDelete}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="gap-[0.8525149190110827vh] py-[3.836317135549872vh] flex flex-col justify-start items-center bg-[#1A8BBB] shadow-[#1A8BBB] shadow-lg w-[12.053571428571429vw] h-[23.017902813299234vh]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h1 className="text-[1.3392857142857142vw] text-white font-bold ">{quiz?.quizName}</h1>
      <h1 className="text-[0.7589285714285714vw] text-white">
        {quiz?.questions?.length} Questions
      </h1>
      <h1 className="text-[0.7589285714285714vw] text-white">Created by : "{quiz?.creator}"</h1>
      {isHover === true ? (
        <div className="flex gap-[0.08928571428571429vw] mg-[80px]">
          <div onClick={() => quizDelete(index)} className="w-[3.169642857142857vw] h-[6.0528559249786875vh]">
            <TrashIcon />
          </div>
          <div className="w-[3.169642857142857vw] h-[6.0528559249786875vh]" onClick={() => pageJump(index)}>
            <PlayIcon />
          </div>
        </div>
      ) : (
        console.log("not hovering")
      )}
    </div>
  );
};
