/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../storybook/views';
import { text, number, optionsKnob, array, select } from '@storybook/addon-knobs';

import { Text } from './Text';
import { colors } from '../../theme';
import { FontSizesType, FontWeightsType } from './Text.props';

storiesOf('Text', module)
	.addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
	.addParameters({
		options: optionsKnob
	})
	.add('Universal', () => {
		type names = {
			small: 'small';
			regular: 'regular';
			medium: 'medium';
			large: 'large';
			title: 'title';
		};

		const fontSizeNames: names = {
			small: 'small',
			regular: 'regular',
			medium: 'medium',
			large: 'large',
			title: 'title'
		};
		type weights = {
      thin: "thin",
      light: "light",
      regular: "regular",
      medium: "medium",
      bold: "bold",
      black: "black",
		};

		const fontSizeWeights: weights = {
      thin: "thin",
      light: "light",
      regular: "regular",
      medium: "medium",
      bold: "bold",
      black: "black",
		};

		return (
			<Story>
				<UseCase
					text={select('Size', fontSizeNames, fontSizeNames.title, 'SIZES')}
				>
					<Text
            weight={select<FontWeightsType>(
							'Weight',
							fontSizeWeights,
							fontSizeWeights.black,
							'WEIGHTS'
						)}
						size={select<FontSizesType>(
							'Size',
							fontSizeNames,
							fontSizeNames.title,
							'SIZES'
						)}
						color={colors.palette.black}
					>
						{text('Change text', 'Hello world', 'TEXT')}
					</Text>
				</UseCase>
			</Story>
		);
	})
	.add('Text Weights', () => {
		return (
			<Story>
				<UseCase text="black">
					<Text weight="black" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="bold">
					<Text weight="bold" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="medium">
					<Text weight="medium" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="regular">
					<Text weight="regular" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="light">
					<Text weight="light" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="thin">
					<Text weight="thin" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
			</Story>
		);
	})
	.add('Text sizes', () => {
		return (
			<Story>
				<UseCase text="title">
					<Text size="title" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="large">
					<Text size="large" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="medium">
					<Text size="medium" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="regular">
					<Text size="regular" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
				<UseCase text="small">
					<Text size="small" color={colors.palette.black}>
						Hello beaches
					</Text>
				</UseCase>
			</Story>
		);
	});
