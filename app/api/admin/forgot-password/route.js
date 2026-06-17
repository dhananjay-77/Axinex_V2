import connectDB from "@/config/db";
import User from "@/models/User";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await connectDB();

    const { email } =
      await req.json();

    const user =
      await User.findOne({ email });

    if (!user) {
      return Response.json(
        {
          success: false,
          message:
            "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const otp = Math.floor(
      100000 +
        Math.random() * 900000
    ).toString();

    user.resetOTP = otp;
    user.resetOTPExpiry =
      Date.now() +
      10 * 60 * 1000;

    await user.save();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,
      to: email,
      subject:
        "Password Reset OTP",
      text: `Your OTP is ${otp}`,
    });

    return Response.json({
      success: true,
      message:
        "OTP sent successfully",
    });

  } catch (error) {

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}