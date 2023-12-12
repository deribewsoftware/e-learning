'use client'
import Image from "next/image";
import Bio from '../../../public/images/bio.png'
import { Rating } from "@mui/material";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";

interface CardProps{
  course?:any|null;
}

const Card:React.FC<CardProps> = ({course}) => {
  const {isDark}=useTheme();
  return ( <div className={` rounded-md  relative 
  flex flex-col  m-4 col-span-1 shadow-sm hover:shadow-lg h-[400px] w-[300px]
   transition hover:scale-105 ${isDark? "bg-[#182237] text-white shadow-slate-800":"text-slate-700 bg-white shadow-slate-400"}`}>

 
 <Link href={`/courses/${course?.id}`}>
 <Image width={200} height={100} src={course?.cover} alt="bio" className="object-contain w-full rounded-t-md overflow-hidden "/>
   
   <div className=" mt-4 flex flex-col gap-2 ">
    <h1 className="text-lg font-medium text-center ">{course?.title}</h1>
    <div className="flex text-center justify-center gap-1"><Rating value={3} readOnly size="small"/> <p className="text-xs text-center">234 reviews</p></div>
    <div className="flex gap-2 justify-center border-t-[1.5px] flex justify-between px-3"> <span className="line-through">$23</span> <span className="font-bold ">$10.0</span></div>
   </div>
 </Link>
   
   
  </div> );
}
 
export default Card;