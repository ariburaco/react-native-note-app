import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import noteSlice from './slices/noteSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import thunk from 'redux-thunk';
import selectedNotesSlice from './slices/selectedNotesSlice';

const persistConfig = {
  key: 'notes',
  storage: AsyncStorage,
  whitelist: ['notes'],
};

const reducers = combineReducers({
  notes: noteSlice,
  selectedNotes: selectedNotesSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
