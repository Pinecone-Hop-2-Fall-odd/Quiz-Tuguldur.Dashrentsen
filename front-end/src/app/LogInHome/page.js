"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LogIn() {
  const [loginData, setLoginData] = useState({});
  const router = useRouter();

  const handleLogin = async () => {
    const { data } = await axios.post("http://localhost:8000/login", {
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
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="w-[600px] h-[500px] bg-white border-[1px] border-black border-solid  flex flex-col items-center pt-[20px] gap-[40px] "
      >
        <h1 className="text-[40px]">Log In to the game</h1>
        <input
          value={loginData.email}
          type="text"
          id="emailInput"
          name="emailInput"
          placeholder="Email"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
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
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, password: e.target.value }))
          }
        ></input>
        <button
          onClick={handleLogin}
          className="text-white bg-[#7e6df3] w-[350px] h-[60px]"
        >
          Log In
        </button>
        <button onClick={() => router.push("/SignUpHome")} className="w-[100%] h-auto pl-[190px] text-[#1A8BBB] text-[15px] bg-white">Don't have an account?</button>
      </div>
    </div>
  );
}
