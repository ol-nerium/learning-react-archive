import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { use } from 'react';
interface AuthState {
  username: null | string;
}

const initialState = {
  // Note: a real app would probably have more complex auth state,
  // but for this example we'll keep things simple
  username: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogIn(state, action) {
      return { username: action.payload };
    },
    userLogOut(state, action) {
      return { username: null };
    },
  },
});

export default authSlice.reducer;
export const { userLogIn, userLogOut } = authSlice.actions;
export const selectCurrentUserName = (state: RootState) => state.auth.username;
