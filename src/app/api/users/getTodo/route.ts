import { NextRequest,NextResponse } from "next/server";
import { connection } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import todo from "@/models/todoModel"
connection()

export const GET = async(req:NextRequest)=>{
try {
    const userId = await getDataFromToken(req);
    const todos = await todo.find({createdBy:userId})
    todos.forEach(todo => {
        console.log("Created At:", todo._doc.createdAt);
        console.log("Updated At:", todo._doc.updatedAt);
    });

    return NextResponse.json({ data: todos });
   
} catch (error:any) {
    return NextResponse.json({message:error.message})
}
}