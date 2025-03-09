import express from "express";
import { addQuiz } from "../controllers/quizController.js";

const quizRouter = express.Router();

quizRouter.post("/add-quiz", addQuiz);

export default quizRouter;
