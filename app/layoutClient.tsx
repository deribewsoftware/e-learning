'use client'
import { useTheme } from "@/hooks/useTheme";
import Navbar from "./components/navbar/navbar";
import { ToastContainer } from "react-toast";
import { usePathname } from "next/navigation";



interface LayoutClientProps{
  children:React.ReactNode,
  user?:any|null
}
const LayoutClient:React.FC<LayoutClientProps> = ({children,user}) => {
  const {isDark}=useTheme();

  const usePath=usePathname()
  return ( 
  <div className={`flex flex-col min-h-screen  ${isDark? 'bg-[#031525] text-white':'text-slate-700 bg-slate-100'}`}>
   
    {usePath!=='/dashboard'&&<Navbar user={user}/>}
    
    <main className='flex-grow'>
   
    {children}
    
    </main>
    <div className="">
      footer
    </div>
  </div>
);
}
 
export default LayoutClient;