'use client'

import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import Header from "@/app/components/Header";
import Input from "@/app/components/Input";
import Button from "@/app/components/buttons/button";
import CardContainer from "@/app/components/cardContainer";
import Select from "@/app/components/inputs/select";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {getDownloadURL,getStorage,ref,uploadBytesResumable} from 'firebase/storage'

import firebaseApp from "@/libs/firebase";
import axios from "axios";
import AddCourseAccordion from "./AddCourseAccordion";
type CourseDescription={
   content:String
}
type CourseRequiremnt={
   requiremnt:String
}

type Subjects={
  id:string;
  sub_category:string
}
interface AddCategoryProps{
  categories?:any[]|null;
  
}
const AddCategory:React.FC<AddCategoryProps> = ({categories}) => {
  const {register,handleSubmit,setValue,reset,formState:{errors}}=useForm<FieldValues>({
    defaultValues: {
      subjectId:"",
     
  
  price:0,
  title :"",
  level:"",
  
  description:[],
  requiremnts:[]
  }
  });

  
  const [description,setDescription]=useState<CourseDescription[]|null>(null)
  const [requiremnt,setRequiremnt]=useState<CourseRequiremnt[]|null>(null)
  const [subjects,setSubjects]=useState<Subjects[]|null>(null)
  const [isCourseCreated,setCourseCreated]=useState(false)
  const [categoryId,setcategoryId]=useState<string>()
  const [image,setImage]=useState<File|null>(null)
  const [video,setVideo]=useState<File|null>(null)

  const[descp,setDescp]=useState<string>("")
  const[reqrmnt,setReqrmnt]=useState<string>("")


  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const selectedImage = files[0];
      setImage(selectedImage);
    }
  };

 



  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const selectedVideo = files[0];
      setVideo(selectedVideo);
    }
  };

  useEffect(()=>{
    setCustomValue("cover",image);
    setCustomValue("video",video);
    
  },[image,video]);



  useEffect(()=>{
    if(isCourseCreated){
      reset()
      setDescription(null)
      setRequiremnt(null)
      setCourseCreated(false)
    }
    
      },[isCourseCreated])

      useEffect(()=>{

        const cat:any=categories?.filter((category)=>category.id===categoryId)[0];
        if(cat===undefined) {
          setSubjects(null);
        }
        else{
          setSubjects(cat.sub_category)
        }
        
        
        
      },[categories,categoryId])



  const addDescription=useCallback((value:CourseDescription)=>{
    setDescription((prev:any)=>{
      if(!prev){
        return [value]
      }
      
      return [...prev,value]
    })
    
  },[])



  const removeDescription=useCallback((value:CourseDescription)=>{
   setDescription((prev:any)=>{
    if(prev){
      const filterData=prev.filter((item:any)=>item.content!==value.content)
      return filterData
    }
   })
  },[]) 


  const addRequiremnt=useCallback((value:CourseRequiremnt)=>{
    setRequiremnt((prev:any)=>{
      if(!prev){
        return [value]
      }
      
      return [...prev,value]
    })
    
  },[])



  const removeRequiremnt=useCallback((value:CourseRequiremnt)=>{
   setRequiremnt((prev:any)=>{
    if(prev){
      const filterData=prev.filter((item:any)=>item.requiremnt!==value.requiremnt)
      return filterData
    }
   })
  },[]) 




  const setCustomValue=(id:string, value:any)=>{
    setValue(id,value,{
      shouldDirty:true,
      shouldValidate:true,
      shouldTouch:true,

    })
  }



  
