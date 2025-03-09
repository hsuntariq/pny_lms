import mongoose from "mongoose";

const quizSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    max_marks: {
      type: Number,
      required: true,
    },
    batch_no: {
      type: Number,
      required: true,
    },
    course_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Quiz = mongoose.model("Quiz", quizSchema);
