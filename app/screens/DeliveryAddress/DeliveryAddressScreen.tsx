// React and packages
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
// Navigation styles
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileNavigatorParamList } from '../../navigators';
// import { ParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, Header, RadioButton, Button } from '../../components';
// Selectors
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as DeliverySelector from '../../modules/Delivery/delivery.selectors';
import { DeliveryAddressType } from '../../modules';
import { useActions } from '../../redux/hooks/useActions';

interface DeliveryAddressScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'deliveryAddress'> {}

/**
 * TODO:
 *  * MAKE ITEMS "CRUD"able
 *  * Make various radiobutton sizes
 *  * Connect with state manager
 */

export const DeliveryAddressScreen = (props: DeliveryAddressScreenProps) => {
	const { pickDeliveryAddress } = useActions();

	// Delivery Addresse List
	const usersDeliveryAddresses: DeliveryAddressType[] = useTypedSelector(
		DeliverySelector.getUsersDeliveryAddresses
	);
	// Picked Delivery Address
	const pickedDeliveryIdx: number = useTypedSelector(DeliverySelector.getPickedDeliveryAddressIdx);

	return (
		<React.Fragment>
			<Screen style={styles.container} preset="scroll">
				<Header title="Delivery address" />

				{usersDeliveryAddresses.map((address, idx) => {
					return (
						<Pressable
							key={idx.toString()}
							onPress={() => pickDeliveryAddress(address.id)}
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginVertical: spacing[2]
							}}
						>
							<Text numberOfLines={1} style={{ width: '85%' }} size="medium">
								{address.country}, {address.city}, {address.street}, {address.house}
							</Text>
							<RadioButton isActive={idx === pickedDeliveryIdx} />
						</Pressable>
					);
				})}
			</Screen>
			<Block align="center" style={{ position: 'absolute', bottom: 40, right: 0, left: 0 }}>
				<Button shadow preset="primary" text="Add new address" />
			</Block>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	}
});
