import todo from '@/models/todoModel'
import { NextResponse,NextRequest } from 'next/server'
import { connection } from '@/dbConfig/dbConfig'
import { getDataFromToken } from "@/helper/getDataFromToken";
connection()
export const POST = async(req:NextRequest)=>{
try {
    const userId = await getDataFromToken(req)
    const reqBody = await req.json();
    const {content} = reqBody;
    const newTodo = new todo({
        content:content,
        createdBy:userId
    })
    const saveTodo = await newTodo.save();
    return NextResponse.json({message:"Todo Created",data:saveTodo})
} catch (error:any) {
    return NextResponse.json({message:error.message})
}
}