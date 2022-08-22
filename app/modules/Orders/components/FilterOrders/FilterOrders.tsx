// React and packages
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Components
import { Block, Text } from '../../../../components';
// Theme
import { colors } from '../../../../theme';

type Props = {
	activeType: "ACTIVE" | "FINISHED"
	setActiveType: (activeType: "ACTIVE" | "FINISHED") => void
};

export const FilterOrders = (props: Props) => {

	const { activeType, setActiveType } = props;

	return (
		<Block row>
			<LinearGradient
				style={[
					styles.buttonContainer,
					{
						// Make bottom border primary
						borderBottomColor: activeType === 'ACTIVE' ? colors.primary : colors.dim
					}
				]}
				colors={[
					// Transparent
					'rgba(0, 0, 0, 0)',
					// Primary
					activeType === 'ACTIVE' ? 'rgba(83,177,118,.3)' : 'rgba(0,0,0,0)'
				]}
			>
				<Pressable onPress={() => setActiveType('ACTIVE')} style={styles.buttonInner}>
					<Text size="large" weight="medium" color={activeType === 'ACTIVE' ? colors.text : colors.dim}>
						Active
					</Text>
				</Pressable>
			</LinearGradient>

			<LinearGradient
				style={[
					styles.buttonContainer,
					{
						// Make bottom border primary
						borderBottomColor: activeType === 'FINISHED' ? colors.primary : colors.dim
					}
				]}
				colors={[
					// Transparent
					'rgba(0, 0, 0, 0)',
					// Primary
					activeType === 'FINISHED' ? 'rgba(83,177,118,.3)' : 'rgba(0,0,0,0)'
				]}
			>
				<Pressable onPress={() => setActiveType('FINISHED')} style={styles.buttonInner}>
					<Text size="large" weight="medium" color={activeType === 'FINISHED' ? colors.text : colors.dim}>
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
		borderBottomWidth: 2
	},
	buttonInner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
