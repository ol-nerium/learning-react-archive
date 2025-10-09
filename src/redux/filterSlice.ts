import { createSlice } from '@reduxjs/toolkit';

const filterReducer = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilterValue(_, action) {
      return { value: action.payload };
    },
  },
});

export default filterReducer.reducer;
export const { setFilterValue } = filterReducer.actions;
