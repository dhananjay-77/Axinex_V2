import connectDB from "@/config/db";
import Employee from "@/models/Employee";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    await Employee.findByIdAndDelete(id);

    return Response.json({
      success: true,
      message: "Employee Deleted",
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
export async function PUT(req, context) {
  try {

    await connectDB();

    const body =
      await req.json();
      const { id } = await context.params;

    const employee =
      await Employee.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!employee) {
      return Response.json(
        {
          success: false,
          message:
            "Employee not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({
      success: true,
      employee,
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