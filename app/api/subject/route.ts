import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";

export async function POST(req:Request){
  const body = await req.json();
  const {subject,categoryId} = body;

  const sub_category= await prisma.sub_category.create({
    data:{sub_category:subject,category_id:categoryId}
  });
  return NextResponse.json(sub_category);

}