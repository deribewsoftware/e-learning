import { ReactNode } from "react";
import Navbar from "../components/navbar/navbar";

import { TbUsers } from "react-icons/tb";
import { MdLocalLibrary } from "react-icons/md";
import { MdSummarize } from "react-icons/md";
import Link from "next/link";
import MenuItems from "../components/menu/menuItems";
import Sidebar from "../components/sidebar/sidebar";

interface DashBoardLayoutProbs{
  children:ReactNode

}


const DashBoardLayout:React.FC<DashBoardLayoutProbs> = ({children}) => {
  const links=[{
    label:"Summary",
    href:"/dashboard/summary",
    icon:MdSummarize,

  },
  {
    label:"Courses",
    href:"/dashboard/courses",
    icon:MdLocalLibrary,
    
  },
  {
    label:"Users",
    href:"/dashboard/users",
    icon:TbUsers,
    
  }
]
  return ( <div className="flex">
    
      <div className="relative">
     
       <Sidebar/>
     
      </div>


      <div className=" flex-1  overflow-y-auto flex justify-center md:ml-20 md:w-7/12">
        {/* <Navbar/> */}
        {children}
      </div>

  

  </div> );
}
 
export default DashBoardLayout;