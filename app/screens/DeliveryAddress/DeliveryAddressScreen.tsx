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

interface DeliveryAddressScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'deliveryAddress'> {}

/**
 * TODO:
 *  * MAKE ITEMS "CRUD"able
 *  * Make various radiobutton sizes
 *  * Connect with state manager
 */

export const DeliveryAddressScreen = (props: DeliveryAddressScreenProps) => {
	const [ activeIdx, setActiveIdx ] = React.useState<number>(0);

	return (
		<Screen style={styles.container} preset="scroll">
			<Header title="Delivery address" />

			{UsersDeliveryAddress.map((address, idx) => {
				return (
					<Block
						key={idx.toString()}
						row
						justify="space-between"
						marginVertical={spacing[2]}
					>
						<Text numberOfLines={1} style={{ width: '85%' }} size="medium">
							{address.country}, {address.city}, {address.street}, {address.house}
						</Text>
						<Pressable onPress={() => setActiveIdx(idx)}>
							<RadioButton isActive={idx === activeIdx} />
						</Pressable>
					</Block>
				);
			})}

			<Block
				align="center"
				style={{ position: 'absolute', bottom: 40, right: 0, left: 0 }}
			>
				<Button shadow text="Add new address" />
			</Block>
		</Screen>
	);
};

const UsersDeliveryAddress = [
	{
		city: 'Kazan',
		street: 'Sirtlanova',
		house: '18',
		country: 'Russia'
	},
	{
		city: 'Ufa',
		street: 'dfgdfjghlkejdsdrfsdfsdrtlkgtjelr',
		house: '18',
		country: 'Russia'
	},
	{
		city: 'Moscow',
		street: 'Orenbsdfsdgrsd',
		house: '8',
		country: 'Russia'
	},
	{
		city: 'Agidel',
		street: 'Mosdsagk',
		house: '23',
		country: 'USA'
	}
];

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	}
});
