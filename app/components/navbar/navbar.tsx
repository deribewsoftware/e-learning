"use client"
import Search from "../search";
import {BsMoonFill, BsSearch} from 'react-icons/bs'
import Category from "./category";

import { MdOutlineWbSunny } from "react-icons/md";

import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toast";
import Profile from "./profile";


interface NavbarProps{
  user?:any|null;
}

const Navbar:React.FC<NavbarProps> = ({user}) => {
  const pathName=usePathname();
  const {isDark,onTheme}=useTheme();

 
  return ( <div className={`flex justify-between w-full sticky top-0 z-50 items-center shadow-md  py-1 p-2 md:px-8 z-10  ${isDark? 'bg-[#151c2c] text-white':'text-slate-700 bg-zinc-100'}`}>
    <div className="font-bold text-lg md:text-3xl">E~learning</div>
    <ToastContainer position="top-center"  />
    
  <Category/>
 <div className=" hidden md:block "><Search/></div>
    
    <div className="md:hidden"><BsSearch size={25}/></div>
    
    <div className="flex justify-rounded  gap-x-10">
      {user? <Profile  user={user}/>:<div className="flex gap-2">

<Link href="/register" className={`hover:font-bold transition ${pathName==='/register'? 'font-bold':''}`}>Signup</Link>
<Link href="/login" className={`hover:font-bold transition ${pathName==='/login'? 'font-bold':''}`}> Login</Link>
</div>}


      <button onClick={onTheme}> 
      {isDark? <MdOutlineWbSunny size={25}/>:<BsMoonFill size={25}/>}
      </button>

      
      
     
    </div>

  </div> );
}
 
export default Navbar;