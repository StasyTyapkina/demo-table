import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

window.store = store;

export default store;
