// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'
// Types and utils
// import { ParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import {
	Screen,
	Block,
	Text,
	Loading,
} from '../../components';
import { ProfileNavigatorParamList } from '../../navigators';

interface HelpScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'help'> {

}

export const HelpScreen = (props: HelpScreenProps) => {

  return (
    <Screen style={[styles.container, styles.center]} preset="scroll">
			<Text> Help Screen </Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		paddingVertical: spacing[6]
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	}
});
