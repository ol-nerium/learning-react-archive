import type { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  username: null | string;
}

const initialState: AuthState = {
  // Note: a real app would probably have more complex auth state,
  // but for this example we'll keep things simple
  username: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(_, action) {
      return { username: action.payload };
    },
    userLoggedOut() {
      return { username: null };
    },
  },
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export const selectCurrentUserName = (state: RootState) => state.auth.username;
