import { connection } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";
connection();
export const GET = async (req: NextRequest) => {
  try {
    const userId = await getDataFromToken(req);

    const user = await User.findOne({ _id: userId }).select("-password");
    console.log(user);
    return NextResponse.json({ data: user, success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
