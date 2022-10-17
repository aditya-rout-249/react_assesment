import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    isLoggedIn: false,
    taskList: [],
  },

  reducers: {
    logingin: (state, action) => {
      const { email, tasklist } = action.payload;
      console.log(action.payload);
      state.email = email;
      state.taskList = tasklist;
      state.isLoggedIn = !state.isLoggedIn;
    },

    logout: (state) => {
      state.email = "";
      state.isLoggedIn = !state.isLoggedIn;
      state.taskList = null;
    },
  },
});

export const { logingin, logout } = loginSlice.actions;

export const selectlogin = (state) => state.login;

export default loginSlice.reducer;
