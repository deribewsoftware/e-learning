import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'
export async function POST(req: Request, res: Response){
  const body=await req.json();
  const{course,comment,rating}=body;
  const currentUser=await getCurrentUser();
  const reviewonCourse=course.reviews.find((c:any)=>c.userId==currentUser?.id)
  if (reviewonCourse){
    return NextResponse.error();
  }
  if(!currentUser){
    return NextResponse.error();
  }
  const review=await prisma.reviews.create({
    data:{
      courseId:course.id,
      comments:comment,
      rating:rating,
      userId:currentUser?.id,
    }
  });

  return NextResponse.json(review);
}