import * as React from 'react';
import { Text as ReactNativeText, StyleSheet, TextStyle } from 'react-native';
import { presets } from './Text.presets';
import { FontWeights, TextProps, FontSizes } from './Text.props';
import { colors } from '../../theme/colors';

/**
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
	// grab the props
	const {
		children,
    preset = 'default',
		text,
    color,
    weight,
    size,
		style: styleOverride,
		...rest
	} = props;

	const stylePresets = presets[preset] || presets.default;

  const textStyles: TextStyle = StyleSheet.flatten([
    {fontSize: 16, fontFamily: 'Roboto-Regular', color: colors.text},

    stylePresets,
    color !== undefined && {color},
    weight !== undefined && {fontFamily: FontWeights[weight]},
    size !== undefined && {fontSize: FontSizes[size]},
    
    styleOverride
  ])

	const content = text || children;

	return (
		<ReactNativeText {...rest} style={textStyles}>
			{content}
		</ReactNativeText>
	);
}
