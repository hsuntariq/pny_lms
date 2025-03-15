import express from "express";
import { addQuiz, getQuizzes } from "../controllers/quizController.js";

const quizRouter = express.Router();

quizRouter.post("/add-quiz", addQuiz);
quizRouter.get("/get-quizzes", getQuizzes); //http://localhost:3001/api/quiz/get-quiz

export default quizRouter;
