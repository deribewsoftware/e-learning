
"use client";

import Header from "@/app/components/Header";
import Card from "@/app/components/card/card";
import CardContainer from "@/app/components/cardContainer";
import Reviews from "../reviews";


import { useEffect, useState } from "react";
import axios from "axios";

import { Avatar} from "@mui/material";
import RatingPage from "../rating";
import { reviews } from "@/utils/reviews";
import CourseContent from "../courseContent";
import CourseChapter from "../courseChapter";
import AddReviews from "../addReviews";

interface IPrams{
  courseId:string;
}

type Course={
  title:string;
  cover:string;
  video:string;

}

const Course = ({params}:{params:IPrams}) => {
 
  const [course,setCourse]=useState<Course|any>(null)
  useEffect(()=>{
    async function fetchData() {
      try{
        const response=await axios.get(`/api/course/${params.courseId}`)
        setCourse(response.data);
      }

      catch(error){

      }
    }
    fetchData();
    
  },[params.courseId])
  
  return ( <div className="flex justify-center gap-20 flex-wrap md:pt-10 font-sans">
    <div className=" min-h-screen flex flex-col p-2 md:p-8 w-full md:w-6/12 gap-8 pt-10 md:pt-32">

{
course &&

<>
<h1 className="text-3xl font-bold items-center">{course?.title}</h1>

<video src={course?.video} controls></video>

<CardContainer radius>
<Header title="About Courses" border/>
{course.description.map((descr:any,index:any)=><p className="p-2" key={index}>  {descr.content}</p>)}

</CardContainer>


<div className="
md:fixed
 md:right-48
  md:top-20 
    p-2
     md:p-6
      w-full
       md:w-[400px]
        flex
         flex-col
         gap-10">
<CourseContent/>
<CourseChapter/>
</div>

<CardContainer radius>
<Header title="Requirements" border/>
    <ul className="pl-2">
      {course.requiremnts.map((req:any,index:any)=><li className="py-2" key={index}>{req.requiremnt }</li>)}
      
    </ul>
</CardContainer>

    
<CardContainer radius>
<Header title="Who is this course for?" border/>
 <ul>
      <li>Join me on this incredible learning </li>
      <li>Access to a computer with Adobe Premiere software installed</li>
      <li>A smartphone or camera</li>
      <li>Basic computer skills</li>
    </ul>
</CardContainer>
    

   <CardContainer radius>
   <Header title="instructor" border/>
    <div className="flex gap-4 sm:flex-col md:flex-row mt-4">
      <Avatar src={course.user.image} alt={course.user.name}/>
      <div className="flex flex-col gap-2">
      <h1 className="semibold">{course.user.name}</h1>
      <p className="text-sm text-slate-500">I am Deribew Shimelis, a 
        passionate Software Engineer dedicated 
        to the dynamic world of technology and education.
         Currently based at Addis Ababa University, I contribute to the academic 
        landscape by guiding and inspiring a new generation of students in the field of software engineering.</p>
      </div>
      

   
   </div>

    </CardContainer > 

   <RatingPage/>
   <AddReviews course={course}/>

<Reviews reviews={course.reviews}/>


    <Header title="More Realted Courses" border/>
    <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-10 justify-center gap-10">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>

    <Header title="More Courses By Deribew Shimelis" border/>
    <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-10 justify-center gap-10">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
}



    </div>





    <div className=" w-full md:w-2/12">
  
  
  
    </div>

  </div> );
}
 
export default Course;