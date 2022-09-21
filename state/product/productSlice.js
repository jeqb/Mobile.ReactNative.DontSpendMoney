import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createProduct: (state, action) => {

      console.log('createProduct called')
      console.log('createProduct action.payload: ', action.payload)

      state.value.push(action.payload)
    }
  }
})

export const { createProduct } = productSlice.actions;

export default productSlice.reducer;
