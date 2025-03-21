import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import quizRouter from "./routes/quizRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { connectDB } from "./config/connect.js";
dotenv.config();
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
const app = express();

app.use(cors());

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/quiz/", quizRouter);
app.use('/api/user',userRouter)

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT.yellow}`)
);
