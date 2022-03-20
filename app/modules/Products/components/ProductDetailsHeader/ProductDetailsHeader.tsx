// React and packages
import React from "react"
import { StyleSheet, StyleProp, ViewStyle, Pressable } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { observer } from "mobx-react-lite"
// Types and utils
import { colors, spacing } from "../../../../theme"
// Components
import { Block } from "../../../../components"

export interface ProductDetailsHeaderProps {
  style?: StyleProp<ViewStyle>
  goBack: () => void
}

export const ProductDetailsHeader = observer(function ProductDetailsHeader(props: ProductDetailsHeaderProps) {
  const { style, goBack } = props
  const styles = Object.assign({}, st, style)

  return (
   <Block
			style={styles.container}
			row
			justify="space-between"
			align="center"
      color={colors.palette.offWhite}
		>
			<Pressable onPress={goBack}>
				<Entypo name="chevron-left" size={30} color={colors.palette.black} />
			</Pressable>

			<Pressable>
				<Entypo
					name="dots-three-horizontal"
					size={30}
					color={colors.palette.black}
				/>
			</Pressable>
		</Block>
  )
})

const st = StyleSheet.create({
	container: {
		paddingVertical: spacing[1],
		paddingHorizontal: spacing[5],
	}
})