import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";

export async function POST(req:Request){
  const body=await req.json();
  const currentUser = await getCurrentUser();
  const {
    
    subjectId,
    cover ,
    video,
    price ,
    title,
    level ,
    description ,
    requiremnts }=body;
    if (!currentUser){
      return NextResponse.error()
    }
const newCourse= await prisma.course.create({
  data:{
    userId:currentUser?.id,
    sub_category_id:subjectId,
    title:title,
    cover:cover,
    video:video,
    level:level,
    description:description,
    requiremnts:requiremnts,
    price:parseFloat(price)


  }
})
return NextResponse.json(newCourse);

}