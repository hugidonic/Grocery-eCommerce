// React and packages
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Components
import { Block, Text } from '../../../components';
// Theme
import { colors } from '../../../theme';
type Props = {};

export const FilterOrders = (props: Props) => {
	const [ activeType, setActiveType ] = React.useState<'ACTIVE' | 'FINISHED'>('ACTIVE');

	return (
		<Block row>
			<LinearGradient
				style={[
					styles.buttonContainer,
					{
						borderBottomColor: activeType === 'ACTIVE' ? colors.primary : colors.dim
					}
				]}
				colors={[
					'rgba(0, 0, 0, 0)',
					activeType === 'ACTIVE' ? 'rgba(83,177,118,.3)' : 'rgba(0,0,0,0)'
				]}
			>
				<Pressable onPress={() => setActiveType('ACTIVE')} style={styles.buttonInner}>
					<Text size="large" weight="bold">
						Active
					</Text>
				</Pressable>
			</LinearGradient>

			<LinearGradient
				style={[
					styles.buttonContainer,
					{
						borderBottomColor: activeType === 'FINISHED' ? colors.primary : colors.dim
					}
				]}
				colors={[
					'rgba(0, 0, 0, 0)',
					activeType === 'FINISHED' ? 'rgba(83,177,118,.3)' : 'rgba(0,0,0,0)'
				]}
			>
				<Pressable onPress={() => setActiveType('FINISHED')} style={styles.buttonInner}>
					<Text size="large" weight="bold">
						Finish
					</Text>
				</Pressable>
			</LinearGradient>
		</Block>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		height: 50,
		borderBottomWidth: 3
	},
	buttonInner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
