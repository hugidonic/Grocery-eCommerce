
export type ProductsState = {
	loading: boolean;
	errorMessage: null | string;
	products: null | ProductType[];
}

export type ProductType = {
	productId: string;

	name: string;
	type: 'fruit' | 'vegetable';
	description: string;
	richDescription?: string;
	price: number;

	pictureUri: string;
};
