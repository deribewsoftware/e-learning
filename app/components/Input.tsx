'use client'


import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps{
  id:string;
  label:string;
 
  type:string;
  disabled?:boolean;
  required?:boolean;
  small?:boolean;
  registers:UseFormRegister<FieldValues>;
  errors:FieldErrors

}


const Input:React.FC<InputProps> = ({id,label,required,type,disabled,registers,errors,small}) => {

  
  return ( <div className={` w-full flex flex-col text-start  relative px-1  bg-transparent`} >
    
   



    <input 
    id={id}
    autoComplete="off"
    {...registers(id,{required})}
    disabled={disabled}
     type={type}
     placeholder=''
    className={` 
    peer
    
    w-full
    border-2
    outline-none
    font-light
bg-transparent
    rounded-md
    transition
    ${small? "p-2":"p-4 pt-6"}
    disabled:opacity-70
    disabled-cursor-not-allowed
    ${errors[id]? 'border-rose-400 focus:border-rose-400':'border-slate-300  focus:border-slate-300'}

     `} 
    />

 
<label 
     htmlFor={id} className={`
     cursor-text
     text-md 
     absolute
     duration-150
     -translate-y-4
     transition
     z-10
     top-5
     origin-0
     left-4
     peer-placeholder-shown:scale-100
     peer-placeholder-shown:-translate-y-3
     peer-focus:scale-75
     peer-focus:-translate-y-4
     peer-value:-translate-y-4
     ${errors[id]? 'text-rose-400 text-rose-500':'text-slate-300  focus:text-slate-400'}

     `}>
      {label}</label>

  </div> );
}
// outline-none  w-full border-b-2
// px-2 py-1  focus:text-black focus:border-green-600 
// focus:bg-white focus:py-2 
// transition ease-in-out duration-70
//  ${isDark? 'bg-gray-400  border-gray-600':'bg-gray-50 '}
export default Input;