'use client'


import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps{
  id:string;
  label:string;
 
 
  disabled?:boolean;
  required?:boolean;
  small?:boolean;
  registers:UseFormRegister<FieldValues>;
  errors:FieldErrors

}


const Textarea:React.FC<TextareaProps> = ({id,label,required,disabled,registers,errors,small}) => {

  
  return ( <div className={` w-full flex flex-col text-start  relative px-1  bg-transparent`} >
    
   



    <textarea
    id={id}
   
    {...registers(id,{required})}
    disabled={disabled}
    
     placeholder=''
    className={` 
    peer
    min-h-[5vh]
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

export default Textarea;