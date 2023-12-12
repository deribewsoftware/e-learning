
import { ReactNode } from "react";
import Container from "../Container";
import FormWrap from "../FormWrap";
import Header from "../Header";
interface ModalProps{
  children:ReactNode
  isOpen:boolean;
  
}

const Modal:React.FC<ModalProps>= ({children,isOpen}) => {
  return ( isOpen&&<div className="fixed h-screen w-screen z-50 bg-[rgba(0,0,0,0.3)]  flex justify-center pt-40 top-0 left-0">

    <div className={`bg-white text-black absolute  duration-105 transition ${isOpen? 'translate-y-0':'-translate-y-[700px]'}`} >
     {children}
    </div>


  </div> );
}
 
export default Modal;