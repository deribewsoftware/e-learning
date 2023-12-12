import prisma from "@/libs/prismadb"

export async function getCategory(){
 try{
  const categories = await prisma.category.findMany({
    
    include:{
      sub_category: {
        include:{
          courses:true
        }
      }
    }
  });
  return categories;
 }
 catch(err:any){
  return null;
 }
}