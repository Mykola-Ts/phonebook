import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    value: { sortByValue: 'id', sortOrderValue: 'asc' },
  },
  reducers: {
    sortContacts: {
      reducer(state, action) {
        state.value = { ...action.payload };
      },
    },
  },
});

export const { sortContacts } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
