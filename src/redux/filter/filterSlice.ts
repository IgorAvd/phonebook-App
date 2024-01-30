import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type FilterState = {
  filter: string;
};

const initialState: FilterState = {
  filter: '',
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filteredValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filteredValue } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

//Selector

export const getFilterValue = (state: RootState) => state.filter.filter;
