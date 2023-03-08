// React and packages
import React from 'react';
import { StyleSheet } from 'react-native';
import moment from 'moment';
// Navigation
// Types and Theme
import { OrderItemProps } from './OrderItem.props';
import { colors, spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';

export const OrderItem = (props: OrderItemProps) => {
	const { idx, date, id, price } = props;

	return (
		<Block style={styles.container}>
			{/* NUMBER */}
			<Block flex={1} justify="center" align="center">
				<Text color={colors.dim} size="large">
					#{idx}
				</Text>
			</Block>

			{/* ORDER INFO */}
			<Block flex={6} row justify="space-between" align="center">
				<Block flex={2}>
					<Text color={colors.text} size="large">
						Order №{id}
					</Text>
					<Text color={colors.dim} size="regular">
						{moment(date).format('L - LT')} 
					</Text>
				</Block>

				<Block flex={1} align="flex-end">
					<Text numberOfLines={1} lineBreakMode="clip" size="medium" weight="medium">
						$ {price}
					</Text>
				</Block>
			</Block>
			{/* CHEVRON */}
			<Block style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Entypo name="chevron-right" size={30} color={colors.palette.black} />
			</Block>
		</Block>
	);
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: colors.dim,
		borderBottomWidth: 1,
		flexDirection: 'row',
		paddingVertical: spacing[3]
	}
});
