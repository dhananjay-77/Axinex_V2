import connectDB from "@/config/db";
import User from "@/models/User";

export async function GET() {
  await connectDB();

  const user = await User.create({
    name: "Dhanu",
    email: "dhanu@gmail.com",
  });

  return Response.json(user);
}