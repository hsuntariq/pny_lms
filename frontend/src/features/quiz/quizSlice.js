// import these 2 things always in the slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuiz } from "./quizService";

// define initialState

const initialState = {
  quiz: [],
  quizLoading: false,
  quizSuccess: false,
  quizError: false,
  quizMessage: "",
};

// import the service function

export const addQuizData = createAsyncThunk(
  "add-quiz",
  async (quizData, thunkAPI) => {
    try {
      return await addQuiz(quizData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// create the slice

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    quizReset: (state) => {
      state.quizError = false;
      state.quizLoading = false;
      state.quizMessage = false;
      state.quizSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addQuizData.pending, (state, action) => {
        state.quizLoading = true;
      })
      .addCase(addQuizData.rejected, (state, action) => {
        state.quizLoading = false;
        state.quizError = true;
        state.quizMessage = action.payload;
      })
      .addCase(addQuizData.fulfilled, (state, action) => {
        state.quizLoading = false;
        state.quizSuccess = true;
        state.quiz.push(action.payload);
      });
  },
});

// export the slice
export default quizSlice.reducer;
// export the reducer funcitons

export const { quizReset } = quizSlice.actions;
