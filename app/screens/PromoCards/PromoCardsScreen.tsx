// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
// Types and utils
// import { ParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, Header, Divider, Button } from '../../components';
import { ProfileNavigatorParamList } from '../../navigators';
import uuid from '../../utils/uuid';
import moment from 'moment';

interface PromoCardsScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'promoCards'> {}

export const PromoCardsScreen = (props: PromoCardsScreenProps) => {
	return (
		<React.Fragment>
			<Screen style={styles.container} preset="scroll">
				<Header title="Promo Cards" />

				<Divider opacity={1} />

				{UsersPromoCards.map((promo, idx) => {
					return (
						<Block key={promo.id} style={styles.promoContainer}>
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
										Order №{promo.id}
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
						</Block>
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

const UsersPromoCards = [
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-09-23').toISOString(),
		endDate: new Date('2022-11-23').toISOString(),
		price: 100.0
	},
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-09-23').toISOString(),
		endDate: new Date('2023-01-23').toISOString(),
		price: 500.0
	},
	{
		id: uuid().slice(0, 4),
		beginDate: new Date('2022-02-23').toISOString(),
		endDate: new Date('2024-12-23').toISOString(),
		price: 300.0
	}
];
