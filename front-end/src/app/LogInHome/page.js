"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function LogIn() {
  const BE_URL = "http://localhost:8080/user";
  const oneUser = "http://localhost:8080/allUser";

  const [user, setUser] = useState();
  const [newUser, setNewUser] = useState({ name: "", age: "", password: "" });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(BE_URL,oneUser);
      const data = await response.json();
      setUser(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleUpdate(id) {
    try {
      const password = prompt("Enter password:");
      if (password === null) return;

      const updatedName = prompt("Enter updated name:");
      const updatedAge = prompt("Enter updated age");

      if (updatedName !== null && updatedAge !== null) {
        const updatedData = {
          name: updatedName,
          age: updatedAge,
          password: password,
        };
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        };

        const response = await fetch(`${BE_URL}/${id}`, options);

        if (response.ok) {
          fetchData();
        } else {
          alert("Incorrect password. Update failed.");
        }
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  return (
    <div className="bg-gray w-screen h-screen flex justify-center items-center">
      <div className="w-[600px] h-[500px] bg-white border-[1px] border-black border-solid  flex flex-col items-center pt-[20px] gap-[40px] ">
        <h1 className="text-[40px]">Log In to the game</h1>
        <input
          type="text"
          id="usernameInput"
          name="usernameInput"
          placeholder="Username"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
        ></input>
        <input
          type="text"
          id="passwordInput"
          name="passwordInput"
          placeholder="Password"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
        ></input>
        <button className="text-white bg-[#7e6df3] w-[350px] h-[60px]">
          Log In
        </button>
      </div>
    </div>
  );
}
