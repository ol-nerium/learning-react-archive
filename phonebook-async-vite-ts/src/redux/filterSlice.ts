import { createSlice } from '@reduxjs/toolkit';
import type { filterType, stateType } from '@/utils/types';

const initialState: filterType = {
  value: '',
};

const filterReducer = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilterValue(_, action) {
      return { value: action.payload };
    },
  },
});

export const selectNameFilter = (state: stateType) => state.filter.value;

export default filterReducer.reducer;
export const { setFilterValue } = filterReducer.actions;
