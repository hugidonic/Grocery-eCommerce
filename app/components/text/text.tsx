import * as React from 'react';
import { Text as ReactNativeText, StyleSheet, TextStyle } from 'react-native';
import { presets } from './text.presets';
import { TextProps } from './text.props';
import { colors } from '../../theme/colors';

/**
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
	// grab the props
	const {
		preset = 'default',
		children,
		text,
    color: propColor,
    bold,
    black,
    light,
    title,
    large,
    medium,
    small,
		style: styleOverride,
		...rest
	} = props;

	const stylePresets = presets[preset] || presets.default;

  const textStyles: TextStyle = StyleSheet.flatten([
    {fontSize: 16, fontFamily: 'Roboto-Regular', color: colors.text},

    stylePresets,
    propColor !== undefined && {color: propColor},
    
    bold !== undefined && {fontFamily: 'Roboto-Medium'},
    black !== undefined && {fontFamily: 'Roboto-Bold'},
    light !== undefined && {fontFamily: 'Roboto-Light'},
    
    title !== undefined && {fontSize: 26},
    large !== undefined && {fontSize: 22},
    medium !== undefined && {fontSize: 18},
    small !== undefined && {fontSize: 14},
    styleOverride
  ])

	const content = text || children;

	return (
		<ReactNativeText {...rest} style={textStyles}>
			{content}
		</ReactNativeText>
	);
}
