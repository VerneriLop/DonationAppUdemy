import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
//import {logger} from 'redux-logger';
import User from './reducers/User';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
  /*middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  },*/
});

export default store;
