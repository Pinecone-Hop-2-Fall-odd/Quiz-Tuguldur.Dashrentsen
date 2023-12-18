"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProfileIcon } from "@/assets/icons/profile-icon";
import { useRouter } from 'next/navigation'
import axios from "axios";

export default function HomePage() {
  const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem("token")
      if(token == null){
        router.push("/LogInHome");
      }
  }, []);

  function pageJump(){
    router.push("/userProfileHome")
  }

  return (
    <div class="relative bg-white w-screen h-screen flex justify-center">
      <div className="gap-[1800px] items-center pr-[10px] justify-end pt-[10px] flex flex-row w-screen h-[100px] bg-[#1A8BBB]">
        <div className="flex flex-row w-auto h-auto ">
          <h1 className="text-white font-extrabold text-[25px]">
            2goo_No Quiz.io
          </h1>
        </div>
        <div onClick={pageJump} className="flex w-auto gap-[10px]">
        <ProfileIcon /> 
        </div>
      </div>
      <div className="items-center absolute bottom-[27vh] flex gap-[10px] flex-col">
        <h1 className="text-[#50566B] text-[100px] font-semibold">Quiz.Play</h1>
        <Link href="./CategoriesHome">
          <button className=" w-[400px] h-[85px] text-white h-[100px] bg-[#1A8BBB] text-[60px] font-medium" style={{borderRadius: "25px"}}>
            Play
          </button>
        </Link>
        <Link href="./CustomQuizMenu">
          <button className=" w-[600px] h-[90px] text-white h-[100px] bg-[#1A8BBB] text-[60px] font-medium" style={{borderRadius: "25px"}}>
            Custom Quiz Play
          </button>
        </Link>
      </div>
    </div>
  );
}
