import { createSlice } from '@reduxjs/toolkit';
import uuid from '../../../utils/uuid';

type ProductType = {
	productId: string;

	type: 'fruit' | 'vegetable';
	name: string;
	description: string;
	price: number;

	pictureUri: ReturnType<typeof require>;
};

const initialState: ProductType = {
  productId: null,
  type: null,
  name: null,
  description: null,
  price: null,
  pictureUri: null
};

const ProductSlice = createSlice({
	name: 'Product',
	initialState,
  reducers: {
    
  }
});

export { ProductType, ProductSlice };
