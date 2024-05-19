import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodeToken: any = jwt.verify(token, process.env.TOKEN_SERCET!);
    return decodeToken.id;
  } catch (error: any) {
    console.log(error.message);
  }
};
