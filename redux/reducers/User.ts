import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type UserState = {
  firstName: string;
  lastName: string;
  userId: number;
};

const initialState: UserState = {
  firstName: 'Verneri',
  lastName: 'Lopperi',
  userId: 1,
};

export const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<{firstName: string}>) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateFirstName} = User.actions;
export default User.reducer;
