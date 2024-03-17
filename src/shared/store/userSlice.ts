import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action) => {
      
    },
    signIn: (state, action) => {
      
    },
    signOut: (state, action) => {
      
    },
  },
});

export const { signUp, signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
