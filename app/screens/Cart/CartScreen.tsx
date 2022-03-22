// React and packages
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { StackScreenProps } from '@react-navigation/stack';
import BottomSheet from 'reanimated-bottom-sheet';
// Components
import { Screen, Text, Block, Button, Loading } from '../../components';
// Types and utils
import { TabsNavigatorParamList } from '../../navigators';
import { useStores } from '../../RootStore';
import { colors } from '../../theme';
import { CartList, Checkout } from '../../modules';

type CartScreenProps = StackScreenProps<TabsNavigatorParamList, 'cart'>;

export const CartScreen: FC<CartScreenProps> = observer(function CartScreen() {
	const { CartStore } = useStores();
	React.useEffect(() => {
		CartStore.loadCartItemsFromApi();
	}, []);

	const sheetRef = React.useRef<BottomSheet>(null);

	if (!CartStore.isLoading) {
		return <Loading />;
	}

	return (
		<React.Fragment>
			<Screen backgroundColor={colors.palette.offWhite} preset="scroll">
				<Block justify="center" row style={{ marginVertical: 30 }}>
					<Text weight="black" size="title">
						My Cart
					</Text>
				</Block>

				<CartList cartItems={CartStore.items} />
			</Screen>
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

			<Checkout sheetRef={sheetRef} totalCost={CartStore.totalCost} />
		</React.Fragment>
	);
});
