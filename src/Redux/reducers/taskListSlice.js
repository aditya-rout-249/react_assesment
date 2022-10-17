import { createSlice } from "@reduxjs/toolkit";

const storageSlice = createSlice({
  name: "storage",
  initialState: {
    users: {},
  },
  reducers: {
    register: (state, action) => {
      let user = { password: action.payload.password, tasklist: [] };
      let email = action.payload.email;
      state.users[email] = user;
    },
    saveUserStatus: (state, action) => {
      const { email, taskList } = action.payload;
      const user = state.users[email];
      user.taskList = taskList;
      state.users[email] = user;
    },
  },
});

export const { register, saveUserStatus } = storageSlice.actions;

export const getUsers = (state) => state.storage.users;

export default storageSlice.reducer;
