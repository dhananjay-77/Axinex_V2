import connectDB from "@/config/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const { email, otp } =
      await req.json();

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

    return Response.json({
      success: true,
      message: "OTP Verified",
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