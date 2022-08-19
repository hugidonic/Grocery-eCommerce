// React and packages
import React from 'react';
import { StyleSheet } from 'react-native'
// Types and utils
import { StackScreenProps } from '@react-navigation/stack';
// import { ParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import {
	Screen,
	Text,
	Block,
} from '../../components';
import { ProfileNavigatorParamList } from '../../navigators';

interface MyDetailsScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'myDetails'> {

}

export const MyDetailsScreen = (props: MyDetailsScreenProps) => {

  return (
    <Screen style={[styles.container, styles.center]} preset="scroll">
				<Text>My Details Screen</Text>
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
