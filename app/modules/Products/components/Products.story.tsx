// React
import React from 'react';
import { Dimensions } from 'react-native';
// Storybook
import { storiesOf } from '@storybook/react-native';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';
// Stories
import { ProductComponent } from './Product/Product.component';
import { ProductListComponent } from './ProductList/ProductList.component';
import { ProductDetailsInfoComponent } from './ProductDetailsInfo/ProductDetailsInfo.component';
// Components
import { Block } from '../../../components';
import { data } from '../../../utils/data';

const { height } = Dimensions.get('screen');

storiesOf('Products', module)
	.addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
	.add('Product', () => (
		<Story>
			<UseCase text="Single Product">
				<ProductComponent product={data.products.all[0]} />
			</UseCase>
		</Story>
	))
	.add('Products List', () => (
		<Story>
			<UseCase text="List of products">
				<ProductListComponent title="All" productsList={data.products.all} />
			</UseCase>
		</Story>
	))
	.add('Product Details info', () => <ProductDetailsInfoStory />);

// Function that literally does nothing
const bloop = () => {}

const ProductDetailsInfoStory = () => {
	return (
		<Block style={{ height }}>
			<ProductDetailsInfoComponent
				isProductInCart={true}
				addToFavorite={bloop}
				removeFromFavorite={bloop}
				addToCart={bloop}
				removeFromCart={bloop}
				isFavorite={true}
				product={data.products.all[0]}
			/>
		</Block>
	);
};
