import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  name: string;
  email: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  name: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuthenticated = true;
      state.name = payload.name;
      state.email = payload.email;
    },
    reset: () => initialState,
  },
});

export const { setAuth, reset } = authSlice.actions;

export default authSlice.reducer;
