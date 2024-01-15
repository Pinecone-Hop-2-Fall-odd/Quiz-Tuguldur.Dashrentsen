"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BACK_END_URL } from "@/utils/backend-url";

export default function userProfile() {
  const [userData, setUseData] = useState();
  const router = useRouter();

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/LogInHome");
    } else {
      const data = await axios.get(`${BACK_END_URL}/getUser`, {
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
      <div className="relative pl-[3.169642857142857vw] border-solid border-black border-[1px] w-[22.321428571428573vw] h-[42.62574595055413vh] flex justify-center items-start flex-col bg-white">
        <div className="flex flex-row gap-[0.8928571428571429vw]">
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
        <div className="flex flex-row gap-[0.44642857142857145vw] absolute bottom-[4.262574595055414vh] right-[3.125vw]">
          <button
            onClick={() => router.back()}
            className="active:bg-sky-900 text-[20px] rounded-[30px] text-white bg-[#1A8BBB] w-[4.464285714285714vw] h-[4.6888320545609545vh]"
          >
            Back
          </button>
          <button
            onClick={LogOut}
            className="active:bg-red-700 text-[20px] rounded-[30px] active text-white bg-red-600 w-[4.464285714285714vw] h-[4.6888320545609545vh]"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
