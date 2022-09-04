// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';
// Types
import { ProfileNavigatorParamList } from '../../navigators';
import { PaymentMethodType } from '../../modules/Payment';
// Theme
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, Header } from '../../components';
// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Selectors
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as PaymentSelectors from '../../modules/Payment/payment.selectors';
// Redux Actions
import { useActions } from '../../redux/hooks/useActions';

const SCREEN_WIDTH = Dimensions.get('screen').width;

interface PaymentMethodsScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'paymentMethods'> {}

export const PaymentMethodsScreen = (props: PaymentMethodsScreenProps) => {
	const PaymentMethodItems: PaymentMethodType[] = useTypedSelector(
		PaymentSelectors.getPaymentItems
	);
	const pickedPaymentMethodIdx: number = useTypedSelector(
		PaymentSelectors.getPickedPaymentMethodIdx
	);
	const { pickPaymentMethod } = useActions();

	return (
		<Screen style={styles.container} preset="scroll">
			<Header title="Payment Methods" />

			<Block row style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
				{PaymentMethodItems.map((card, idx) => {
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
								onPress={() => pickPaymentMethod(card.id)}
								style={[
									styles.button,
									{
										backgroundColor:
											pickedPaymentMethodIdx === idx
												? colors.primary
												: colors.palette.lighterGrey
									}
								]}
							>
								<Text
									color={
										pickedPaymentMethodIdx === idx ? (
											colors.palette.white
										) : (
											colors.text
										)
									}
									size="small"
								>
									{pickedPaymentMethodIdx === idx ? 'Choosen' : 'Choose'}
								</Text>
							</Pressable>
						</Block>
					);
				})}

				<TouchableOpacity
					activeOpacity={0.8}
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
							elevation: 8
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
