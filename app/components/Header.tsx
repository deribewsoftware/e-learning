import { IconType } from "react-icons";

interface HeaderProps{
  title: string;
  small?: boolean;
  border?: boolean;
  center?: boolean;
  

}

const Header:React.FC<HeaderProps> = ({title,border,small,center}) => {
  return ( <div className={`
  ${center? "text-center items-center":""}
  
  ${small? "font-medium text-lg":"font-bold text-lg md:text-2xl"}
   
    p-2 
    ${border? 'border-b ':''}
     mb-2
      w-full

  `}>
{title}
  </div> );
}
 
export default Header;