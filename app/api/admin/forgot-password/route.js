import connectDB from "@/config/db";
import User from "@/models/User";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectDB();

    const { email } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    user.resetOTP = otp;
    user.resetOTPExpiry =
      new Date(Date.now() + 10 * 60 * 1000);

    await user.save();

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Password Reset OTP",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Axinex Technologies</h2>
          <p>Your Password Reset OTP is:</p>
          <h1 style="color:#2563eb;">${otp}</h1>
          <p>This OTP will expire in 10 minutes.</p>
        </div>
      `,
    });

    if (error) {
      return Response.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.error("OTP Error:", error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}