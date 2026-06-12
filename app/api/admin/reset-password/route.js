import connectDB from "@/config/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const {
      email,
      otp,
      password,
    } = await req.json();

    const user =
      await User.findOne({ email });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    if (user.resetOTP !== otp) {
      return Response.json(
        {
          success: false,
          message: "Invalid OTP",
        },
        { status: 400 }
      );
    }

    if (
      user.resetOTPExpiry <
      new Date()
    ) {
      return Response.json(
        {
          success: false,
          message: "OTP Expired",
        },
        { status: 400 }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    user.password =
      hashedPassword;

    user.resetOTP = "";
    user.resetOTPExpiry =
      null;

    await user.save();

    return Response.json({
      success: true,
      message:
        "Password Reset Successfully",
    });

  } catch (error) {

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}