// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Pressable, StyleSheet } from 'react-native';
import moment from 'moment';
// Types
import { ProfileNavigatorParamList } from '../../navigators';
import { PromoCardType } from '../../modules';
// Theme
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, Header, Divider, Button } from '../../components';
// Selectors
import * as PromoCardSelector from '../../modules/PromoCards/promocards.selectors';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useActions } from '../../redux/hooks/useActions';

interface PromoCardsScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'promoCards'> {}

export const PromoCardsScreen = (props: PromoCardsScreenProps) => {
	const { fromScreenName, cartPrice } = props.route.params;

	const UsersPromoCards: PromoCardType[] = useTypedSelector(PromoCardSelector.getPromoCardItems);
	const { pickPromoCard } = useActions();

	/**
	 * Runs only when the previous screen name is cart
	 * becouse when the fromScreenName === 'profile' the pressable is disabled
	 */
	const goBackToCartScreen = (promo: PromoCardType) => {
		if (promo.price+1 < cartPrice) {
			pickPromoCard(promo.id);
			props.navigation.goBack();
		} else {
			/**
			 * TODO: 
			 * * THROW a notification on the screen saying that
			 * * you cannot pick this card cos the cart price is lower than promocard's price
			 */
		}
	};

	return (
		<React.Fragment>
			<Screen style={styles.container} preset="scroll">
				<Header title="Promo Cards" />

				<Divider opacity={1} />

				{UsersPromoCards.map((promo, idx) => {
					return (
						<Pressable
							disabled={fromScreenName === 'profile'}
							onPress={() => goBackToCartScreen(promo)}
							key={promo.id}
							style={styles.promoContainer}
						>
							{/* NUMBER */}
							<Block flex={1} justify="center" align="center">
								<Text color={colors.dim} size="large">
									#{idx + 1}
								</Text>
							</Block>

							{/* ORDER INFO */}
							<Block flex={6} row justify="space-between" align="center">
								<Block flex={2}>
									<Text color={colors.text} size="large">
										Promo №{promo.id}
									</Text>
									<Text color={colors.dim} size="regular">
										{moment(promo.beginDate).format('L')} - {' '}
										{moment(promo.endDate).format('L')}
									</Text>
								</Block>

								<Block flex={1} align="flex-end">
									<Text
										numberOfLines={1}
										lineBreakMode="clip"
										size="medium"
										weight="medium"
									>
										$ {promo.price.toFixed(2)}
									</Text>
								</Block>
							</Block>
						</Pressable>
					);
				})}
			</Screen>

			<Block
				justify="center"
				align="center"
				style={{ position: 'absolute', bottom: 40, right: 0, left: 0 }}
			>
				<Button preset="primary" text="Add new Promo" shadow />
			</Block>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	},
	promoContainer: {
		borderBottomColor: colors.dim,
		borderBottomWidth: 1,
		flexDirection: 'row',
		paddingVertical: spacing[3]
	}
});
