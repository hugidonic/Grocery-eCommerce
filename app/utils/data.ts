
// import { IMAGES_URL } from '../constants/images';
// import { CategoryType } from '../modules/Categories/categories.types';
// import { ProductType } from '../modules/Products/products.types';
// import uuid from './uuid';

// const colors: string[] = [
// 	'#F7B2BD',
// 	'#A6B1E1',
// 	'#EEEFA8',
// 	'#C8B8DB',
// 	'#B8DBD9',
// 	'#F5EE9E',
// 	'#B7FFD8',
// 	'#EAEFD3',
// 	'#B6B8D6'
// ];

// export const categoriesNamesList = [
// 	'Drinks',
// 	'Diary',
// 	'Sauces',
// 	'Rice',
// 	'Pulses',
// 	'Oils',
// ]

// export const fruitNamesList = [
// 	'Bananas',
// 	'Apples',
// 	'Kiwies',
// 	'Oranges',
// 	'Pears',
// ]

// export const vegetableNamesList = [
// 	'Carrots',
// 	'Potatoes',
// 	'Cucumbers',
// 	'Corns',
// 	'Tomatoes',
// ]

// export type DataType = {
// 	products?: {
// 		fruit?: ProductType[];
// 		vegetable?: ProductType[];
// 		all?: ProductType[];
// 	};
// 	categories?: CategoryType[];
// };

// export const data: DataType = {
// 	products: {
// 		fruit: fruitNamesList.map((name) => {
// 			return {
// 				productId: uuid(),
// 				type: 'fruit',
// 				name: name,
// 				description: 'Organic',
// 				price: 4.99,
// 				pictureUri: `${IMAGES_URL}/${name}.png`
// 			};
// 		}),
// 		vegetable: vegetableNamesList.map((name) => {
// 			return {
// 				productId: uuid(),
// 				type: 'vegetable',
// 				name: name,
// 				description: 'Organic',
// 				price: 4.99,
// 				pictureUri: `${IMAGES_URL}/${name}.png`
// 			};
// 		}),
// 		all: []
// 	},
// 	categories: [
// 		...categories.map((name, idx) => {
// 			return {
// 				groupId: uuid(),
// 				name: name,
// 				color: colors[idx],
// 			};
// 		}),
// 		...categories.map((name, idx) => {
// 			return {
// 				groupId: uuid(),
// 				name: image.name,
// 				color: colors[idx],
// 				pictureUri: image.image
// 			};
// 		})
// 	]
// };

// data.products.all = [ ...data.products.fruit, ...data.products.vegetable ];


// export const dataJSON = JSON.stringify(data);