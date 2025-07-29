import { configureStore } from '@reduxjs/toolkit';
import supplierReducer from './supplierSlice';

const store = configureStore({
  reducer: {
    suppliers: supplierReducer,
  },
});

export default store;
