import { CREATE_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT,
  DELETE_PRODUCT, LIST_PRODUCTS } from './productConstants';

export const createProduct = (id, name, cost, url, wantIntensity, isNeeded) => {

  return { 
    type: CREATE_PRODUCT,
    payload: {
      id,
      name,
      cost,
      url,
      wantIntensity,
      isNeeded
    }
  }
};
