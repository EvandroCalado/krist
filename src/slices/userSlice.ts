import { createSlice } from '@reduxjs/toolkit';

const getUserFromStorage = () => {
  const user = sessionStorage.getItem('user');
  if (!user) return null;
  return JSON.parse(user);
};

const initialState = {
  user: getUserFromStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const user = action.payload;

      state.user = user;
      sessionStorage.setItem('user', JSON.stringify(user));
    },
    userLogout: (state) => {
      state.user = null;
      sessionStorage.removeItem('user');
    },
  },
});

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;
