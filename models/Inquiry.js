import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    service: String,
    status: {
  type: String,
  default: "New",
},
    message: String,
  },
  { timestamps: true }
);

const Inquiry =
  mongoose.models.Inquiry ||
  mongoose.model("Inquiry", InquirySchema);

export default Inquiry;