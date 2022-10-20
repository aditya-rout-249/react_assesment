import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./reducers/LoginSlice";
import { persistReducer, persistStore } from "redux-persist";
import usersReducer from "./reducers/taskListSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "users",
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    login: currentUserReducer,
    storage: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
