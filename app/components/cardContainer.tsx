

'use client'
import { useTheme } from "@/hooks/useTheme";
import { ReactNode } from "react";

interface CardContainerProps{
  children:ReactNode
  radius?:boolean
}

const CardContainer:React.FC<CardContainerProps> = ({children,radius}) => {
  const {isDark}=useTheme();
  return ( <div className={`
  ${isDark? "bg-[#182237] text-white shadow-slate-800":"text-slate-700 bg-white shadow-slate-400"}
  border
   border-[1.2px]  
  border-gray-300 p-2 w-full
  ${radius? "rounded-lg":""}
  `}>
    {children}
  </div> );
}
 
export default CardContainer;