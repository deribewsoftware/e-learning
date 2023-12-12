import React from "react";
import { IconType } from "react-icons";

interface MenuItemsProps{
  label:string;
  icon?:IconType;

}
const MenuItems:React.FC<MenuItemsProps> = ({label,icon:Icon}) => {
  return ( <div className="flex gap-2 text-base"><div className="">{Icon&&<Icon size={20}/>}</div> <p>{label}</p></div> );
}
 
export default MenuItems;