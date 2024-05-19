import { NextResponse } from "next/server";
export const GET = async () =>{
try {
    const response = NextResponse.json({message:"Logout successfully",success:true },{status:200})
    // this "" in seting cookies empity
    response.cookies.set("token","",{
        httpOnly:true,
        expires:new Date(0)
    })
    return response
} catch (error:any) {
    return NextResponse.json({message:error.message},{status:500})
}
}