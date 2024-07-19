// src/store/configureStore.ts
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// Import your reducers
import rootReducer from './reducers'; // Adjust the path as needed

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(thunk, logger),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
