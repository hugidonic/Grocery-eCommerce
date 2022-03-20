// React and packages
import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, TouchableOpacity, Dimensions } from 'react-native';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import { observer } from 'mobx-react-lite';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Components
import { Text, Block, Button } from '../../../../components';
// Types and utils
import { colors, spacing } from '../../../../theme';

export interface CheckoutProps {
	style?: StyleProp<ViewStyle>;
	/**
	 * Ref to manage the bottom sheet
	 * @type BottomSheet
	 */
	sheetRef?: React.MutableRefObject<any>;
	/**
	 * initial position of the bottom sheet
	 * @type 0 or 1
	 * @default 0
	 */
	initialPos?: 0 | 1;
	/**
	 * total cost of the cart
	 * @type number
	 */
	totalCost?: number;
}

const BOTTOMSHEETHEIGHT = 520;

export const Checkout = observer(function Checkout(props: CheckoutProps) {
	const { 
		style = {},
		sheetRef = React.useRef<any>(null),
		initialPos = 0,
		totalCost = 0
	} = props;

	const snapPoints = React.useMemo(() => [ 0, BOTTOMSHEETHEIGHT ], [])

	const styles = Object.assign({}, st, style);

	const closeSheet = () => {
		sheetRef.current.snapTo(0);
	};
	// const openSheet = () => {
	// 	sheetRef.current.snapTo(1);
	// };

	return (
		<React.Fragment>
			<BottomSheet
				ref={sheetRef}
				initialPosition={snapPoints[initialPos]}
				snapPoints={snapPoints}
				isBackDrop
        isBackDropDismissByPress={true}
        isRoundBorderWithTipHeader
        overDrag={false}
        backDropColor="#000"
				body={
					<Block style={styles.checkoutContainer}>
						<Block
							row
							justify="space-between"
							align="center"
							margin={[ 0, 0, 20, 0 ]}
						>
							<Text weight="medium" size="title">
								Checkout
							</Text>
							<TouchableOpacity onPress={closeSheet}>
								<Entypo name="cross" size={30} color={colors.palette.black} />
							</TouchableOpacity>
						</Block>

						<Hairline />

						<CheckoutItem
							title="Delivery"
							subtitleComponent={
								<Text size="medium" weight="medium" color={colors.text}>
									Select Method
								</Text>
							}
						/>
						<CheckoutItem
							title="Payment"
							subtitleComponent={
								<Ionicons
									name="ios-card-outline"
									size={26}
									color={colors.palette.black}
								/>
							}
						/>
						<CheckoutItem
							title="Promo Code"
							subtitleComponent={
								<Text size="medium" weight="medium" color={colors.text}>
									Pick Discount
								</Text>
							}
						/>
						<CheckoutItem
							title="Total Cost"
							subtitleComponent={
								<Text size="medium" weight="medium" color={colors.text}>
									$
									{totalCost}
								</Text>
							}
						/>

						<Text size="small" style={{ marginVertical: spacing[4] }}>
							By placing an order you agree to the{' '}
							<Text size="small" color={colors.primary}>
								terms and conditions
							</Text>
						</Text>

						<Block
							justify="center"
							row
							margin={[10, 0,0,0]}
 						>
							<Button shadow text="Place an Order" onPress={closeSheet} />
						</Block>
					</Block>
				}
			/>
		</React.Fragment>
	);
});

const Hairline = () => (
	<Block style={{ height: 1, width: '100%', opacity: 0.3 }} color={colors.dim} />
);

type CheckoutItemProps = {
	title: string;
	subtitleComponent: React.ReactNode;
};

const CheckoutItem = ({ title, subtitleComponent }: CheckoutItemProps) => {
	return (
		<React.Fragment>
			<Block row justify="space-between" align="center" marginVertical={10}>
				<Text size="large" weight="medium" color={colors.dim}>
					{title}
				</Text>
				<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
					{subtitleComponent}
					<Entypo
						style={{ marginLeft: 15 }}
						name="chevron-right"
						size={26}
						color={colors.palette.black}
					/>
				</TouchableOpacity>
			</Block>
			<Hairline />
		</React.Fragment>
	);
};

const st = StyleSheet.create({
	checkoutContainer: {
		height: BOTTOMSHEETHEIGHT,
		position: 'relative',
		paddingHorizontal: spacing[5],
		paddingTop: spacing[6],
		backgroundColor: colors.palette.white
	}
});
