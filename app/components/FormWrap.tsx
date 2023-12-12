
'use client'
import { useTheme } from "@/hooks/useTheme";
import React from "react";


const FormWrap = ({children}:{children:React.ReactNode}) => {
  const {isDark}=useTheme();
  return ( 

  <div className="flex justify-center min-h-fit h-full  items-center">
     <div className={`flex flex-col text-center w-[600px] h-full  shadow-xl  p-2  gap-4 ${isDark? 'bg-slate-700 shadow-slate-700':'bg-white'}`} >
{children}
  </div>
  </div>

  );
}
 
export default FormWrap;