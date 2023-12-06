"use client"
import { useRouter } from "next/navigation";

export default function Categories() {
  const router = useRouter()

function quizJump(value){
router.push(`/QuizPlayHome?category=${value}`)
  
}

  return (
    <div className="bg-[#DDDFE5] flex flex-col justify-center items-center w-screen h-screen ">
      <div className="gap-[20px] w-[392px] h-[656px] flex flex-col items-center ">
        <div className="w-[392px] h-[80px] bg-[#1A8BBB] flex flex-col items-center justify-center text-[20px] text-white ">
          <h1 className=" ">What type of quiz do you want to play?</h1>
        </div>
        <div className="bg-white flex flex-col items-center pt-[20px] px-[20px] w-[392px] h-[576px]">
            <button onClick={() => quizJump("Science")} className="flex justify-center items-center border-solid border-b-[1px] border-[#A8ACBC] border-black text-[#50566B] text-[30px] w-[332px] h-[74px] ">Science</button>
            <button onClick={() => quizJump("Geography")} className="flex justify-center items-center border-solid border-b-[1px] border-[#A8ACBC] border-black text-[#50566B] text-[30px] w-[332px] h-[74px] ">Geography</button>
        </div>
      </div>
    </div>
  );
}
