// React and packages
import React from 'react';
import { StyleSheet } from 'react-native';
// Navigation styles
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileNavigatorParamList } from '../../navigators';
// import { ParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text } from '../../components';

interface DeliveryAddressScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'deliveryAddress'> {}

export const DeliveryAddressScreen = (props: DeliveryAddressScreenProps) => {
	return (
		<Screen style={[styles.container, styles.center]} preset="scroll">
			<Text> DeliveryAddress Screen </Text>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		paddingVertical: spacing[6]
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	}
});