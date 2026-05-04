import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    //register
    builder.addCase(register.pending, (state, action) => {
      return { ...state, isLoggedIn: false };
    });
    builder.addCase(register.fulfilled, (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true,
      };
    });
    builder.addCase(register.rejected, (state, action) => {
      console.log('rejected with', action.error.message);
      return {
        ...state,
        isLoggedIn: false,
      };
    });
    //
    //login
    builder.addCase(login.pending, (state, action) => {
      return { ...state, isLoggedIn: false };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.error.message);
      return {
        ...state,
        isLoggedIn: false,
      };
    });
    //
    //logout
    builder.addCase(logout.pending, (state, _) => {
      // return { ...state };
      console.log('logging out...');
    });
    builder.addCase(logout.fulfilled, () => {
      return initialState;
    });
    builder.addCase(logout.rejected, (state, _) => {
      console.log('logout is rejected... :state, action', state, action);
      // return { ...state };
      console.log('logging out error');
    });
    //
    //refreshUser
    builder.addCase(refreshUser.pending, (state, _) => {
      return { ...state, isRefreshing: true };
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isRefreshing: false,
      };
    });
    builder.addCase(refreshUser.rejected, (state, _) => {
      return {
        ...state,
        isLoggedIn: false,
        isRefreshing: false,
      };
    });
    //
    //
  },
});

export default authSlice.reducer;
// export const { testReducer } = authSlice.actions;
