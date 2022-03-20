import { StyleProp, TextProps as TextProperties, TextStyle } from 'react-native';
import { TextPresets } from './Text.presets';

export interface TextProps extends TextProperties {
	/**
   * Text content but without children.
   */
	text?: string;
	/**
   * Children components.
   */
	children?: React.ReactNode;

	/**
   * Color of the text
  */
	color?: string;
  /**
   * Font weight of the text
   */
	weight?: FontWeightsType;
  /**
   * Font size of the text
   */
   size?: FontSizesType;
	/**
   * An optional style override useful for padding & margin.
   */
	style?: StyleProp<TextStyle>;

	/**
   * One of the different types of text presets.
   */
	preset?: TextPresets;
}

export const FontWeights = {
  thin: 'Roboto-Thin',
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  black:'Roboto-Black',
}

export const FontSizes = {
	small: 14,
  regular: 16,
  medium: 18,
  large: 20,
  title: 24,
}

export type FontWeightsType = keyof typeof FontWeights
export type FontSizesType = keyof typeof FontSizes