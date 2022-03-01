// React and packages
import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { StyleSheet, StyleProp, ViewStyle, Dimensions } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { observer } from 'mobx-react-lite';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Types and utils
import { colors, spacing } from '../../theme';
import { ProductType } from '../../models';
// Components
import { Text, Block } from '..';

export interface ProductDetailsInfoProps {
	style?: StyleProp<ViewStyle>;
	product: ProductType;
}

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

export const ProductDetailsInfo = observer(function ProductDetailsInfo(
	props: ProductDetailsInfoProps
) {
	const { style, product } = props;
	const styles = Object.assign({}, st, style);

	const renderContent = () => (
		<Block style={styles.container} shadow bRadius={30} color={colors.palette.white}>
			<Block
				row
				justify="space-between"
				align="center"
				style={{ marginVertical: 15 }}
			>
				<Block style={styles.price}>
					<Text black medium color={colors.primary}>
						${product.price}
					</Text>
				</Block>

				<Block
					color={colors.palette.lightenRed}
					bRadius={12}
					style={{ padding: 12 }}
				>
					<AntDesign
						name="heart"
						size={20}
						color={colors.palette.red}
					/>
					{/* <AntDesign name="hearto" size={20} color="black" /> */}
				</Block>
			</Block>

			<Block>
				<Text black title>
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
					Бананы — одна из древнейших пищевых культур, а для
					тропических стран важнейшее пищевое растение и главная
					статья экспорта. Спелые бананы широко употребляются в пищу
					по всему миру, их используют при приготовлении большого
					количества блюд
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
							<Text medium>{proteinPercentage}%</Text>
						</ProgressCircle>
						<Text style={{marginTop: 10}} bold>Protein</Text>
					</Block>
					<Block align='center'>
						<ProgressCircle
							percent={fatsPercentage}
							radius={50}
							borderWidth={8}
							color={colors.palette.red}
							shadowColor="#ccc"
							bgColor="#fff"
						>
							<Text medium>{fatsPercentage}%</Text>
						</ProgressCircle>
						<Text style={{marginTop: 10}} bold>Fats</Text>
					</Block>
					<Block align='center'>
						<ProgressCircle
							percent={carbsPercentage}
							radius={50}
							borderWidth={8}
							color="#FFC53A"
							shadowColor="#ccc"
							bgColor="#fff"
						>
							<Text medium>{carbsPercentage}%</Text>
						</ProgressCircle>
						<Text style={{marginTop: 10}} bold>Carbs</Text>
					</Block>
				</Block>
			</Block>
		</Block>
	);
	return (
		<Block flex>
			<BottomSheet
				snapPoints={[ '60%', '100%' ]}
				renderContent={renderContent}
				enabledInnerScrolling={false}
				enabledBottomClamp
				borderRadius={30}
			/>
		</Block>
	);
});

const st = StyleSheet.create({
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
	}
});
