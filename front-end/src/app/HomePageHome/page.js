"use client"

import { useEffect,useState } from "react"
import Link from "next/link"

export default function HomePage(){
    return(
        <div class="relative bg-[#ab3cfc] w-screen h-screen flex justify-center">
            <Link href='../SignUpHome'>
                <div className="absolute right-[10px] top-[10px] bg-white w-[300px] h-[300px]"></div>
            </Link>
            <div className="absolute bottom-[600px] flex gap-[10px] flex-col">
                <h1 className="text-white text-[80px] font-semibold">WebName</h1>
                <Link href='./FirstPlayHome'>
                    <button className=" w-[300px] h-[30px] text-white h-[100px] bg-[#33C37E] text-[60px] font-medium">Play</button>
                </Link>
            </div>
        </div>
    )
}