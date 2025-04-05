import express from "express";
import {
  getUsers,
  loginUser,
  registerUser,
  verifyOTP,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register-user", registerUser);
userRouter.post("/login-user", loginUser);
userRouter.post("/verify-otp/:id", verifyOTP);
userRouter.get("/get-all-users", getUsers);
export default userRouter;
