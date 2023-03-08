import React from 'react';
import { Block } from '..';
// Theme
import { colors } from '../../theme';

interface DividerProps {
	height?: number;
	opacity?: number;
	color?: string;
}

export const Divider = (props: DividerProps) => {
	// Default height = 1
	// Default color = colors.dim
	// Default opacity = 0.3
	const { height = 1, color = colors.dim, opacity = 0.3 } = props;
	return <Block style={{ height, width: '100%', opacity: opacity }} color={color} />;
};
