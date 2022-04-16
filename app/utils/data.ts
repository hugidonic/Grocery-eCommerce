import { CategoryType } from '../modules/Categories/categories.types';
import { ProductType } from '../modules/Products/products.types';
import uuid from './uuid';

const colors: string[] = [
	'#F7B2BD',
	'#A6B1E1',
	'#EEEFA8',
	'#C8B8DB',
	'#B8DBD9',
	'#F5EE9E',
	'#B7FFD8',
	'#EAEFD3',
	'#B6B8D6'
];

const fruitImages = [
	{
		name: 'Bananas',
		image: require('../../assets/images/Bananas.png'),
	},
	{
		name: 'Apples',
		image: require('../../assets/images/Apples.png'),
	},
	{
		name: 'Kiwies',
		image: require('../../assets/images/Kiwies.png'),
	},
	{
		name: 'Oranges',
		image: require('../../assets/images/Oranges.png'),
	},
	{
		name: 'Pears',
		image: require('../../assets/images/Pears.png'),
	},
]

const categoryImages = [
	{
		name: 'Drinks',
		image: require('../../assets/images/Drinks.png'),
	},
	{
		name: 'Diary',
		image: require('../../assets/images/Diary.png'),
	},
	{
		name: 'Sauces',
		image: require('../../assets/images/Sauces.png'),
	},
	{
		name: 'Rice',
		image: require('../../assets/images/Rice.png'),
	},
	{
		name: 'Pulses',
		image: require('../../assets/images/Pulses.png'),
	},
	{
		name: 'Oils',
		image: require('../../assets/images/Oils.png'),
	},
]

const vegetableImages = [
	
	{
		name: 'Carrots',
		image: require('../../assets/images/Carrots.png'),
	},
	{
		name: 'Potatoes',
		image: require('../../assets/images/Potatoes.png'),
	},
	{
		name: 'Cucumbers',
		image: require('../../assets/images/Cucumbers.png'),
	},
	{
		name: 'Corns',
		image: require('../../assets/images/Corns.png'),
	},
	{
		name: 'Tomatoes',
		image: require('../../assets/images/Tomatoes.png'),
	},
]

export type DataType = {
	products?: {
		fruit?: ProductType[];
		vegetable?: ProductType[];
		all?: ProductType[];
		default?: ProductType[];
	};
	categories?: CategoryType[];
};

export const data: DataType = {
	products: {
		fruit: fruitImages.map((picture) => {
			return {
				productId: uuid(),
				type: 'fruit',
				name: picture.name,
				description: 'Organic',
				price: 4.99,
				picture: picture.image,
			};
		}),
		vegetable: vegetableImages.map((picture) => {
			return {
				productId: uuid(),
				type: 'vegetable',
				name: picture.name,
				description: 'Organic',
				price: 4.99,
				picture: picture.image,
			};
		}),
		all: [],
		default: [],
	},
	categories: categoryImages.map((picture, idx) => {
    return {
      categoryId: uuid(),
      name: picture.name,
      picture: picture.image,
      color: colors[idx],
    };
  }),
};

data.products.all = [ ...data.products.fruit, ...data.products.vegetable ];
data.products.all = [ ...data.products.fruit.slice(0,4) ];


export const dataJSON = JSON.stringify(data);