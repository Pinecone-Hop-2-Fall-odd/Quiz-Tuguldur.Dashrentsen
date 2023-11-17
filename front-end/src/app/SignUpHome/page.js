"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const BE_URL = "http://localhost:8080/user";
  const [users, setUsers] = useState([]);
  const router = useRouter()
  const [newUser, setNewUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(BE_URL);
      const data = await response.json();
      setUsers(data.data);
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
        body: JSON.stringify(newUser),
      };

      await fetch(BE_URL, options);
      setNewUser({ userName: "", firstName: "", lastName: "", password: "",email: "" });
      fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    router.push("LogInHome");

  }

  return (
    <div className="bg-gray w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[600px] h-[700px] bg-white border-[1px] border-black border-solid  flex flex-col items-center pt-[20px] gap-[40px] "
      >
        <h1 className="text-[40px]">Sign in to the game</h1>
        <input
          type="text"
          id="usernameInput"
          name="usernameInput"
          placeholder="Username"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          value={newUser.userName}
          onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
        ></input>
        <input
          type="text"
          id="firstNameInput"
          name="firstNameInput"
          placeholder="FirstName"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          value={newUser.firstName}
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.target.value })
          }
        ></input>
        <input
          type="text"
          id="lastNameInput"
          name="lastNameInput"
          placeholder="LastName"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        ></input>
        <input
          value={newUser.password}
          type="text"
          id="passwordInput"
          name="passwordInput"
          placeholder="Password"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        ></input>
        <input
          value={newUser.email}
          type="text"
          id="emailInput"
          name="emailInput"
          placeholder="Email"
          className="text-[20px] bg-gray border-solid border-gray border-[1px] w-[350px] h-[60px] "
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        ></input>
        <button
          type="Submit"
          className="text-white bg-[#1A8BBB] w-[350px] h-[60px]"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
