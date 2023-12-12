import { ReactNode } from "react";
import Navbar from "../components/navbar/navbar";
import SideBar from "../components/sidebar";
import { TbUsers } from "react-icons/tb";
import { MdLocalLibrary } from "react-icons/md";
import { MdSummarize } from "react-icons/md";
import Link from "next/link";
import MenuItems from "../components/menu/menuItems";

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
    
      <div className="md:w-2/12 ">
      <div className="hidden md:block fixed left-0">
        <SideBar>
          {links.map((link,index) =><Link className="hover:bg-gray-100" key={index} href={link.href}>
            <MenuItems label={link.label} icon={link.icon}/>
          </Link>)}
        </SideBar>
      </div>
      </div>
      <div className="  overflow-y-auto flex justify-center md:ml-20 md:w-7/12">
        {/* <Navbar/> */}
        {children}
      </div>

  

  </div> );
}
 
export default DashBoardLayout;