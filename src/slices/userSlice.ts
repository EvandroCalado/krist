import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'username',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
