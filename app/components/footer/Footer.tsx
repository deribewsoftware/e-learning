'use client'

import { useTheme } from "@/hooks/useTheme";
import courses from "@/utils/courses";
import { socialMedias } from "@/utils/socialmedia";
import Link from "next/link";

const Footer = () => {

  
  const {isDark}=useTheme();
  return ( <footer className={` mt-40 pt-10 flex flex-col gap-10 ${isDark? 'bg-black':'bg-slate-200'}`}>
    <div className="flex flex-wrap justify-around">


      {courses.map((course,index)=>{
        return(
          <div key={index} className="flex flex-col">
          <h2 className="font-medium text-lg">{course.title}</h2>
  
  
  <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
      {course.subjects.map((subject,ind) =>{
        return(
          <li key={ind} className="flex items-center text-sm hover:underline hover:text-blue-500 translation duration-300 hover:text-base">
          <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
           </svg>
          {subject}
      </li>
        )
      })}
      
  </ul>
  
        </div>
        )
      })}
     



     
    </div>

    <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <div className="contact-us flex justify-center gap-10">
     
      {socialMedias.map((social,index)=>{
        return(
          <Link key={index} href={social.url}><social.icon size={30}/></Link>
        )
      })}

    </div>
    <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

    <div className="flex justify-center">
  <p className="text-sm font-sans p-6">&copy; {new Date().getFullYear()} E-Learning Academy. All rights reserved.</p>
</div>


  </footer> );
}
 
export default Footer;