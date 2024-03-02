import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: sessionStorage.getItem('token') || '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      sessionStorage.setItem('token', action.payload);
    },
    clearToken(state) {
      state.token = '';
      sessionStorage.removeItem('token');
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
