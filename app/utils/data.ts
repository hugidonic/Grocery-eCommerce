import { GroupType, ProductType } from '../models';
import uuid from './uuid';
const groupColors: string[] = [
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
export const images = {
	groups: [
		{
			name: "Drinks",
			image: require('../../assets/images/Drinks.png')
		},
		{
			name: "Diary",
			image: require('../../assets/images/Diary.png')
		},
		{
			name: "Sauces",
			image: require('../../assets/images/Sauces.png')
		},
		{
			name: "Rice",
			image: require('../../assets/images/Rice.png')
		},
		{
			name: "Pulses",
			image: require('../../assets/images/Pulses.png')
		},
		{
			name: "Oils",
			image: require('../../assets/images/Oils.png')
		},

	],
	vegetables: [
		{
			name: "Carrots",
			image: require('../../assets/images/Carrots.png')
		},
		{
			name: "Potatoes",
			image: require('../../assets/images/Potatoes.png')
		},
		{
			name: "Cucumbers",
			image: require('../../assets/images/Cucumbers.png')
		},
		{
			name: "Corns",
			image: require('../../assets/images/Corns.png')
		},
		{
			name: "Tomatoes",
			image: require('../../assets/images/Tomatoes.png')
		},
	],
	fruits: [
		{
			name: "Bananas",
			image: require('../../assets/images/Bananas.png')
		},
		{
			name: "Apples",
			image: require('../../assets/images/Apples.png')
		},
		{
			name: "Kiwies",
			image: require('../../assets/images/Kiwies.png')
		},
		{
			name: "Oranges",
			image: require('../../assets/images/Oranges.png')
		},
		{
			name: "Pears",
			image: require('../../assets/images/Pears.png')
		},
	]
};

type DataType = {
	products: {
		fruits: ProductType[];
		vegetables: ProductType[];
	};
	groups: GroupType[];
};

export const data: DataType = {
	products: {
		fruits: images.fruits.map((image) => {
			return {
				productId: uuid(),
				name: image.name,
				description: 'Organic',
				price: 4.99,
				pictureUri: image.image
			};
		}),
		vegetables: images.fruits.map((image) => {
			return {
				productId: uuid(),
				name: image.name,
				description: 'Organic',
				price: 4.99,
				pictureUri: image.image
			};
		})
	},
	groups: [...images.groups.map((image, idx) => {
		return {
			groupId: uuid(),
			name: image.name,
			color: groupColors[idx],
			picture: image.image
		};
	}), ...images.groups.map((image, idx) => {
		return {
			groupId: uuid(),
			name: image.name,
			color: groupColors[idx],
			picture: image.image
		};
	})]
};


// @ts-ignore
const user = {
	userId: 'id1',
	name: '',
	email: '',
	cartItems: [ 'id1', 'id2', 'id3' ],
	favoriteItems: [ 'id1', 'id2', 'id3' ]
};

// @ts-ignore
const productList = {
	products: [ 'id1', 'id2', 'id3', 'id4' ]
};

// @ts-ignore
const product = {
	productId: 'id1',
	name: '',
	description: '',
	price: 12,
	pictureUri: ''
};
