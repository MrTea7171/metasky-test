import { createSlice } from '@reduxjs/toolkit';

// Initial state for the authentication slice
const initialState = {
  isLoggedIn: false,
};

// Create a slice of the Redux store
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the user as logged in
    login: (state) => {
      state.isLoggedIn = true;
    },
    
    // Action to set the user as logged out
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Export the action creators
export const { login, logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;