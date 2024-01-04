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
  
  return ( <div className={`w-full md:w-[310px]   border-none shadow-md rounded-md ${isDark? 'bg-[#041e49] shadow-slate-900  text-white':'text-slate-700 bg-white shadow-slate-300 '}`}>


 <Link href={`/courses/${course?.id}`}>
<div className="h-[200px] w-full relative">
<Image fill src={course?.cover} alt="bio" className="object-cover h-[200px] w-[300px] rounded-t-md overflow-hidden "/>
</div>
   
   <div className=" mt-4 flex flex-col gap-2 ">
    <div className="px-2 flex justify-between">
      <div className="rounded-full bg-gray-300 hover:bg-blue-600 text-slate-600 px-2 text-sm">{course.sub_category.sub_category}</div>
      <div className="flex text-center justify-center gap-1"><Rating value={3} readOnly size="small"/> <p className="text-xs text-center">4.5 Reviews</p></div>
    </div>
    <h1 className="text-lg font-medium text-center ">{course?.title}</h1>
    <div className="flex text-center justify-center gap-1"><Rating value={3} readOnly size="small"/> <p className="text-xs text-center">234 reviews</p></div>
    <div className="flex gap-2 justify-center border-t-[1.5px] flex justify-between px-3"> <span className="line-through">$23</span> <span className="font-bold ">$10.0</span></div>
   </div>
 </Link>
   
   <Link  href={`/courses/${course?.id}`} className=" p-2 m-2 border border-blue-500 border-[1.5px] flex justify-center items-center">
<p>Get Started</p>
   </Link>
  </div> );
}
 
export default Card;