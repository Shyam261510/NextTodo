import mongoose from "mongoose";

export async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("db connected successfully");
    });
    connection.on("error", () => {
      console.log("db connection fails");
      process.exit();
    });
  } catch (error) {
    console.log("error in connecting with database" + error);
  }
}