let imageCoverUrl:string="";
let videoUrl:string="";
  const onSubmit:SubmitHandler<FieldValues> =async(data)=>{
    
    const cat:any=categories?.filter((category)=>category.id===data.categoryId)
    setSubjects(cat.sub_category)
    console.log(data);
    
    const handleImageUpload = async() =>{
      try{
        const storage=getStorage(firebaseApp);
        if(video){
          const videoName=new Date().getTime()+"-"+video.name;
          const videoStorageRef=ref(storage,`course/videos/${videoName}`);
          const uploadTask=uploadBytesResumable(videoStorageRef,video);

          await new Promise<void>((resolve,reject)=>{
            uploadTask.on('state_changed',
            (snapshot)=>{
              const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
              console.log(`Uploading: ${progress}%`);
              switch(snapshot.state){
                   case "paused":
                     console.log("Upload file paused");
                     break;
                   case "running":
                     console.log("Upload file running");
                     break;
              }
            },
            (error)=>{
              console.log("upload video Error",error);
              reject(error);
            },
            ()=>{
              //succesful upload image
              getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
                videoUrl=downloadUrl
                console.log("image download",downloadUrl);
                resolve();
              }).catch((error)=>{
                console.log("error getting download",error);
                reject(error);
              });
            }
  
            )
  
          })

        }


      if(image){
        const fileName=new Date().getTime()+"-"+image.name;
        

        const imageStorageRef=ref(storage,`course/cover/${fileName}`);
        const uploadTask=uploadBytesResumable(imageStorageRef,image);
        await new Promise<void>((resolve,reject)=>{
          uploadTask.on('state_changed',
          (snapshot)=>{
            const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(`Uploading: ${progress}%`);
            switch(snapshot.state){
                 case "paused":
                   console.log("Upload file paused");
                   break;
                 case "running":
                   console.log("Upload file running");
                   break;
            }
          },
          (error)=>{
            console.log("upload image Error",error);
            reject(error);
          },
          ()=>{
            //succesful upload image
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
              imageCoverUrl=downloadUrl
              console.log("image download",downloadUrl);
              resolve();
            }).catch((error)=>{
              console.log("error getting download",error);
              reject(error);
            });
          }

          )

        })

      }
    
    } catch(error) {

    }

    
    


  }
  await handleImageUpload();

    const courseData={...data,description:description,requiremnts:requiremnt,cover:imageCoverUrl,video:videoUrl}
    console.log(courseData);
    axios.post('/api/course',courseData).then((response) => {
      console.log(response);
    }
    ).catch((error) => {console.log(error)}).finally(() => {});
}

 console.log("upload courses data",image);


  return ( <div className="flex flex-col gap-10 m-2 md:pt-10  relative ">
    <CardContainer radius>
    <Header title="Add Courses" center/>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center  gap-4 md:gap-20 md:p-20">

      <div className="flex flex-col gap-1 border border-2 border-slate-300 rounded-lg px-4">
        <label className="text-slate-300" htmlFor="category">Category</label>
        <select className="bg-transparent" name="category" id="category" value={categoryId} onChange={(event)=>setcategoryId(event.target.value)} >
        {categories && categories.map((category)=><option key={category.id} value={category.id}> {category.category}</option>)}
        </select>
      </div>
  
    <Select
   id="subjectId"
  label="Subjects"
   required
   registers={register}
   errors={errors}
   >
    {subjects && subjects.map((subject)=><option key={subject.id} value={subject.id}> {subject.sub_category}</option>)}
    </Select>
  <Input 
   id="title"
  label="Title"
   required
   registers={register}
   errors={errors}
   type="text"

   />

   <div className="flex flex-col gap-1 border border-2 border-slate-300 rounded-lg px-4">
    <label htmlFor="image" className="text-slate-300">Upload Image</label>
    <input className="outline-none border-none bg-transparent" id="image" type="file" accept="image/*" onChange={handleImageChange}/>
   </div>
  

   <div className="flex flex-col gap-1 border border-2 border-slate-300 rounded-lg px-4">
    <label htmlFor="video" className="text-slate-300">Upload Video</label>
    <input className="outline-none border-none bg-transparent" id="video" type="file" accept="video/*" onChange={handleVideoChange}/>
   </div>

   <Input 
   id="level"
  label="Level"
   required
   registers={register}
   errors={errors}
   type="text"

   />
   <Input 
   id="price"
  label="Price"
   required
   registers={register}
   errors={errors}
   type="number"

   />

  </div>

    </CardContainer>


 <AddCourseAccordion
 label="Description"
  title="Add Description" onChange={(event:any)=>{setDescp(event.target.value)}}
  addCourseData={()=>{addDescription({content:descp})}}>
    {description&&description?.length!=0&& <div className="bg-slate-50 w-full text-center flex flex-col my-2 md:p-10">
    {description?.map((dc,index)=><div key={index} className="group hover:border-slate-600 hover:border-2 p-2 relative my-2">
     <p className="items-start justify-content-start" > {dc.content}</p>
     <div className=" absolute right-0 top-0 z-50 mb-10 hidden group-hover:block">
      <button className="text-red-600 bg-red-200 p-2 mb-10 " onClick={()=>removeDescription(dc)}>Delete</button>
     </div>

    </div>)}
    </div>}
  </AddCourseAccordion>


  <AddCourseAccordion
 label="Requirement"
  title="Add Course Requirement" onChange={(event:any)=>{setReqrmnt(event.target.value)}}
  addCourseData={()=>{addRequiremnt({requiremnt:reqrmnt})}}>
    {requiremnt&&requiremnt?.length!=0&& <div className="bg-slate-50 w-full text-center flex flex-col my-2 md:p-10">
    {requiremnt?.map((req,index)=><div key={index} className="group hover:border-slate-600 hover:border-2 p-2 relative my-2">
     <p className="items-start justify-content-start" > {req.requiremnt}</p>
     <div className=" absolute right-0 top-0 z-50 mb-10 hidden group-hover:block">
      <button className="text-red-600 bg-red-200 p-2 mb-10 " onClick={()=>removeRequiremnt(req)}>Delete</button>
     </div>

    </div>)}
    </div>}
  </AddCourseAccordion>


  
  <div className="flex justify-center ">
<div className="w-1/3">
 
    <Button label="Submit" onClick={handleSubmit(onSubmit)}/>
 
</div>
</div>
  </div>
    );
}
 
export default AddCategory;