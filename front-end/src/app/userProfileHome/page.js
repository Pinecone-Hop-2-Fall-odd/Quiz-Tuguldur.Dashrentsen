"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function userProfile() {
  const [userData, setUseData] = useState();
  const router = useRouter();

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/LogInHome");
    } else {
      const data = await axios.get(`http://localhost:8000/getUser`, {
        headers: { token },
      });
      setUseData(data)
      console.log(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function LogOut() {
    localStorage.removeItem("token");
    router.push("/LogInHome");
  }

  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="relative pl-[122px] border-solid border-black border-[1px] w-[500px] h-[500px] flex justify-center items-start flex-col bg-white">
        <h1 className="text-[#50566B]  text-[20px]">
          Username:{userData?.data?.user?.userName}
        </h1>
        <h1 className="text-[#50566B] text-[20px] ">Email:{userData?.data?.user?.email}</h1>
        <div className="flex flex-row gap-[10px] absolute bottom-[50px] right-[70px]">
          <button
            onClick={() => router.push("/HomePageHome")}
            className="text-[20px]  text-white bg-[#1A8BBB] w-[65px] h-[45px]"
          >
            Back
          </button>
          <button
            onClick={LogOut}
            className=" text-[20px]  text-white bg-red-600 w-[96px] h-[45px]"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
