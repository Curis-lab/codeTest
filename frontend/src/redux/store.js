// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './rtkQuery';

export const store = configureStore({
  reducer: {
    // Add the API slice reducer to your store
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Add the api middleware to enable caching, invalidation, polling, and other features
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});