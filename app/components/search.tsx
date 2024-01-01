"use client"

import { useTheme } from '@/hooks/useTheme';
import {GoSearch} from 'react-icons/go'


const Search = () => {
  const {isDark}=useTheme();
  return ( <div className={`border flex gap-1 rounded-full  hover:shadow p-2 items-center focus-within:border-2 focus-within:border-blue-500 ${isDark? "bg-gray-600 border-2":" border-2 bg-white"} transition duration-300`}>
    <label className={`${isDark? "text-white":" text-slate-500"}`}><GoSearch size={25}/></label>
    <input className="outline-none w-full bg-transparent peer" type="search" placeholder='Search Courses...' />
  
  </div> );
}
 
export default Search;