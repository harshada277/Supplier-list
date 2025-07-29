import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    addSupplier: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addSupplier } = supplierSlice.actions;
export default supplierSlice.reducer;
