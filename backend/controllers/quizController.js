import asyncHandler from "express-async-handler";
import { Quiz } from "../models/quizModel.js";

export const addQuiz = asyncHandler(async (req, res) => {
  const { question, deadline, time, max_marks, batch_no, course_name } =
    req.body;

  if (
    !question ||
    !deadline ||
    !time ||
    !max_marks ||
    !batch_no ||
    !course_name
  ) {
    res.status(400);
    throw new Error("Please enter all the values");
  }

  const newQuiz = await Quiz.create({
    question,
    deadline,
    time,
    max_marks,
    batch_no,
    course_name,
  });

  res.send(newQuiz);
});

export const getQuizzes = asyncHandler(async (req, res) => {
  const allQuizzes = await Quiz.find();
  res.send(allQuizzes);
});
