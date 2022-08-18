// React and packages
import React from "react"
import { StyleSheet, Pressable } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'

// Types and utils
import { colors, spacing } from "../../../../theme"
// Components
import { Block } from "../../../../components"

export interface ProductDetailsHeaderProps {
  goBack: () => void
}

export const ProductDetailsHeader = (props: ProductDetailsHeaderProps) => {
  const { goBack } = props

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
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: spacing[1],
		paddingHorizontal: spacing[5],
	}
})