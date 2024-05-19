import { NextRequest,NextResponse } from "next/server";
import { connection } from "@/dbConfig/dbConfig";
import todo from "@/models/todoModel";
connection();
export const PATCH = async(req:NextRequest)=>{
try {
    const reqBody= await req.json()
const {id,completed} = reqBody
const updatedTodo = await todo.findByIdAndUpdate(id,{completed},{new:true})
if(!updatedTodo) return NextResponse.json({message:"todo not found"})
else return NextResponse.json({message:"todo updated",data:updatedTodo,success:true},{status:200})
} catch (error:any) {
    return NextResponse.json({message:error.message},{status:500})
}
}