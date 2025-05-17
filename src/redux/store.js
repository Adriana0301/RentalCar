import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { carsReducer } from "./cars/slice";
import { filterReducer } from "./filter/slice";
import { favoriteReducer } from "./favourite/slice";

const favoritesPersistConfig = {
  key: "favoriteCars",
  storage,
  whitelist: ["cars"],
};

const persistFavoriteReducer = persistReducer(
  favoritesPersistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
    favourite: persistFavoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
