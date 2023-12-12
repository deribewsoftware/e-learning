
import prisma from '@/libs/prismadb'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server';
export async function  POST(req: Request){
  const body = await req.json();
  const {name,email,password} = body;

  const user = await prisma.user.findUnique({where: {email: email}})

  if (user) {
    throw new Error('User already exists');
  }
  
  //hash password
  const hashPassword=await bcrypt.hash(password,10)

  const newUser = await prisma.user.create({
    data: {name:name,email:email,hashedPassword:hashPassword}
  })

  return NextResponse.json(newUser)
}