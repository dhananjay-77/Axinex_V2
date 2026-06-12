import connectDB from "@/config/db";
import Inquiry from "@/models/Inquiry";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    console.log(body);

    const inquiry = await Inquiry.create(body);

    console.log(inquiry);

    return Response.json({
      success: true,
      inquiry,
    });

  } catch (error) {

    console.log(error);

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
export async function GET() {
  try {

    await connectDB();

    const inquiries = await Inquiry.find()
      .sort({ createdAt: -1 });

    return Response.json({
      success: true,
      inquiries,
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