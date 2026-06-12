import connectDB from "@/config/db";
import Inquiry from "@/models/Inquiry";

export async function GET() {
  try {

    await connectDB();

    const totalInquiries =
      await Inquiry.countDocuments();

    const newCount =
      await Inquiry.countDocuments({
        status: "New",
      });

    const contactedCount =
      await Inquiry.countDocuments({
        status: "Contacted",
      });

    const resolvedCount =
      await Inquiry.countDocuments({
        status: "Resolved",
      });

    return Response.json({
      success: true,

      totalInquiries,

      newCount,

      contactedCount,

      resolvedCount,
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