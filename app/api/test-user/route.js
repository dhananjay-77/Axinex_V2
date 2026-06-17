import connectDB from "@/config/db";
import mongoose from "mongoose";
import User from "@/models/User";

export async function GET() {
  await connectDB();

  return Response.json({
    dbName: mongoose.connection.db.databaseName,
    users: await User.countDocuments(),
  });
}