"use client"
import { useEffect, useState } from "react";

import Input from "../components/Input";
import { FieldValues, useForm,SubmitHandler } from "react-hook-form";
import Header from "../components/Header";
import Button from "../components/buttons/button";
import axios from "axios";
import {signIn,signOut} from 'next-auth/react'
import { useRouter } from "next/navigation";
import { toast } from "react-toast";
import { CircularProgress } from "@mui/material";
interface LoginFormProps{
  currentUser:any|null;
}


const LoginClient:React.FC<LoginFormProps> = ({currentUser}) => {
  const router=useRouter()

  const [isLoading ,setLoading] =useState(false);

  useEffect(()=>{
    if(currentUser){
      router.push('/')
      router.refresh()
    }
  })
  const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
    defaultValues: {
      
      email:'',
      password: ''
    }
  })
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{


    setLoading(true);
    
      signIn('credentials',{
       email: data.email,
       password: data.password,
       redirect:false,
      }).then((callback)=>{
        if (callback?.ok){
          router.push('/')
          router.refresh()
          toast.success("account logged in successfully")
          
        }
        if (callback?.error){
          toast.error(callback.error)
        }
      }).catch((error)=>toast.error('something went wrong')).finally(() => {
              setLoading(false)
      })  
     
  }

  if(currentUser){
    return (<>
    <div className="h-screen w-screen flex justify-center">
      <div className="flex flex-col">
        <h1>User {currentUser.name} Already Logged </h1>
        <p> To logout {currentUser.name} <button onClick={()=>{signOut()}}>logout</button></p>
      </div>
    </div>
    </>)
  }
  return ( 
    <>
    <Header  title="Login for E~Learning"/>
    
      <Input 
    label="Email"
     type="email" id="email" 
     disabled={isLoading}
      required errors={errors}
      registers={register}/>
      <Input 
    label="Password"
     type="password" id="password" 
     disabled={isLoading}
      required errors={errors}
      registers={register}/>

<Button
disabled={isLoading}
      label="Signin with Google"
outline
onClick={()=>{signIn('google')}}
      />


      <Button
      label={isLoading ? <CircularProgress color="primary"/>:'Submit'}
      disabled={isLoading}
      onClick={handleSubmit(onSubmit)}
      />
    
    </>
   );
}
 
export default LoginClient;