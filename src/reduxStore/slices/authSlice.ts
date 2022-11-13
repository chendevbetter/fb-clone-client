import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    id: 0,
    firstName: "",
    lastName: "",
  },
  reducers: {
    login: (state, action) => {
      const { id, first_name, last_name } = action.payload;
      state.authenticated = true;
      state.id = id;
      state.firstName = first_name;
      state.lastName = last_name;
    },
    logout: (state) => {
      state.authenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
