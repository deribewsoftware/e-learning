"use client"

import { useTheme } from "@/hooks/useTheme";
import courses from "@/utils/courses";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

interface LinksProps{
 label: string;
 href: string;
 icon?:IconType;
 hasCategory?: string|null;


}

const Links:React.FC<LinksProps>=({label,href,icon:Icon,hasCategory})=>{
  return(
    <Link href={`/${href}`} 
    className={`
    flex 
    gap-1 
     w-full 
     justify-between
      hover:text-blue-400
      hover:underline
       hover:scale-105 
      transition px-2 
      ${label===hasCategory? 'underline font-medium text-blue-600':''}`}>
       <span className="text-sm">{label}</span>
        <span> {Icon&&<Icon/>}</span>
        </Link>
  )
}


const categoryWrap=()=>{
  return(
<div className=""></div>
  );
}


const Category = () => {
  const {isDark}=useTheme();

  const LinksList=[
    {
    label:"Software and Develoment",
    href:"software",
    icon:BsArrowRight,
    subcategory:[
      {
      label:"Software engineering",
      href:"software",
      icon:BsArrowRight
    },
    {
      label:"Artificial intelligence",
      href:"software",
      icon:BsArrowRight
    },
  ]
  },
  {
    label:"Construction",
    href:"software",
    icon:BsArrowRight,
    subcategory:[
      {
      label:"Hydrophysics",
      href:"software",
      icon:BsArrowRight
    },
    {
      label:"Railsways and construction",
      href:"software",
      icon:BsArrowRight
    },
  ]
  },
  {
    label:"electrical and computer Engineering",
    href:"software",
    icon:BsArrowRight,
    subcategory:[
      {
      label:"Communication ",
      href:"software",
      icon:BsArrowRight
    },
    {
      label:"power and control",
      href:"software",
      icon:BsArrowRight
    },
  ]
  },
  {
    label:"Bussines and marketing",
    href:"software",
    icon:BsArrowRight,
    subcategory:[
      {
      label:"Accounting",
      href:"software",
      icon:BsArrowRight
    },
    {
      label:"International marketing",
      href:"software",
      icon:BsArrowRight
    },
  ]
  },
  {
    label:"Graphics and desing",
    href:"software",
    icon:BsArrowRight,
    subcategory:[
      {
      label:"Photshop",
      href:"software",
      icon:BsArrowRight
    },
    {
      label:"video editor",
      href:"software",
      icon:BsArrowRight
    },
  ]
  },
  {
    label:"art",
    href:"software",
    icon:BsArrowRight,
    subcategory:[
      {
      label:"music",
      href:"software",
      icon:BsArrowRight
    },
    {
      label:"literatute",
      href:"software",
      icon:BsArrowRight
    },
  ]
  },
  {
    label:"shef and cooking",
    href:"software",
    icon:BsArrowRight,
    subcategory:[
      {
      label:"Italian pizza ",
      href:"software",
      icon:BsArrowRight
    },
    {
      label:"Europe food",
      href:"software",
      icon:BsArrowRight
    },
  ]
  },
]

  const [hasCat,setCat]=useState<string|null>(null);
  const onshowCat=(data:string) => {
    setCat(data);

  }
  return ( <div className="relative group ">
    <div className="hidden md:block">Category</div>
    <div className="block md:hidden"><IoMdMenu size={25}/></div>

    <div className=" hidden absolute  top-6
    
   w-[300px] group-hover:block">
    <ul className={` mt-4 border shadow-lg  ${isDark? "border-slate-300 bg-slate-600":"bg-white  border-slate-100"}`}>

      {courses.map((link,index) =><li key={index} 
      className="p-2 flex relative " 
       onMouseOver={()=>onshowCat(link.title)}> 
     <Links
     label={link.title}
     href=  {`/${link.title}`}
     icon={BsArrowRight}
     hasCategory={hasCat}

     />
        
        <div className={`  absolute   left-0 md:left-full top-0  w-[300px]  ${link.title===hasCat? 'block':'hidden'}`}>

        <ul className={`border ${isDark? "border-slate-300 bg-slate-600":"bg-white  border-slate-100"}`}>
     {link.subjects.map((subcategory,indx)=><li key={indx} className="p-2 flex relative"> 
     <Links
     label={subcategory}
     href=  {`/${subcategory}`}
     icon={BsArrowRight}

     /></li>)}
    
        </ul>
        </div>
     </li>
        )}
     

    
     
   </ul>
    </div>


  </div> );
}
 
export default Category;