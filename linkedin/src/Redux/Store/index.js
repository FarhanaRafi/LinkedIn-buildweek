import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";

import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import myProfileReducer from "../Reducers/myProfileReducer";
import profilesReducer from "../Reducers/profilesReducer";
import experienceReducer from "../Reducers/ExperienceReducer";
import postReducer from "../Reducers/postReducer";
import selectedPostReducer from "../Reducers/selectedPostReducer";
import imageReducer from "../Reducers/ImageReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transform: [
    encryptTransform({
      secretKey: "process.env.REACT_APP_PASSWORD",
    }),
  ],
};

const bigReducer = combineReducers({
  profile: myProfileReducer,
  profiles: profilesReducer,
  experience: experienceReducer,
  posts: postReducer,
  selectedPost: selectedPostReducer,
  image: imageReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
