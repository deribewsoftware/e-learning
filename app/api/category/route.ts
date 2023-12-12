import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

export async function POST(req: Request){
  const body=await req.json();
  const {category}=body;
  const currentUser=await getCurrentUser();
  try{
    if (!currentUser || currentUser.role!=="ADMIN"){
      throw new Error('Access denied');

  }
  const newCategory = await prisma.category.create({
    data:{category}
  })
  return NextResponse.json(newCategory)
}
  catch(err:any){
    throw new Error('Category already exists');
  }
}