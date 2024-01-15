"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BACK_END_URL } from "@/utils/backend-url";

export default function SignUp() {
  const [signUpData, setSignUpData] = useState({});
  const [isGood,setIsGood] = useState(true)
  const router = useRouter();

  const handleSignUp = async () => {
    const data = await axios
      .post(`${BACK_END_URL}/user`, {
        email: signUpData.email,
        password: signUpData.password,
        userName: signUpData.userName,
      })
      .catch((error) => setIsGood(false));
      if (isGood==true) {
        router.push("../LogInHome");
      }else{
        alert("Email is already taken")
      }
    
    console.log(data);
  };

  return (
    <div className="bg-[#DDDFE5] w-screen h-screen flex justify-center items-center">
      <div
        relative
        className="w-[26.785714285714285vw] h-[51.150895140664964vh] bg-white flex flex-col items-center pt-[1.7050298380221653vh] gap-[3.4100596760443307vh] "
      >
        <h1 className="text-[40px]">Sign in to the game</h1>
        <input
          type="text"
          id="usernameInput"
          name="usernameInput"
          placeholder="Username"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[15.625vw] h-[5.115089514066496vh] "
          value={signUpData.userName}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, userName: e.target.value }))
          }
        ></input>
        <input
          value={signUpData.email}
          type="text"
          id="emailInput"
          name="emailInput"
          placeholder="Email"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[15.625vw] h-[5.115089514066496vh] "
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, email: e.target.value }))
          }
        ></input>
        <input
          value={signUpData.password}
          type="password"
          id="passwordInput"
          name="passwordInput"
          placeholder="Password"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[15.625vw] h-[5.115089514066496vh] "
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, password: e.target.value }))
          }
        ></input>
        <button
          className="text-white bg-[#1A8BBB] w-[15.625vw] h-[5.115089514066496vh]"
          onClick={handleSignUp}
        >
          Sign up
        </button>
        <button
          onClick={() => router.push("/LogInHome")}
          className="text-[#1A8BBB] absolute top-[66.75191815856778vh] right-[42.410714285714285vw] text-[15px] bg-white"
        >
          Already have an account ?
        </button>
      </div>
    </div>
  );
}
