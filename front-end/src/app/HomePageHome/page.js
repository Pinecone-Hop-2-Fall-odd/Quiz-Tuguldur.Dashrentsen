"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div class="relative bg-white w-screen h-screen flex justify-center">
      <div className="gap-[1800px] items-center pr-[10px] justify-end pt-[10px] flex flex-row w-screen h-[100px] bg-[#1A8BBB]">
        <div className="flex flex-row w-auto h-auto ">
          <h1 className="text-white font-extrabold text-[25px]">2goo_No Quiz.io</h1>
        </div>
        <div className="flex w-auto gap-[10px]">
          <Link href="../SignUpHome">
            <button className="rounded-[20px] right-[10px] top-[10px] bg-white w-[100px] h-[50px]">
              Sign Up
            </button>
          </Link>
          <Link href="../LogInHome">
            <button className="rounded-[20px] right-[10px] top-[10px] bg-white w-[100px] h-[50px]">
              Log In
            </button>
          </Link>
        </div>
      </div>
      <div className="items-center absolute bottom-[600px] flex gap-[10px] flex-col">
        <h1 className="text-[#50566B] text-[100px] font-semibold">Quiz.Play</h1>
        <Link href="./QuizPlayHome">
          <button className=" w-[400px] h-[85px] text-white h-[100px] bg-[#1A8BBB] text-[60px] font-medium">
            Play
          </button>
        </Link>
        <Link href="./CustomPlayHome">
          <button className=" w-[600px] h-[90px] text-white h-[100px] bg-[#1A8BBB] text-[60px] font-medium">
            Custom Quiz Play
          </button>
        </Link>
      </div>
    </div>
  );
}
