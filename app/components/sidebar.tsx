import { ReactNode } from "react";
import CardContainer from "./cardContainer";
import { TbUsers } from "react-icons/tb";
interface  SidebarProps{
  children:ReactNode;
}


const SideBar:React.FC<SidebarProps> = ({children}) => {
  return ( <CardContainer>
    <div className=" flex flex-col w-64 h-screen px-10 mt-40">
   {children}

  </div> 
  </CardContainer>);
}
 
export default SideBar;