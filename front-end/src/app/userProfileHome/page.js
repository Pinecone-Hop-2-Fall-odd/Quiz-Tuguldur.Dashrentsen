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
      setUseData(data);
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
      <div className="relative pl-[71px] border-solid border-black border-[1px] w-[500px] h-[500px] flex justify-center items-start flex-col bg-white">
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-col items-end ">
            <h1 className="text-[#50566B]  text-[20px]">
              Username:
            </h1>
            <h1 className="text-[#50566B] text-[20px] ">
              Email:
            </h1>
          </div>
          <div>
            <h1 className=" text-[#50566B]  text-[20px]">
              {userData?.data?.user?.userName}
            </h1>
            <h1 className="text-[#50566B] text-[20px] ">
              {userData?.data?.user?.email}
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-[10px] absolute bottom-[50px] right-[70px]">
          <button
            onClick={() => router.push("/HomePageHome")}
            className="active:bg-sky-900 text-[20px] rounded-[30px] text-white bg-[#1A8BBB] w-[100px] h-[55px]"
          >
            Back
          </button>
          <button
            onClick={LogOut}
            className="active:bg-red-700 text-[20px] rounded-[30px] active text-white bg-red-600 w-[100px] h-[55px]"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
