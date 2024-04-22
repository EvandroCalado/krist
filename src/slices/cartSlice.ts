import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'cart',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
