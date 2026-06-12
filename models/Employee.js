import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    role: String,
    experience: String,
    department: String,
    status: String,
    performance: Number,
  },
  {
    timestamps: true,
  }
);

const Employee =
  mongoose.models.Employee ||
  mongoose.model(
    "Employee",
    EmployeeSchema
  );

export default Employee;