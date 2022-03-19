// React and packages
import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { observer } from 'mobx-react-lite';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Components
import { Text, Block, Button} from '..';
// Types and utils
import { colors, spacing } from '../../theme';
import { useStores } from '../../models';

export interface CheckoutProps {
	style?: StyleProp<ViewStyle>;
	sheetRef: React.MutableRefObject<BottomSheet>;
}

const BOTTOMSHEETHEIGHT = 400

export const Checkout = observer(function Checkout(props: CheckoutProps) {
	const { style, sheetRef } = props;
	const styles = Object.assign({}, st, style);
  const {UserStore: {cartItems}} = useStores()

	const fall = new Animated.Value(1);

  const closeSheet = () => {
    console.log('asasd');
    
    sheetRef.current.snapTo(0)
  }
  const openSheet = () => {
    sheetRef.current.snapTo(1)
  }

	const animatedShadowOpacity = Animated.interpolateNode(fall, {
		inputRange: [ 0, 1 ],
		outputRange: [ 0.5, 0 ]
	});

	const renderContent = () => {
		return (
			<Block style={styles.checkoutContainer}>
				<Block
					row
					justify="space-between"
					align="center"
					margin={[ 0, 0, 20, 0 ]}
				>
					<Text weight='black' size='title'>
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
            <Text size='medium' weight='bold' color={colors.text}>
              Select Method
            </Text>
					}
				/>
				<CheckoutItem
					title="Payment"
					subtitleComponent={
						<Ionicons
							name='ios-card-outline'
							size={26}
							color={colors.palette.black}
						/>
					}
				/>
				<CheckoutItem
					title="Promo Code"
					subtitleComponent={
            <Text size='medium' weight='bold' color={colors.text}>
              Pick Discount
            </Text>
					}
				/>
				<CheckoutItem
					title="Total Cost"
					subtitleComponent={
            <Text size='medium' weight='bold' color={colors.text}>
              $
              {cartItems.totalCost}
            </Text>
					}
				/>

        <Text size='small' style={{marginVertical: spacing[4]}}>
          By placing an order you agree to the <Text size='small' color={colors.primary}>terms and conditions</Text>
        </Text>

        <Block
          justify="center"
          row
          style={{ position: 'absolute', bottom: 25, right: 0, left: 0 }}
        >
          <Button
            shadow
            text="Place an Order"
            onPress={closeSheet}
          />
        </Block>
			</Block>
		);
	};

	return (
		<React.Fragment>
			<BottomSheet
				ref={sheetRef}
				snapPoints={[ 0, BOTTOMSHEETHEIGHT ]}
				renderContent={renderContent}
        enabledGestureInteraction={true}
        enabledContentGestureInteraction={false}
				borderRadius={30}
				callbackNode={fall}
			/>
			<Animated.View
				pointerEvents="none"
				// @ts-ignore
				style={{
					...StyleSheet.absoluteFillObject,
					backgroundColor: '#000',
					opacity: animatedShadowOpacity
				}}
			/>
		</React.Fragment>
	);
});


const Hairline = () => (
  <Block style={{ height: 1, width: '100%', opacity: .3 }} color={colors.dim} />
)

type CheckoutItemProps = {
	title: string;
	subtitleComponent: React.ReactNode;
};

const CheckoutItem = ({ title, subtitleComponent }: CheckoutItemProps) => {
	return (
		<React.Fragment>
			<Block row justify="space-between" align="center" marginVertical={10}>
				<Text size='large' weight='bold' color={colors.dim}>
					{title}
				</Text>
				<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
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
		paddingHorizontal: spacing[5],
		paddingTop: spacing[6],
		backgroundColor: colors.palette.white
	}
});
