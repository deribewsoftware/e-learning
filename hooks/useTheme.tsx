"use client"
import { createContext, useContext, useState } from "react";

type ThemeContext = {
  isDark: boolean;
  onTheme:() => void;
};

interface Props{
  [propsName: string]:any;
}
export const ThemeContext=createContext<ThemeContext|null>(null);

export const ThemeContextProvider=(props:Props)=>{

  const [isDark,setDark]=useState(false);
  const onTheme=()=>{
    setDark((prev)=>!prev)
  }
  const values={isDark,onTheme}
  return <ThemeContext.Provider value={values} {...props}>

  </ThemeContext.Provider>
}

export const useTheme=()=>{
  const context=useContext(ThemeContext);
  if(context===null)   throw new Error("use Theme must be usetheme provider");
  return context;
}