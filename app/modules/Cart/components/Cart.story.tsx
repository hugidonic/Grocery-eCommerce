// React
import React from 'react';
import { Dimensions } from 'react-native';
// StoryBook
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../../storybook/views';
// Utils
import { ProductType } from '../../Products';
import { data } from '../../../utils/data';
// Components
import { Block, Button } from '../../../components';
// Stories
import { CartList } from './CartList/CartList';
import { CartItemComponent } from './CartItem/CartItem.component';
import { Checkout } from './Checkout/Checkout';
import { OperationBtn } from './OperationBtn/OperationBtn';

const product: ProductType = data.products.all[0];

storiesOf('CartList', module)
	.addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
	.add('CartList', () => (
		<Story>
			<UseCase text="Cart list in Cart Screen">
				<CartList
					cartItems={data.products.all.map((product) => ({
						product,
						count: 1,
						cartItemId: product.productId
					}))}
				/>
			</UseCase>
		</Story>
	))
	.add('CartItem', () => (
		<Story>
			<UseCase style={{ paddingVertical: 20 }} text="Cart list Item">
				<CartItemComponent cartItem={{ count: 1, product, cartItemId: '125' }} />
			</UseCase>
		</Story>
	))
	.add('Checkout', () => <CheckoutStory />)
	.add('OperationBtn', () => (
		<Story>
			<UseCase text="Primary">
				<OperationBtn type="Decrement" />
			</UseCase>
			<UseCase text="Primary">
				<OperationBtn type="Increment" />
			</UseCase>
		</Story>
	));

const { height } = Dimensions.get('screen');

const CheckoutStory = () => {
	const ref = React.useRef(null);

	const openSheet = () => {
		ref.current.snapTo(1);
	};

	return (
		<Block flex style={{ height }}>
			<Button text="Open" onPress={openSheet} />
			<Checkout sheetRef={ref} initialPos={0} />
		</Block>
	);
};
