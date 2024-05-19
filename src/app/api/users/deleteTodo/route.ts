import { NextRequest,NextResponse } from "next/server";
import { connection } from "@/dbConfig/dbConfig";
import todo from "@/models/todoModel";
connection()
export const DELETE = async(req:NextRequest)=>{
try {
    const reqBody = await req.json();
const {id} = reqBody;
const deletedTodo = await todo.findByIdAndDelete(id)
if(!deletedTodo) return NextResponse.json({message:"todo not found"},{status:401})
else return NextResponse.json({message:"todo deleted", data:deletedTodo,success:true},{status:200})
} catch (error:any) {
    return NextResponse.json({message:error.message},{status:500})
}
}