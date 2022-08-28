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
// Navigation
import { useAppNavigation } from '../../../../navigators';
// Selectors
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { DeliveryAddressType, getPickedDeliveryAddress } from '../../../Delivery';
import { getPickedPaymentMethod, PaymentMethodType } from '../../../Payment';

const BOTTOMSHEETHEIGHT = 520;
const SCREENWIDTH = Dimensions.get('screen').width;

export const Checkout = (props: CheckoutProps) => {
	const { sheetRef = React.useRef<any>(null), initialPos = 0, totalCost = 0 } = props;

	// Picked delivery address
	const deliveryAddress: DeliveryAddressType = useTypedSelector(getPickedDeliveryAddress)

	// Picked Payment method
	const paymentMethod: PaymentMethodType = useTypedSelector(getPickedPaymentMethod)

	// Snap points for bottomsheet
	const snapPoints = React.useMemo(() => [ 0, BOTTOMSHEETHEIGHT ], []);

	// FOR BOTTOMSHEET
	const closeSheet = () => {
		sheetRef.current.snapTo(0);
	};

	// To navigate to profile screens to pick 
	const nav = useAppNavigation()

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
							onPress={() => nav.navigate('ProfileStack', {screen: 'deliveryAddress'}) }
							subtitleComponent={
								<Block flex align="flex-end">
									<Text numberOfLines={1} lineBreakMode='middle' color={colors.text}>
										{
											(deliveryAddress &&
											`${deliveryAddress.country}, ${deliveryAddress.city}, ${deliveryAddress.street}, ${deliveryAddress.house}`)
											?? `Select Address`
										}
										</Text>
								</Block>
							}
						/>
						<CheckoutItem
							title="Payment"
							onPress={() => nav.navigate('ProfileStack', {screen: 'paymentMethods'}) }
							subtitleComponent={
								(paymentMethod && <Text>{paymentMethod.cardName}, ****-{paymentMethod.last4digits}</Text>) ??
								<Ionicons name="ios-card-outline" size={26} color={colors.palette.black} />
							}
						/>
						<CheckoutItem
							title="Promo Code"
							onPress={() => nav.navigate('ProfileStack', {screen: 'promoCards'}) }
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
							<Text onPress={() => nav.navigate('termsAndConditions')} size="small" color={colors.primary}>
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
