import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, action) {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    login(state, action) {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { registerUser, login } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (state) => state.user.currentUser;
export const getIsAuthenticated = (state) => state.user.isAuthenticated;
