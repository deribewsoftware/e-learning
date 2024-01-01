import prisma from "@/libs/prismadb"

export async function getCourses(){
  try{
    const courses = await prisma.course.findMany({
      include:{
        sub_category:true
      }
    });
  return courses
  }catch(e){
    return null;
  }
  
}