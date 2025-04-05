import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, logUser, regUser, verifyOTP } from "./userService";

// check for user

const isUser = JSON.parse(localStorage.getItem("user"));

// define global state

const initialState = {
  user: isUser ? isUser : null,
  userLoading: false,
  userError: false,
  userSuccess: false,
  userMessage: "",
  allUsers: [],
};

// call the service's function

export const regUserData = createAsyncThunk(
  "user-register",
  async (userData, thunkAPI) => {
    try {
      return await regUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const logUserData = createAsyncThunk(
  "user-login",
  async (userData, thunkAPI) => {
    try {
      return await logUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllUsersData = createAsyncThunk(
  "all-users",
  async (_, thunkAPI) => {
    try {
      return await getAllUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const verifyOTPData = createAsyncThunk(
  "user-verify",
  async (otpData, thunkAPI) => {
    try {
      return await verifyOTP(otpData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// create slice

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userError = false;
      state.userSuccess = false;
      state.userMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUserData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(regUserData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(regUserData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(logUserData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(logUserData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(logUserData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(verifyOTPData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(verifyOTPData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(verifyOTPData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(getAllUsersData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(getAllUsersData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(getAllUsersData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.allUsers = action.payload;
      });
  },
});

// export to make it global

export default userSlice.reducer;
export const { userReset } = userSlice.actions;
