// src/store/reducers/exampleReducer.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialStateProps {
  isLoggedIn: boolean;
  userData: any;
}

const initialState: InitialStateProps = {
  isLoggedIn: false,
  userData: {},
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state: InitialStateProps) => {
      state.isLoggedIn = true;
    },
    clearUser: (state: InitialStateProps, action: PayloadAction<any>) => {
      state = action.payload;
    },
  },
});

export const {setUser, clearUser} = loginSlice.actions;

export default loginSlice.reducer;
