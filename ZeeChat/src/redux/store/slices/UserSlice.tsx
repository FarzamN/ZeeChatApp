import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userDetail',
  initialState: {
    value: null,
  },
  reducers: {
    addUser(state, action) {},
  },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
