// React and packages
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from 'react-native-bottomsheet-reanimated';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Components
import { Text, Block, Button, Divider } from '../../../../components';
import { CheckoutItem } from './CheckoutItem';
// Types and utils
import { colors, spacing } from '../../../../theme';
import { CheckoutProps } from './Checkout.props';

const BOTTOMSHEETHEIGHT = 520;
const SCREENWIDTH = Dimensions.get('screen').width;

export const Checkout = (props: CheckoutProps) => {
	const { sheetRef = React.useRef<any>(null), initialPos = 0, totalCost = 0 } = props;

	const snapPoints = React.useMemo(() => [ 0, BOTTOMSHEETHEIGHT ], []);

	const closeSheet = () => {
		sheetRef.current.snapTo(0);
	};

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
					// CONTAINER
					<Block style={styles.checkoutInner}>
						{/* HEADER */}
						<Block row justify="space-between" align="center" margin={[ 0, 0, 20, 0 ]}>
							{/* TITLE */}
							<Text weight="medium" size="title">
								Checkout
							</Text>
							{/* CLOSE THE SHEET */}
							<TouchableOpacity onPress={closeSheet}>
								<Entypo name="cross" size={30} color={colors.palette.black} />
							</TouchableOpacity>
						</Block>

						{/* straight line to divide header from content */}
						<Divider />

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
								<Ionicons name="ios-card-outline" size={26} color={colors.palette.black} />
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
							withChevron={false}
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
						
						{/* MAKE ORDER BUTTON */}
						<Block justify="center" row margin={[ 10, 0, 0, 0 ]}>
							<Button shadow text="Place an Order" onPress={closeSheet} />
						</Block>
					</Block>
				}
			/>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	checkoutInner: {
		height: BOTTOMSHEETHEIGHT,
		position: 'relative',
		zIndex: 59,
		paddingHorizontal: spacing[5],
		width: SCREENWIDTH,
		paddingTop: spacing[6],
		backgroundColor: colors.palette.white
	},
});
