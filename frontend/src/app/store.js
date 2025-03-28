import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/quizSlice";
import userReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    quizzes: quizReducer,
    auth: userReducer,
  },
});

export default store;
