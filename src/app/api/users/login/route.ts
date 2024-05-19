import { connection } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import User from "@/models/userModel";
import jwt from "jsonwebtoken"
connection()
export const POST = async (request:NextRequest)=>{
    try {
        
const reqBody = await request.json();
const {email,password} = reqBody;
const user = await User.findOne({email:email})
 if(!user){
    return NextResponse.json({message:"user not found"})
 }
 const validPassword = await bcryptjs.compare(password,user.password)
 if(!validPassword){
    return NextResponse.json({message:"invalid credentials"},{status:400})
 }
const tokenData = {
    id:user._id,
    username:user.username,
    email:user.email
}
// create token 
const token = jwt.sign(tokenData,process.env.TOKEN_SERCET!,
    {
        expiresIn:"1d"
    })

    //set cookies 
    const response = NextResponse.json({
        message:"loginn successfully",
        success:true
    })
    response.cookies.set("token",token,{
        httpOnly:true
    })
    return response 
    } catch (error:any) {
       return  NextResponse.json({message:error.message, error: "login error "},{status:500})
    }
}