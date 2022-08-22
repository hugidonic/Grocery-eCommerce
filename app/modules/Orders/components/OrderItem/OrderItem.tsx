// React and packages
import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
// Types and Theme
import { OrderItemProps } from './OrderItem.props';
import { colors, spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';

export const OrderItem = (props: OrderItemProps) => {
	const { idx, date, num, price } = props;

	return (
		<Pressable style={styles.container}>
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
						Order №{num}
					</Text>
					<Text color={colors.dim} size="regular">
						{moment(date).format('L - LT')} 
					</Text>
				</Block>

				<Block flex={1}>
					<Text numberOfLines={1} lineBreakMode="clip" size="large" weight="medium">
						$ {price}
					</Text>
				</Block>
			</Block>
			{/* CHEVRON */}
			<Block style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Entypo name="chevron-right" size={30} color={colors.palette.black} />
			</Block>
		</Pressable>
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
