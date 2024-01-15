"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END_URL } from "@/utils/backend-url";

export default function LogIn() {
  const [loginData, setLoginData] = useState({});
  const router = useRouter();

  const handleLogin = async () => {
    const { data } = await axios.post(`${BACK_END_URL}/login`, {
      email: loginData.email,
      password: loginData.password,
    });
    console.log(data);
    if (data?.token) {
      localStorage.setItem("token", data?.token);
      router.push("/");
    }
  };

  return (
    <div className="bg-[#DDDFE5] w-screen h-screen flex justify-center items-center">
      <div
        className="w-[26.785714285714285vw] h-[42.62574595055413vh] bg-white flex flex-col items-center pt-[1.7050298380221653vh] gap-[3.4100596760443307vh] "
      >
        <h1 className="text-[40px]">Log In to the game</h1>
        <input
          value={loginData.email}
          type="text"
          id="emailInput"
          name="emailInput"
          placeholder="Email"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[15.625vw] h-[5.115089514066496vh] "
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, email: e.target.value }))
          }
        ></input>
        <input
          value={loginData.password}
          type="password"
          id="passwordInput"
          name="passwordInput"
          placeholder="Password"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[15.625vw] h-[5.115089514066496vh] "
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, password: e.target.value }))
          }
        ></input>
        <button
          onClick={handleLogin}
          className="text-white bg-[#1A8BBB] w-[15.625vw] h-[5.115089514066496vh]"
        >
          Log In
        </button>
        <button onClick={() => router.push("/SignUpHome")} className="w-[100%] h-auto pl-[8.482142857142858vw] text-[#1A8BBB] text-[15px] bg-white">Don't have an account?</button>
      </div>
    </div>
  );
}
