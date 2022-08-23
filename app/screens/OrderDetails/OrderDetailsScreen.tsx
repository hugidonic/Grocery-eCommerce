// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, Image, Pressable, SectionList, StyleSheet } from 'react-native';
// Types and utils
import { ProfileNavigatorParamList } from '../../navigators';
// import { ParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Block, Divider, Header, Screen, Text } from '../../components';
import { CartItemType } from '../../modules';
import moment from 'moment';

interface OrderDetailsScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'orderDetails'> {}

export const OrderDetailsScreen = (props: OrderDetailsScreenProps) => {
	const orderItem = props.route.params.orderItem;

	const renderCartItem = ({ product, count }: CartItemType) => {
		return (
			<Block row paddingVertical={spacing[2]}>
				{/* Cart item picture */}
				<Block flex={2}>
					<Image
						//@ts-ignore
						source={product.picture}
						style={{
							width: 80,
							height: 80,
							resizeMode: 'contain',
							marginRight: 20
						}}
					/>
				</Block>

				{/* Cart item info */}
				<Block flex={4} justify="center" paddingHorizontal={spacing[3]}>
					<Text size="large" weight="bold">
						{product.name}
					</Text>
					<Text color={colors.dim}>
						{product.description}, {count}pcs
					</Text>
				</Block>

				<Block flex={2} justify="center" align="center">
					<Text size="large" weight="bold">
						$ {product.price}
					</Text>
				</Block>
			</Block>
		);
	};

	return (
		<Screen style={[ styles.container ]} preset="scroll">
			<Header title={`Order №${orderItem.num}`} />

			<Block marginVertical={spacing[5]} row>
				<Block flex>
					<Text style={{ marginBottom: 4 }} size="medium" weight="medium">
						Total price
					</Text>
					<Text style={{ marginBottom: 4 }} size="medium" weight="medium">
						Date
					</Text>
					<Text style={{ marginBottom: 4 }} size="medium" weight="medium">
						Time
					</Text>
				</Block>
				<Block flex align="flex-end">
					<Text style={{ marginBottom: 4 }} size="medium" weight="medium">
						${orderItem.price}
					</Text>
					<Text style={{ marginBottom: 4 }} size="medium" weight="medium">
						{moment(orderItem.date).format('L')}
					</Text>
					<Text style={{ marginBottom: 4 }} size="medium" weight="medium">
						{moment(orderItem.date).format('LT')}
					</Text>
				</Block>
			</Block>

			<Divider color={colors.palette.black} height={2} />
			{orderItem.cartItems.map((cartItem) => {
				return (
					<Block key={cartItem.cartItemId}>
						{renderCartItem(cartItem)}
						<Divider color={colors.palette.black} height={2} />
					</Block>
				);
			})}
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
});