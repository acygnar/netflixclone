// apiDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    data: null,
  },
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
