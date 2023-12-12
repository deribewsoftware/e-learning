import { IconType } from "react-icons";

interface ButtonProps{
  label: any;
  small?: boolean;
  disabled?: boolean;
  
  outline?: boolean;
  icon?: IconType;
  onClick:()=>void;

}

const Button:React.FC<ButtonProps> = ({label,small,disabled,outline,icon:Icon,onClick}) => {
  return ( <button onClick={onClick} disabled={disabled} className={`rounded-md   w-full ${small? ' py-1 px-2 font-medium ':'py-2 px-3 font-bold'} ${outline? 'border border-2':' bg-slate-600 text-white'}`}>
{label}

  </button>);
}
 
export default Button;