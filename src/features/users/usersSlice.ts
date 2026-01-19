import { client } from '@/api/client';
import { selectCurrentUserName } from './../auth/authSLice';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

interface User {
  id: string;
  name: string;
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await client.get<User[]>('/fakeApi/users');
  return res.data;
});

const initialState: User[] = [];

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;
export const selectUserById = (state: RootState, userId: string | null) =>
  state.users.find(user => user.id === userId);

export const selectCurrentUser = (state: RootState) => {
  const currentUsername = selectCurrentUserName(state);
  return selectUserById(state, currentUsername);
};
