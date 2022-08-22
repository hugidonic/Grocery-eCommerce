// React and packages
import React, { FC } from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import BottomSheet from 'reanimated-bottom-sheet';
// Components
import { Screen, Text, Block, Button, Loading } from '../../components';
import { CartList, Checkout } from '../../modules';
// Types and utils
import { TabsNavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as CartSelector from '../../modules/Cart/cart.selectors';
import { StyleSheet } from 'react-native';

type CartScreenProps = StackScreenProps<TabsNavigatorParamList, 'cart'>;

export const CartScreen: FC<CartScreenProps> = (props: CartScreenProps) => {
	const sheetRef = React.useRef<BottomSheet>(null);

	const { isLoading, cartItems } = useTypedSelector((state) => state.CartStore);
	const totalCost: number = useTypedSelector(CartSelector.totalCost);

	if (isLoading) {
		return <Loading />;
	}
	
	return (
		<React.Fragment>
			<Screen style={styles.container} preset="scroll">
				<Block justify="center" row style={{ marginVertical: 30 }}>
					<Text weight="black" size="title">
						My Cart
					</Text>
				</Block>

				<CartList cartItems={cartItems} />
			</Screen>

			{cartItems.length > 0 && (
				<Block
					justify="center"
					row
					style={{ position: 'absolute', bottom: 25, right: 0, left: 0 }}
				>
					<Button
						shadow
						text="Go to checkout"
						onPress={() => sheetRef.current.snapTo(1)}
					/>
				</Block>
			)}

			<Checkout sheetRef={sheetRef} totalCost={totalCost} />
		</React.Fragment>
	);
};


const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	}
})