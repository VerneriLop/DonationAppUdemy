import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {logger} from 'redux-logger';
import User from './reducers/User';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }); //.concat(logger);
  },
});

export default store;
export const persistor = persistStore(store);
//persistor.purge(); initialises the whole store. You can also use reset reducers for each reducer if do not want to initialise the whole store and just one state
