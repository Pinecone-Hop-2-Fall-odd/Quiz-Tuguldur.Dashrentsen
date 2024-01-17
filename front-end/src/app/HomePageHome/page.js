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
    <div class="relative items-center  bg-white w-screen h-screen flex justify-center">
      <div className="absolute top-[0] gap-[80.35714285714286vw] items-center pr-[0.44642857142857145vw] justify-end pt-[0.8525149190110827vh] flex flex-row w-screen h-[8.525149190110827vh] bg-[#1A8BBB]">
        <div className="flex flex-row w-auto h-auto ">
          <h1 className="text-white font-extrabold text-[1.3392857142857142vw]">
            2goo_No Quiz.io
          </h1>
        </div>
        <div onClick={pageJump} className="flex w-auto gap-[0.44642857142857145vw]">
        <ProfileIcon /> 
        </div>
      </div>
      <div className="items-center absolute bottom-[26.30179028132992vh] flex gap-[0.8525149190110827vh] flex-col">
        <h1 className="text-[#50566B] text-[8.035714285714286vw] font-semibold">Quiz.Play</h1>
        <Link href="./CategoriesHome">
          <button className="active:bg-sky-900 w-[17.857142857142858vw] h-[8.525149190110827vh] text-white bg-[#1A8BBB] text-[2.6785714285714284vw] font-medium" style={{borderRadius: "25px"}}>
            Play
          </button>
        </Link>
        <Link href="./CustomQuizMenu">
          <button className="active:bg-sky-900 w-[26.785714285714285vw] h-[8.525149190110827vh] text-white bg-[#1A8BBB] text-[2.6785714285714284vw] font-medium" style={{borderRadius: "25px"}}>
            Custom Quiz Play
          </button>
        </Link>
      </div>
    </div>
  );
}
