// React and packages
import React from 'react';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Types and utils
import { ProductDetailsInfoComponentProps } from './ProductDetailsInfo.props';
import { colors, spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';

// CONSTANTS
const banana = {
	protein: 1.5,
	fats: 0.2,
	carbs: 21.8
};

const all = banana.protein + banana.fats + banana.carbs;
// Percentages of the suplements in priduct
const proteinPercentage = +(banana.protein / all * 100).toFixed(2);
const fatsPercentage = +(banana.fats / all * 100).toFixed(2);
const carbsPercentage = +(banana.carbs / all * 100).toFixed(2);

const { height } = Dimensions.get('screen');

export const ProductDetailsInfoComponent = (props: ProductDetailsInfoComponentProps) => {
	const {
		product,
		// TODO: change all this arrow funcs to one nullable function
		addToFavorite = () => {},
		removeFromFavorite = () => {},
		isFavorite = false,

		isProductInCart,
		removeFromCart = () => {},
		addToCart = () => {}
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
				// CONTAINER
				<Block color="#fff" paddingHorizontal={spacing[5]} style={{ paddingTop: 10 }}>
					{/* HEADER */}
					<Block row justify="space-between" align="center" style={{ marginVertical: 15 }}>
						<Block row>
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
										backgroundColor: isFavorite ? colors.palette.lightenRed : colors.transparent,
										borderWidth: 2,
										borderColor: colors.palette.lightenRed,
										marginLeft: 10
									}
								]}
							>
								<AntDesign
									name={isFavorite ? 'heart' : 'hearto'}
									size={20}
									color={isFavorite ? colors.palette.red : colors.palette.black}
								/>
							</TouchableOpacity>
						</Block>

						<TouchableOpacity
							onPress={isProductInCart ? removeFromCart : addToCart}
							style={{
								backgroundColor: isProductInCart ? colors.primaryDarker : colors.primary,
								borderRadius: 18,
								padding: spacing[2]
							}}
						>
							<MaterialCommunityIcons
								name={isProductInCart ? 'cart-off' : 'cart'}
								size={28}
								color="#fff"
							/>
						</TouchableOpacity>
					</Block>

					{/* CONTENT */}
					<Block>
						<Text weight="black" size="title">
							{product.name}
						</Text>
						<Block row align="center" style={{ marginVertical: 15 }}>
							<Block row align="center" style={{ marginRight: 40 }}>
								<AntDesign name="star" size={24} color={colors.primary} style={{ marginRight: 10 }} />
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
							Бананы — одна из древнейших пищевых культур, а для тропических стран важнейшее пищевое
							растение и главная статья экспорта. Спелые бананы широко употребляются в пищу по всему миру,
							их используют при приготовлении большого количества блюд
						</Text>

						<Block style={{ marginTop: 50 }} row justify="space-between" align="center">
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
