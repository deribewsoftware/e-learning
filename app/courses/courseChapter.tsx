"use client"


import CardContainer from "../components/cardContainer";
import MenuItems from "../components/menu/menuItems";
import { BsBarChartLine } from "react-icons/bs";
import { useState } from "react";
import Accordion from "../components/Accordion/Accordion";

const CourseChapter = () => {

  const [Accor,setAccording]=useState("");
  const onAccordion=(data:string)=>{
    if(Accor===data){
      setAccording("");
    }
    if(Accor!==data){
      setAccording(data);
    }
   
  }
  
  return ( <CardContainer radius>
    <div className="flex flex-col  gap-2 ">
    <div className="">register</div>
    <p>The Art of Filmmaking: Mastering Storytelling and Editing with Adobe Premiere Pro</p>
    
    <Accordion label="Chapter:One" onToggle={()=>{onAccordion("Chapter:One")}} openAccordion={Accor}>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    
     </Accordion>
    
     <Accordion label="Chapter:Two" onToggle={()=>{onAccordion("Chapter:Two")}} openAccordion={Accor}>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    <MenuItems icon={BsBarChartLine} label="Level:Beginner"/>
    
     </Accordion>
    
    </div>
    </CardContainer> );
}
 
export default CourseChapter;