import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/buttons/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toast";
import { useRouter } from "next/navigation";
interface AddSubjectProps{
  categoryId: string
}
const AddSubject:React.FC<AddSubjectProps> = ({categoryId}) => {
  const router=useRouter()
  const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({defaultValues:{subject:"",categoryId:categoryId}})
  const [isLoading,setLoading]=useState(false)
  const onSubmit:SubmitHandler<FieldValues> =(data)=>{
    setLoading(true)
    axios.post('/api/subject', data).then((res)=>{
      
      toast.success("category created successfully")
      router.refresh()

    }).catch((err)=>{
      toast.error("Error creating category")
    }).finally(()=>{
      setLoading(false)
    });

  }
  return ( <div className="flex gap-8 justify-center">
     <div className="w-1/2">
  <Input
  small
  disabled={isLoading}
  id="subject"
  label="Subject"
  registers={register}
  errors={errors}
  type="text"
  />
  </div>
  <div className="p-2">
  <Button small disabled={isLoading}  onClick={handleSubmit(onSubmit)} label={isLoading? "Loading":"Add"}/>
  </div>
  </div> );
}
 
export default  AddSubject;