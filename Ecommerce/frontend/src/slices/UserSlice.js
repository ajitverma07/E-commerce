import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      sessionStorage.setItem('user',JSON.stringify(action.payload));
    },
    clearUser(state) {
      state.user = null;
      sessionStorage.removeItem('user');
    },
  },
});

export const { setUser, clearUser } = userDataSlice.actions;

export const selectUser = (state) => state.userData.user;

export default userDataSlice.reducer; 
