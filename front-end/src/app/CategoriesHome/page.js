"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories() {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState();

  async function fetchData() {
    const { data } = await axios.get("http://localhost:8000/getCategories");
    // res.data
    setCategoryData(data);
    // console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  // function quizJump(value){
  // router.push(`/QuizPlayHome?category=${value}`)

  // }
console.log(categoryData);
  return (
    <div className="bg-[#DDDFE5] flex flex-col justify-center items-center w-screen h-screen ">
      <div className="gap-[20px] w-[392px] h-[656px] flex flex-col items-center ">
        <div className="w-[392px] h-[80px] bg-[#1A8BBB] flex flex-col items-center justify-center text-[20px] text-white ">
          <h1 className=" ">What type of quiz do you want to play?</h1>
        </div>
        <div className="bg-white flex flex-col items-center pt-[20px] px-[20px] w-[392px] h-[576px]">
          {categoryData?.allCategory.map(({category}) => (

          <button
            onClick={() => router.push(`/QuizPlayHome?category=${category}`)}
            className="flex justify-center items-center border-solid border-b-[1px] border-[#A8ACBC] border-black text-[#50566B] text-[30px] w-[332px] h-[74px] "
          >
            {category}
          </button>
          ))}
        </div>
      </div>
    </div>
  );
}
