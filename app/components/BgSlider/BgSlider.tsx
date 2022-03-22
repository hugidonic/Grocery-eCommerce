// React and packages
import React from "react"
import { StyleSheet, StyleProp, ViewStyle, Image } from "react-native"
import { observer } from "mobx-react-lite"
// Types and utils
// import { colors } from "../../theme"
// Components
import { Block } from ".."

const images = [
	'https://www.konfik.ru/wa-data/public/photos/46/11/1146/1146.970.jpg',
	'https://www.hollandandbarrett.ie/the-health-hub/wp-content/uploads/2020/06/shutterstock_291789095-1024x684.jpg',
	'https://www.jigsawplanet.com/RaghavMittal/fruits?rc=face',
	'https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5cdc45bae1a84300b34081f4_5cdc477deb5ea100b2d1356b/,scale_1200',
	'https://samchef.ru/assets/i/ai/4/2/8/i/2875863.jpg',
	'https://ic.pics.livejournal.com/sedov_05/10509632/585235/585235_original.jpg'
];

// const { width } = Dimensions.get('screen');

export interface BgSliderProps {
  style?: StyleProp<ViewStyle>
}

export const BgSlider = observer(function BgSlider(props: BgSliderProps) {
  const { style } = props
  const styles = Object.assign({}, st, style)

  return (
		<Block border style={styles.cover}>
			<Image source={{uri: images[0]}} style={{resizeMode: 'cover'}} />
		</Block>
	);
})

const st = StyleSheet.create({
	cover: {
		width: '100%',
		height: 120,
		borderRadius: 14,
		marginVertical: 20
	}
})