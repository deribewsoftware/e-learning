'use client'
import { Avatar } from "@mui/material";
import { useState } from "react";
import{BiLogOutCircle} from 'react-icons/bi'
import BackDrop from "../backDrop";
import {signOut} from 'next-auth/react'
import Button from "../buttons/button";
import Link from "next/link";

interface ProfileProps{
  user?:any|null;
}

const Profile:React.FC<ProfileProps> = ({user}) => {
  
  const [isOpen,setOpen]=useState(false);
  const onToggle=() =>{ setOpen((prev)=>!prev);}

  return ( <>
  {user? <div className="relative w-full z-30">
    <div className="flex gap-1 " onClick={onToggle}>
    <Avatar alt={user.name} src={user.image? user.image:'/image'} />
    <p className="py-2 hidden md:block">{user.name}</p>
    </div>
    {
      isOpen&&
      <div className="absolute w-full top-10 mt-1 ">
      <div className="shadow-lg bg-white flex-col gap-2 w-48 justify-center items-center p-4">
        <p>{user.name} Shimelis</p>
        <p className="p-2 hover:text-blue-600">{user.role==="ADMIN" && <Link href="/dashboard">Dashboard</Link>}</p>
        <hr/>


       
        <p>My wishlist</p>
        <p>My settings</p>
        <hr/>
       <div className="relative">

       <Button onClick={()=>{ onToggle(); signOut()}} label="Logout" icon={BiLogOutCircle} small/>
       </div>


      </div>
    </div>
    }

  </div>:<div>no profile</div>}
  {isOpen && <BackDrop onClick={onToggle}/>}
  </> );
}
 
export default Profile;