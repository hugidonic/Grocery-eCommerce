// React and packages
import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, Image, Dimensions } from 'react-native';
import FadeCarousel from 'rn-fade-carousel';
// Types and utils
import { colors } from '../../theme';

// Components
import { Block } from '..';

const images = [
	'https://alev.biz/wp-content/uploads/2019/03/fruit_vegetables-768x480.jpg',
	'https://img4.goodfon.com/original/320x240/5/7e/ovoshchi-fpukty-iabloki-perets-assorti.jpg',
	'https://brasilienportal.ch/media/2016/03/Fotolia-monticellllo_100847232_XS.jpg',
	'https://thejigsawpuzzles.com/img-puzzle-6355215-400/Fruits-and-vegetables_1',
];

export interface BgSliderProps {
}

const { width: ScreenWidth } = Dimensions.get('screen');
const IMAGE_WIDTH = ScreenWidth * 0.9;
const IMAGE_HEIGHT = 120;

export const BgSlider = (props: BgSliderProps) => {
	const slides = React.useMemo(
		() =>
			images.map((uri) => {
				return <Image source={{ uri }} style={styles.image} />;
			}),
		[]
	);
	/**
	 * Duration of the fading animation
	 */
	const FADE_DURATION: number = 1000;
	/**
	 * Duration of the showing slide 
	 */
	const SLIDE_DURATION: number = 3000;

	return (
		<Block style={styles.container}>
			<Block shadow style={styles.carouselContainer}>
				<FadeCarousel
					elements={slides}
					fadeDuration={FADE_DURATION}
					stillDuration={SLIDE_DURATION}
					start={true}
				/>
			</Block>
		</Block>
	);
};

const styles = StyleSheet.create({
	image: {
		resizeMode: 'cover',
		width: IMAGE_WIDTH,
		height: IMAGE_HEIGHT,
	},
	container: {
		width: '100%',
		height: IMAGE_HEIGHT,

		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
	},
	carouselContainer: {
		borderRadius: 14,
		overflow: 'hidden',
		width: IMAGE_WIDTH,
		height: IMAGE_HEIGHT,
	}
});
