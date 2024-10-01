import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});

export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  const response = await axios.post("http://localhost:3000/users", newUser);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export default userSlice.reducer;
