import { connection } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
connection();
export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    const user = await User.findOne({ email: email });
    if (user)
      NextResponse.json({ message: "user already found " }, { status: 400 });
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
    });
    const saveUser = await newUser.save();
    console.log(saveUser);
    return NextResponse.json({
      message: "user created succesfully",
      success: true,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
};
