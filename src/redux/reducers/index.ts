// src/store/reducers/index.ts
import {combineReducers} from '@reduxjs/toolkit';
// Import your individual reducers here
import login from './auth/login';

const rootReducer = combineReducers({
  login: login,
  // Add other reducers here
});

export default rootReducer;
