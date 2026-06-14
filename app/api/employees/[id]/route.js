import connectDB from "@/config/db";
import Employee from "@/models/Employee";

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const body = await req.json();

    const employee =
      await Employee.findByIdAndUpdate(
        params.id,
        body,
        { new: true }
      );

    return Response.json({
      success: true,
      employee,
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

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    await Employee.findByIdAndDelete(
      params.id
    );

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