import connectDB from "@/config/db";
import Employee from "@/models/Employee";

export async function GET() {
  try {
    await connectDB();

    const employees = await Employee.find().sort({
      createdAt: -1,
    });

    return Response.json({
      success: true,
      employees,
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

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const employee =
      await Employee.create(body);

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