import nodemailer from "nodemailer";

export async function POST(req) {
  try {

    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: body.to,

      subject: body.subject,

      text: body.message,
    });

    return Response.json({
      success: true,
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