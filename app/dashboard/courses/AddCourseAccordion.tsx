"use client"

import Header from "@/app/components/Header";
import Button from "@/app/components/buttons/button";
import CardContainer from "@/app/components/cardContainer";
import { ReactNode, useState } from "react";

interface AddCourseAccordionProps{
  title: string;
  label: string;
  onChange:(value:any)=>void;
  addCourseData:() => void;
  
  courseData?:any[]|null;
  children:ReactNode;
}

const AddCourseAccordion:React.FC<AddCourseAccordionProps> = ({title,onChange,addCourseData,label,courseData,children}) => {
  const[isOpen,setOpen] =useState(false);
  const onOpen = ()=>{
    setOpen((prev)=>!prev)
  }
  return ( <CardContainer radius><div className="flex flex-col">
    <Header title={title}/>
    <div className="p-0 flex justify-center items-center">
     {children}

    </div>



    {!isOpen&&<div className="flex justify-center ">
    <div className="w-full md:w-1/4 px-10">
    <Button label={`Add ${label}`} onClick={onOpen} small outline/>
    </div>
    </div>}
   {isOpen&& <div className=" justify-center gap-2 md:gap-20  md:p-10 w-full">
 
 <div className="flex flex-col px-2 md:p-4 md:m-2 w-full border-2 border-slate-300 rounded-lg">
  <label className="text-slate-400">{label}</label>
 <textarea className=" border-none outline-none bg-transparent" 
 onChange={onChange}></textarea>
 </div>

 <div className="h-3 pt-4  w-full items-end flex justify-end  gap-6 mt-10">
<div className="flex gap-2 w-full md:w-1/3">
<Button label="Add More" onClick={addCourseData} small/>
 <Button label="Cancel" onClick={onOpen}  small/>
</div>
 </div></div>}

  </div></CardContainer> );
}
 
export default AddCourseAccordion;