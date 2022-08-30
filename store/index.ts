import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducers = combineReducers({
  counter: counterSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
