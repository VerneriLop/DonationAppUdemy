import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type UserState = {
  isLoggedIn: boolean;
  profileImage: string;
  displayName: string;
  email: string;
  token: string;
};

const initialState: UserState = {
  isLoggedIn: false,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
  displayName: '',
  email: '',
  token: '',
};

export const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {logIn, resetToInitialState} = User.actions;
export default User.reducer;
