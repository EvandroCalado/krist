import { createSlice } from '@reduxjs/toolkit';

const getUserFromStorage = () => {
  const user = localStorage.getItem('user');
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
      localStorage.setItem('user', JSON.stringify(user));
    },
    userLogout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
