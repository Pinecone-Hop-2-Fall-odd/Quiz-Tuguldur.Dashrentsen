"use client";

import { ProfileIcon } from "@/assets/icons/profile-icon";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import axios from "axios";

export default function CustomQuizMenu() {
  const router = useRouter();
  const [quizsData,setQuizsData] = useState()

  async function  fetchData(){
    const { data } = await axios.get("http://localhost:8000/getAllQuiz");
    console.log(data);
    setQuizsData(data)
    console.log(quizsData);
  }

  useEffect(() => {
    fetchData()
  },[])

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
      <div className="w-screen h-auto flex flex-row py-[30px] px-[50px]"></div>
    </div>
  );
}
