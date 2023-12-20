import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type userType = {
    id: string;
    gender: string;
    name: string;
    email: string;
    state: string;
    country: string;
  };


interface userData{
data:userType[];
filled:boolean;
}

const initialState: userData = {
    data:[],
    filled:false
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Action to update the user data
    setUsers: (state, action: PayloadAction<userType[]>) => {
      state.data = action.payload;
      state.filled=true
    },
  },
});

// Export action creators
export const { setUsers } = usersSlice.actions;

// Export the reducer
export default usersSlice.reducer;