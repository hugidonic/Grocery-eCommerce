// React and packages
import React from "react"
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native"
// Types and utils
import { colors, spacing } from "../../../../theme"
// Components
import { Text, Block } from "../../../../components"
import { useAppNavigation } from "../../../../navigators"

export interface ProfileHeaderProps {
  style?: StyleProp<ViewStyle>
}

export const ProfileHeader = (props: ProfileHeaderProps) => {
	const nav = useAppNavigation()
	
  return (
		<Pressable
			style={styles.profileHeader}
			onPress={() => nav.navigate('ProfileStack', {screen: 'myDetails'})}
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
		</Pressable>
	);
}


const styles = StyleSheet.create({
	profileHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.dim,
		paddingHorizontal: spacing[5],
		height: 140
	}
})