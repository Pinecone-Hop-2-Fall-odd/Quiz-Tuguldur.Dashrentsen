"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function userProfile() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("uid");
    // axios.get(`http://localhost:8000/user/${userId}`).then((res) => setUser(res.data.user[0]));
  }, []);
  console.log(user);

  return (
    <div className="w-screen h-screen bg-gray flex justify-center items-center">
      <div className="w-[500px] h-[500px] flex justify-center items-center flex-col bg-white">
        <h1 className="text-black">{user?.userName}</h1>
        <h1>{user?.email}</h1>
      </div>
    </div>
  );
}
