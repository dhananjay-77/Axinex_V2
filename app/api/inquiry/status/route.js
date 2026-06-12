import connectDB from "@/config/db";
import Inquiry from "@/models/Inquiry";

export async function PUT(req) {
  try {
    await connectDB();

    const { id, status } = await req.json();

    console.log("ID:", id);
    console.log("STATUS:", status);

    const updatedInquiry =
      await Inquiry.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

    if (!updatedInquiry) {
      return Response.json(
        {
          success: false,
          message: "Inquiry not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({
      success: true,
      inquiry: updatedInquiry,
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