import { DeliveryAddressType, NotificationType, PaymentMethodType } from '../modules';
import { CategoryType } from '../modules/Categories/categories.types';
import { OrderItemType } from '../modules/Orders';
import { ProductType } from '../modules/Products/products.types';
import { colors as CONSTANT_COLORS } from '../theme';
import randomInt from './randomInt';
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
		image: require('../../assets/images/Bananas.png')
	},
	{
		name: 'Apples',
		image: require('../../assets/images/Apples.png')
	},
	{
		name: 'Kiwies',
		image: require('../../assets/images/Kiwies.png')
	},
	{
		name: 'Oranges',
		image: require('../../assets/images/Oranges.png')
	},
	{
		name: 'Pears',
		image: require('../../assets/images/Pears.png')
	}
];

const categoryImages = [
	{
		name: 'Drinks',
		image: require('../../assets/images/Drinks.png')
	},
	{
		name: 'Diary',
		image: require('../../assets/images/Diary.png')
	},
	{
		name: 'Sauces',
		image: require('../../assets/images/Sauces.png')
	},
	{
		name: 'Rice',
		image: require('../../assets/images/Rice.png')
	},
	{
		name: 'Pulses',
		image: require('../../assets/images/Pulses.png')
	},
	{
		name: 'Oils',
		image: require('../../assets/images/Oils.png')
	}
];

const vegetableImages = [
	{
		name: 'Carrots',
		image: require('../../assets/images/Carrots.png')
	},
	{
		name: 'Potatoes',
		image: require('../../assets/images/Potatoes.png')
	},
	{
		name: 'Cucumbers',
		image: require('../../assets/images/Cucumbers.png')
	},
	{
		name: 'Corns',
		image: require('../../assets/images/Corns.png')
	},
	{
		name: 'Tomatoes',
		image: require('../../assets/images/Tomatoes.png')
	}
];

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
				picture: picture.image
			};
		}),
		vegetable: vegetableImages.map((picture) => {
			return {
				productId: uuid(),
				type: 'vegetable',
				name: picture.name,
				description: 'Organic',
				price: 4.99,
				picture: picture.image
			};
		}),
		all: [],
		default: []
	},
	categories: categoryImages.map((picture, idx) => {
		return {
			categoryId: uuid(),
			name: picture.name,
			picture: picture.image,
			color: colors[idx]
		};
	})
};

data.products.all = [ ...data.products.fruit, ...data.products.vegetable ];
data.products.default = [ ...data.products.fruit.slice(0, 4) ];


const prodLength = data.products.all.length;

export const orders: OrderItemType[] = [
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 1234.99,
		type: 'FINISHED',
		cartItems: [
			{
				cartItemId: '589946',
				count: 4,
				product: data.products.all[randomInt(0, prodLength)]
			},
			{
				cartItemId: '128026',
				count: 1,
				product: data.products.all[randomInt(0, prodLength)]
			},
			{
				cartItemId: '4015535',
				count: 2,
				product: data.products.all[randomInt(0, prodLength)]
			},
		]
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	},
	{
		id: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED',
		cartItems: data.products.all.map((prod) => ({
			cartItemId: prod.productId,
			count: 2,
			product: prod
		}))
	}
];

export const UsersPaymentMethods: PaymentMethodType[] = [
	{
		id: uuid(),
		last4digits: '2334',
		color: CONSTANT_COLORS.primary,
		cardName: 'MasterCard'
	},
	{
		id: uuid(),
		last4digits: '4355',
		color: CONSTANT_COLORS.palette.deepPurple,
		cardName: 'MIR'
	},
	{
		id: uuid(),
		last4digits: '1232',
		color: CONSTANT_COLORS.palette.black,
		cardName: 'MAESTRO'
	},
	{
		id: uuid(),
		last4digits: '5466',
		color: CONSTANT_COLORS.primary,
		cardName: 'VISA'
	},
	{
		id: uuid(),
		last4digits: '3452',
		color: CONSTANT_COLORS.palette.darkerGreen,
		cardName: 'VISA'
	},
	{
		id: uuid(),
		last4digits: '5465',
		color: CONSTANT_COLORS.palette.green,
		cardName: 'MIR'
	},
	{
		id: uuid(),
		last4digits: '0978',
		color: CONSTANT_COLORS.palette.black,
		cardName: 'MasterCard'
	}
];

export const UsersDeliveryAddresses: DeliveryAddressType[] = [
	{
		id: uuid(),
		city: 'Kazan',
		street: 'Sirtlanova',
		house: '18',
		country: 'Russia'
	},
	{
		id: uuid(),
		city: 'Ufa',
		street: 'dfgdfjghlkejdsdrfsdfsdrtlkgtjelr',
		house: '18',
		country: 'Russia'
	},
	{
		id: uuid(),
		city: 'Moscow',
		street: 'Orenbsdfsdgrsd',
		house: '8',
		country: 'Russia'
	},
	{
		id: uuid(),
		city: 'Agidel',
		street: 'Mosdsagk',
		house: '23',
		country: 'USA'
	}
];

export const UsersPromoCards = [
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-09-23').toISOString(),
		endDate: new Date('2022-11-23').toISOString(),
		price: 10
	},
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-02-23').toISOString(),
		endDate: new Date('2024-12-23').toISOString(),
		price: 500
	},
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-09-23').toISOString(),
		endDate: new Date('2023-01-23').toISOString(),
		price: 5
	},
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-09-23').toISOString(),
		endDate: new Date('2023-01-23').toISOString(),
		price: 15
	},
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-09-23').toISOString(),
		endDate: new Date('2023-01-23').toISOString(),
		price: randomInt() + 1
	},
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-09-23').toISOString(),
		endDate: new Date('2023-01-23').toISOString(),
		price: randomInt() + 1
	}
];

export const dataJSON = JSON.stringify(data);


export const UsersNotifications: NotificationType[] = [
	{
		id: uuid(),
		isRead: false,
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'FIRE'
	},
	{
		id: uuid(),
		isRead: false,
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'SALE'
	},
	{
		id: uuid(),
		isRead: false,
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'QUESTION'
	},
	{
		id: uuid(),
		isRead: false,
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'SALE'
	},
	{
		id: uuid(),
		isRead: false,
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'QUESTION'
	},
	{
		id: uuid(),
		isRead: false,
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'FIRE'
	},
	{
		id: uuid(),
		isRead: false,
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'SALE'
	},
	{
		id: uuid(),
		isRead: false,
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'FIRE'
	}
];