// React and packages
import React from 'react';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Types and utils
import { colors, spacing } from '../../../../theme';
import { ProductDetailsInfoContainerProps } from './ProductDetailsInfo.container';
// Components
import { Block, Text } from '../../../../components';

// CONSTANTS
const banana = {
	protein: 1.5,
	fats: 0.2,
	carbs: 21.8
};

const all = banana.protein + banana.fats + banana.carbs;

const proteinPercentage = +(banana.protein / all * 100).toFixed(2);
const fatsPercentage = +(banana.fats / all * 100).toFixed(2);
const carbsPercentage = +(banana.carbs / all * 100).toFixed(2);

const { height } = Dimensions.get('screen');

// Props type
export interface ProductDetailsInfoComponentProps
	extends ProductDetailsInfoContainerProps {
	addToFavorite?: () => void;
	removeFromFavorite?: () => void;
	isFavorite: boolean;
}

export const ProductDetailsInfoComponent = (props: ProductDetailsInfoComponentProps) => {
	const {
		style,
		product,
		addToFavorite = () => {},
		removeFromFavorite = () => {},
		isFavorite = false
	} = props;
	

	const handleLikePress = isFavorite ? removeFromFavorite : addToFavorite;

	const snapPoints = React.useMemo(() => [ height * 0.6, height ], []);
	return (
		<BottomSheet
			snapPoints={snapPoints}
			initialPosition={snapPoints[0]}
			bottomSheerColor={'rgba(0,0,0,0)'}
			tipHeaderRadius={30}
			isRoundBorderWithTipHeader
			overDrag={false}
			body={
				<Block
					color="#fff"
					paddingHorizontal={spacing[5]}
					style={{ paddingTop: 10 }}
				>
					<Block
						row
						justify="space-between"
						align="center"
						style={{ marginVertical: 15 }}
					>
						<Block style={styles.price}>
							<Text weight="black" size="medium" color={colors.primary}>
								${product.price}
							</Text>
						</Block>

						<TouchableOpacity
							onPress={handleLikePress}
							style={[
								styles.favoriteBtn,
								{
									backgroundColor: isFavorite
										? colors.palette.lightenRed
										: colors.transparent
								}
							]}
						>
							<AntDesign
								name={isFavorite ? 'heart' : 'hearto'}
								size={20}
								color={isFavorite ? colors.palette.red : 'black'}
							/>
						</TouchableOpacity>
					</Block>

					<Block>
						<Text weight="black" size="title">
							{product.name}
						</Text>
						<Block row align="center" style={{ marginVertical: 15 }}>
							<Block row align="center" style={{ marginRight: 40 }}>
								<AntDesign
									name="star"
									size={24}
									color={colors.primary}
									style={{ marginRight: 10 }}
								/>
								<Text color={colors.dim}>4,8 Rating</Text>
							</Block>
							<Block row align="center">
								<Ionicons
									name="chatbox-ellipses"
									size={24}
									color={colors.primary}
									style={{ marginRight: 10 }}
								/>
								<Text color={colors.dim}>7 comments</Text>
							</Block>
						</Block>

						<Text color={colors.dim}>
							Бананы — одна из древнейших пищевых культур, а для тропических
							стран важнейшее пищевое растение и главная статья экспорта.
							Спелые бананы широко употребляются в пищу по всему миру, их
							используют при приготовлении большого количества блюд
						</Text>

						<Block
							style={{ marginTop: 50 }}
							row
							justify="space-between"
							align="center"
						>
							<Block align="center">
								<ProgressCircle
									percent={proteinPercentage}
									radius={50}
									borderWidth={8}
									color={colors.primary}
									shadowColor="#ccc"
									bgColor="#fff"
								>
									<Text size="medium">{proteinPercentage}%</Text>
								</ProgressCircle>
								<Text style={{ marginTop: 10 }} weight="bold">
									Protein
								</Text>
							</Block>
							<Block align="center">
								<ProgressCircle
									percent={fatsPercentage}
									radius={50}
									borderWidth={8}
									color={colors.palette.red}
									shadowColor="#ccc"
									bgColor="#fff"
								>
									<Text size="medium">{fatsPercentage}%</Text>
								</ProgressCircle>
								<Text style={{ marginTop: 10 }} weight="bold">
									Fats
								</Text>
							</Block>
							<Block align="center">
								<ProgressCircle
									percent={carbsPercentage}
									radius={50}
									borderWidth={8}
									color="#FFC53A"
									shadowColor="#ccc"
									bgColor="#fff"
								>
									<Text size="medium">{carbsPercentage}%</Text>
								</ProgressCircle>
								<Text style={{ marginTop: 10 }} weight="bold">
									Carbs
								</Text>
							</Block>
						</Block>
					</Block>
				</Block>
			}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		height: height,
		paddingHorizontal: spacing[5],
		paddingTop: spacing[5] + 30
	},
	price: {
		borderRadius: 20,
		paddingVertical: 5,
		paddingHorizontal: 15,
		backgroundColor: '#DEFAE8',
		justifyContent: 'center',
		alignItems: 'center'
	},
	favoriteBtn: {
		padding: 12,
		borderRadius: 12
	}
});
