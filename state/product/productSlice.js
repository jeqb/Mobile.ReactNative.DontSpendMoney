import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      key: 1,
      name: 'M&P Alluminium',
      cost: 1,
      url: 'smith-wesson.com',
      wantIntensity: 'A LOT',
      isNeeded: 'no'
    },
    {
      key: 2,
      name: 'Electric Scooter',
      cost: 1,
      url: 'electric-scooter.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 3,
      name: 'Video Card',
      cost: 1,
      url: 'amd.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 4,
      name: '126 GB Ram',
      cost: 1,
      url: 'Amazon.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 5,
      name: 'Polymer 80 Frame',
      cost: 1,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 6,
      name: 'Polymer 80 jig',
      cost: 1,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 7,
      name: 'M&P Alluminium',
      cost: 1,
      url: 'smith-wesson.com',
      wantIntensity: 'A LOT',
      isNeeded: 'no'
    },
    {
      key: 8,
      name: 'Electric Scooter',
      cost: 1,
      url: 'electric-scooter.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 9,
      name: 'Video Card',
      cost: 1,
      url: 'amd.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 10,
      name: '126 GB Ram',
      cost: 1,
      url: 'Amazon.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 11,
      name: 'Polymer 80 Frame',
      cost: 1,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 12,
      name: 'Polymer 80 jig',
      cost: 1,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 13,
      name: 'M&P Alluminium',
      cost: 1,
      url: 'smith-wesson.com',
      wantIntensity: 'A LOT',
      isNeeded: 'no'
    },
    {
      key: 14,
      name: 'Electric Scooter',
      cost: 1,
      url: 'electric-scooter.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 15,
      name: 'Video Card',
      cost: 1,
      url: 'amd.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 16,
      name: '126 GB Ram',
      cost: 1,
      url: 'Amazon.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 17,
      name: 'Polymer 80 Frame',
      cost: 1,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 18,
      name: 'Polymer 80 jig',
      cost: 1,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    }
  ]
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
