// Slice for auth
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authAPI";

const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.data.user;
      }
    );
  },
});

//selectors
export const selectToken = (state) => state?.auth?.token;
export const selectUser = (state) => state?.auth?.user;
