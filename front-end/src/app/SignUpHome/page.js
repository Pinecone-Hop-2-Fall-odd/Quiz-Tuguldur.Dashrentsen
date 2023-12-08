"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const [signUpData, setSignUpData] = useState({});
  const router = useRouter();

  const handleSignUp = async () => {
    const data  = await axios
      .post("http://localhost:8000/user", {
        email: signUpData.email,
        password: signUpData.password,
        userName: signUpData.userName,
      })
      .catch((error) => console.log(error));
      // router.push("../LogInHome");
    console.log(data);
  };
  function jumpLogIn() {
    router.push("/LogInHome");
  }

  return (
    <div className="bg-gray w-screen h-screen flex justify-center items-center">
      <div
        relative
        className="w-[600px] h-[600px] bg-white border-[1px] border-black border-solid  flex flex-col items-center pt-[20px] gap-[40px] "
      >
        <h1 className="text-[40px]">Sign in to the game</h1>
        <input
          type="text"
          id="usernameInput"
          name="usernameInput"
          placeholder="Username"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          value={signUpData.userName}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, userName: e.target.value }))
          }
        ></input>
        <input
          value={signUpData.password}
          type="text"
          id="passwordInput"
          name="passwordInput"
          placeholder="Password"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, password: e.target.value }))
          }
        ></input>
        <input
          value={signUpData.email}
          type="text"
          id="emailInput"
          name="emailInput"
          placeholder="Email"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, email: e.target.value }))
          }
        ></input>
        <button
          className="text-white bg-[#1A8BBB] w-[350px] h-[60px]"
          onClick={handleSignUp}
        >
          Sign up
        </button>
        <button
          onClick={jumpLogIn}
          className="text-[#1A8BBB] absolute top-[783px] right-[990px] text-[15px] bg-white"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
