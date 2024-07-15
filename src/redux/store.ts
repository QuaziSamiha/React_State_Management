import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import Logger from "./middleware/Logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // devTools: false
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger)
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
