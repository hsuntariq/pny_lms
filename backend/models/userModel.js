import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
      default: "student",
    },
    otp: {
      type: Number,
      default: null,
    },
    batch_no: {
      type: Number,
      default: null,
    },
    course_name: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const user = mongoose.model("User", userSchema);
