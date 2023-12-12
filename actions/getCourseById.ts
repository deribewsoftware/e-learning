import prisma from "@/libs/prismadb"

export async function getCoursesById(){
  try{
    const course = await prisma.course.findFirst({
      where:{id:"657318c47f860766ce3406d8"}
    });
  return course
  }catch(e){
    return null;
  }
  
}