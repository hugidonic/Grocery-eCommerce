// React and packages
import React from "react"
import { StyleProp, ViewStyle } from "react-native"

// Types and utils
import { colors, spacing } from "../../../../theme"
// Components
import { Text, Block } from "../../../../components"

export interface ProfileHeaderProps {
  style?: StyleProp<ViewStyle>
}

export const ProfileHeader = (props: ProfileHeaderProps) => {
  return (
		<Block
			row
			style={{
				borderBottomWidth: 1,
				borderBottomColor: colors.dim,
				paddingHorizontal: spacing[5],
				height: 140
			}}
			align="center"
		>
			<Block
				style={{ width: 80, height: 80 }}
				bRadius={50}
				color={colors.dim}
			/>

			<Block style={{ marginLeft: spacing[4] }}>
				<Text weight='black' size="large" style={{ marginBottom: spacing[1] }}>
					Aminev Vadim
				</Text>
				<Text color={colors.dim}>hugidonic@ya.ru</Text>
			</Block>
		</Block>
	);
}

