"use client"
import { SidebarContents } from "@/utils/sidebarContents";
import Link from "next/link";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Sidebar = () => {
const [isExtended,setExtended]=useState(true);
const handleExtendedChange=()=>{
  setExtended((prev)=>!prev)
}
  return ( <div className=" flex shadow-lg bg-white h-screen overflow-y-auto px-1 sticky ">
  <div className="flex-col w-full ">
  <div className={`flex justify-end ${!isExtended? "sticky right-0 top-0":"relative"}`}>
  <button onClick={handleExtendedChange} className="border-none bg-transparent hover:bg-gray-100 transition p-2 outline-none">{isExtended? <MdClose size={30}/>:<FaArrowRightLong  size={30}/>}</button>
  </div>
    {SidebarContents.map((content,index)=>{
      return <Link key={index} href={content.url} className="flex gap-4 p-2">
        {<content.icon size={30}/>}
        <p className={`${isExtended? "block translate-x-0":"hidden -translate-x-[100%]"} transition duration-300`}>{content.name}</p>

      </Link>
    })}
  </div>
   
  </div> );
}
 
export default Sidebar;