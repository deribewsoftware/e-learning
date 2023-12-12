"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksProps{
 label: string;
 href: string;
}


const Links:React.FC<LinksProps> = ({label,href}) => {
  const pathName=usePathname()
  return (<Link href={href} className={`hover:font-bold transition
   ${pathName===`${href}`? 'font-bold':''}`}>
   {label}</Link>);
}
 
export default Links;