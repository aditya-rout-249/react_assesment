import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    email: "",
    isLoggedIn: false,
  },

  reducers: {
    login: (state, action) => {
      const { email } = action.payload;
      state.email = email;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.email = "";
      state.isLoggedIn = false;
     
    },
  },
});

export const { login, logout } = currentUserSlice.actions;

export const selectCurrentUser = (state) => state.currentUser;

export default currentUserSlice.reducer;
