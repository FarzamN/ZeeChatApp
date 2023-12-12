import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userDetail',
  initialState: {
    value: null,
    isLoggedIn: false, // Add a flag to indicate if the user is logged in or not
  },
  reducers: {
    addUser(state, action) {
      state.value = action.payload;
      state.isLoggedIn = true; // Set isLoggedIn to true upon successful login
    },
    logoutUser(state) {
      state.value = null;
      state.isLoggedIn = false; // Reset isLoggedIn to false upon logout
    },
  },
});

export const { addUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
