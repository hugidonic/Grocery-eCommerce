// React
import React from 'react';
// StoryBook
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../storybook/views';
import { Product } from './product';
// types
import { data } from '../../utils/data';
import { Text } from '..';

declare let module

const product = data.products.fruits[1]

storiesOf('Product', module)
	.addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
	.add('Behavior', () => (
		<Story>
			<UseCase text="Product Component" usage="The primary">
				<Product product={product} />
			</UseCase>
		</Story>
	));
