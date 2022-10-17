import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/LoginSlice";
import { persistReducer, persistStore } from "redux-persist";
import storageReducer from "./reducers/taskListSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "storage",
  storage,
};

const persistedReducer = persistReducer(persistConfig, storageReducer);

export const store = configureStore({
  reducer: {
    login: loginReducer,
    storage: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
