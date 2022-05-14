import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Block, Text } from '../../app/components';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eee'
	},
	title: {
		fontWeight: '600',
		color: '#3d3d3d'
	},
	titleWrapper: {},
	useCaseWrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		borderTopColor: '#e6e6e6',
		borderTopWidth: 1,
		flexDirection: 'row'
	},
	useCaseText: {
		fontSize: 10,
		color: '#666',
		paddingHorizontal: 4,
		paddingBottom: 2
	},
	usageText: {
		color: '#666',
		fontSize: 10,
		paddingTop: 0
	},
	header: {
		paddingTop: 20,
		paddingBottom: 10,
		paddingHorizontal: 10,
		borderBottomColor: '#e6e6e6',
		borderBottomWidth: 1
	},
	component: {
		backgroundColor: '#fff'
	}
});

export interface UseCaseProps {
	/** The title. */
	text: string;
	/** When should we be using this? */
	usage?: string;
	/** The component use case. */
	children: React.ReactNode;
	/** A style override. Rarely used. */
	style?: ViewStyle;
	/** Don't use any padding because it's important to see the spacing. */
	noPad?: boolean;
	/** Don't use background color because it's important to see the colors. */
	noBackground?: boolean;
}

export function UseCase(props: UseCaseProps) {
	const style: ViewStyle = {
		...styles.component,
		...{ padding: props.noPad ? 0 : 10 },
		...{
			backgroundColor: props.noBackground
				? 'rgba(0,0,0,0)'
				: styles.component.backgroundColor
		},
		...props.style
	};

	return (
		<Block style={styles.container}>
			<Block style={styles.header}>
				<Block style={styles.useCaseWrapper}>
					<Text style={styles.useCaseText}>Use Case</Text>
				</Block>
				<Block style={styles.titleWrapper}>
					<Text style={styles.title}>{props.text}</Text>
				</Block>
				{props.usage ? <Text style={styles.usageText}>{props.usage}</Text> : null}
			</Block>
			<Block style={style}>{props.children}</Block>
		</Block>
	);
}
