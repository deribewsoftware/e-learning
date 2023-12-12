// pages/api/yourApiRouteName.ts
import prisma from '@/libs/prismadb';
import url from 'url'

import { NextRequest, NextResponse } from 'next/server';
// type Props = {
//   prams: {
//       id: string
//   }
// }

 // "657318c47f860766ce3406d8"
  export async function GET(req:NextRequest, { params }: { params: { id: string } } ) {
    try{

      const id = params.id;

     
const course = await prisma.course.findUnique({
  where:{
   
    id:id,
  },
  include:{
    user:true,
    sub_category:true,
    reviews:{
      include:{
        user:true,
      }
    },
    
  }
});
return NextResponse.json(course);

    }
    catch(err){
      console.log(err);
    }
  }
