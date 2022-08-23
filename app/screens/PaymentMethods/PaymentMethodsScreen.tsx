// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Dimensions, Pressable } from 'react-native';
// Types and utils
import { ProfileNavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, Header } from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

interface PaymentMethodsScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'paymentMethods'> {}

export const PaymentMethodsScreen = (props: PaymentMethodsScreenProps) => {
	const [ activeIdx, setActiveIdx ] = React.useState<number>(0);

	return (
		<Screen style={styles.container} preset="scroll">
			<Header title="Payment Methods" />

			<Block row style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
				{UsersPaymentMethods.map((card, idx) => {
					return (
						<Block key={idx} shadow style={styles.card}>
							{/* CARD ICON */}
							<Block color={card.color} style={styles.creditOuter}>
								<Block style={styles.creditInner} />
							</Block>

							<Block marginVertical={spacing[4]}>
								<Text size="medium" weight="medium" style={{ marginBottom: 4 }}>
									{card.cardName}
								</Text>
								<Text color={colors.dim}>****-{card.last4digits}</Text>
							</Block>

							<Pressable
								onPress={() => setActiveIdx(idx)}
								style={[
									styles.button,
									{
										backgroundColor:
											activeIdx === idx
												? colors.primary
												: colors.palette.lighterGrey
									}
								]}
							>
								<Text
									color={activeIdx === idx ? colors.palette.white : colors.text}
									size="small"
								>
									{activeIdx === idx ? 'Choosen' : 'Choose'}
								</Text>
							</Pressable>
						</Block>
					);
				})}

				<TouchableOpacity
					activeOpacity={.8}
					style={[
						styles.card,
						{
							justifyContent: 'center',
							alignItems: 'center',
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 4
							},
							shadowOpacity: 0.2,
							shadowRadius: 4.65,
							elevation: 8,
						}
					]}
				>
					<MaterialCommunityIcons
						name="credit-card-plus-outline"
						size={100}
						color={colors.palette.black}
					/>
				</TouchableOpacity>
			</Block>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	},
	button: {
		backgroundColor: colors.primary,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		padding: spacing[1],
		marginTop: 'auto'
	},
	card: {
		backgroundColor: colors.palette.white,
		borderRadius: spacing[3],
		padding: spacing[3],
		marginBottom: 0.04 * SCREEN_WIDTH,
		width: '48%',
		height: 230
	},
	creditOuter: {
		borderRadius: 10,
		width: '100%',
		height: 80,
		position: 'relative'
	},
	creditInner: {
		width: 40,
		height: 40 / 2,
		borderRadius: 4,
		backgroundColor: '#FFA858',
		position: 'absolute',
		right: 20,
		bottom: 14
	}
});

const UsersPaymentMethods = [
	{
		last4digits: '2334',
		color: colors.primary,
		cardName: 'MasterCard'
	},
	{
		last4digits: '4355',
		color: colors.palette.deepPurple,
		cardName: 'MIR'
	},
	{
		last4digits: '1232',
		color: colors.palette.black,
		cardName: 'Maestro'
	},
	{
		last4digits: '5466',
		color: colors.primary,
		cardName: 'VISA'
	},
	{
		last4digits: '3452',
		color: colors.palette.darkerGreen,
		cardName: 'VISA'
	},
	{
		last4digits: '5465',
		color: colors.palette.green,
		cardName: 'MIR'
	},
	{
		last4digits: '0978',
		color: colors.palette.black,
		cardName: 'MasterCard'
	}
];
