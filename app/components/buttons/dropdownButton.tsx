import { IconType } from "react-icons";

interface DropDownButtonProps{
  label?:string;
  icon?:IconType;
  children:React.ReactNode;
}

const DropDownButton:React.FC<DropDownButtonProps> = ({label,icon:Icon,children}) => {
  return ( <div className=" group z-0 ">
    <button className="flex justify-center items-center">{Icon && <Icon size={15}/>}{label}</button>
    <div style={{zIndex:"-1"}} className="absolute
     shadow 
    
     
      transition
      min-w-[200px] max-w-[400px] 
      bg-white
      mt-[1px]
       top-full
       transform -translate-y-96
      
       group-hover:translate-y-0">
      {children}
    </div>

  </div> );
}
 
export default DropDownButton;