"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LogIn() {
  const BE_URL = "http://localhost:8080/user";
  const router = useRouter()

  const [user, setUser] = useState();
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(BE_URL);
      const data = await response.json();
      setUser(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const options = {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      };

      await fetch(BE_URL, options);

      setBody({
        userName: "",
        firstName: "",
        lastName: "",
        password: "",
        email: "",
      });

      fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    console.log(user);
  }
  return (
    <div className="bg-gray w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[600px] h-[500px] bg-white border-[1px] border-black border-solid  flex flex-col items-center pt-[20px] gap-[40px] "
      >
        <h1 className="text-[40px]">Log In to the game</h1>
        <input
          value={body.email}
          type="text"
          id="emailInput"
          name="emailInput"
          placeholder="Email"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          onChange={(e) => setBody({ ...body, email: e.target.value })}
        ></input>
        <input
          value={body.password}
          type="text"
          id="passwordInput"
          name="passwordInput"
          placeholder="Password"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          onChange={(e) => setBody({ ...body, password: e.target.value })}
        ></input>
        <button className="text-white bg-[#7e6df3] w-[350px] h-[60px]">
          Log In to the game
        </button>
      </form>
    </div>
  );
}
