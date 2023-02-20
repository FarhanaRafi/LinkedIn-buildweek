import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";

import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import myProfileReducer from "../Reducers/myProfileReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transform: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PASSWORD,
    }),
  ],
};

const bigReducer = combineReducers({
  profile: myProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
