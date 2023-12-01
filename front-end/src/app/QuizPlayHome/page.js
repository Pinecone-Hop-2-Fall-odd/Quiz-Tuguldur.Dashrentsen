"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [data, setData] = useState();
  const [counter, setCounter] = useState(0);
  const [iscorrect, setIscorrect] = useState(null);

  const getData = async () => {
    const data = await axios.get("http://localhost:8000/allQuiz");
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  function isCorrect(answer, index) {
    if (answer.isCorrect == true) {
      console.log("correct");
      setIscorrect(index);
    } else {
      console.log("incorrect");
    }
    console.log(answer);

    setCounter(counter + 1);

    console.log(counter);
  }

  return (
    <div class="w-screen h-screen flex-col flex gap-[40px] justify-center">
      <h1 className=" text-[80px] text-[#50566B] font-semibold">
        Question:{data?.data?.quizs[counter]?.question}
      </h1>
      <div className="flex gap-[30px] flex-col">
        {data?.data?.quizs[counter]?.answers.map((answer, index) => (
          <button
            style={
              iscorrect === index
                ? { background: "green" }
                : { background: "white" }
            }
            onClick={() => isCorrect(answer, index)}
            className="bg-white border-solid border-[1px] border-black"
          >
            {answer?.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
