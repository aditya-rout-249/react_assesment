import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    
  },
  reducers: {
    register: (state, action) => {
      let user = { password: action.payload.password, tasklist: [] };
      let email = action.payload.email;
      state[email] = user;
    },
    saveUserStatus: (state, action) => {
      const { email, taskList } = action.payload;
      const user = state[email];
      user.taskList = taskList;
      state[email] = user;
    },
  },
});

export const { register, saveUserStatus } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
