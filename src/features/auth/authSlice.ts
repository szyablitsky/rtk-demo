import { createSlice } from "@reduxjs/toolkit";

import { loginApi } from "../../app/services/login";
import { RootState } from "../../app/store";

const initialState = {
  token: null,
  isAuthenticated: false,
} as { token: string | null; isAuthenticated: boolean };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.loginUser.matchFulfilled,
      (state, action) => {
        state.token = action.payload?.key ?? "";
        state.isAuthenticated = true;
      }
    );
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
