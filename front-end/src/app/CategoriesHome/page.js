"use client";
import { BACK_END_URL } from "@/utils/backend-url";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories() {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState();

  async function fetchData() {
    const { data } = await axios.get(`${BACK_END_URL}/getCategories`);
    setCategoryData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(categoryData);
  return (
    <div className="bg-[#DDDFE5] flex flex-col justify-center items-center w-screen h-screen ">
      <div className="gap-[1.7050298380221653vh] w-[17.5vw] h-[55.92497868712702vh] flex flex-col items-center ">
        <div className="w-[100%] h-[6.820119352088661vh] bg-[#1A8BBB] flex flex-col items-center justify-center text-[20px] text-white ">
          <h1>What type of quiz do you want to play?</h1>
        </div>
        <div className="bg-white flex flex-col items-center pt-[20px] px-[1.7050298380221653vh] w-[100%] h-[49.10485933503836vh]">
          {categoryData?.allCategory.map(({ category }) => (
            <button
              onClick={() => router.push(`/QuizPlayHome?category=${category}`)}
              className="flex justify-center items-center border-solid border-b-[1px] border-[#A8ACBC] border-black text-[#50566B] text-[30px] w-[14.821428571428571vw] h-[6.308610400682012vh] "
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
