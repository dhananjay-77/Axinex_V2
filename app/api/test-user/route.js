import connectDB from "@/config/db";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find();

    return Response.json({
      count: users.length,
      users,
    });
  } catch (error) {
    return Response.json({
      error: error.message,
    });
  }
}