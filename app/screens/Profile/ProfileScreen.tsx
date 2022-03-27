// React and packages
import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
// Types and utils
import { StackNavigationProp } from '@react-navigation/stack';
import { TabsNavigatorParamList } from '../../navigators';
import { colors } from '../../theme';
// Components
import { Screen, Block, Button,  } from '../../components';
import { ProfileHeader, ProfileList } from '../../modules';

export const ProfileScreen: FC<
	StackNavigationProp<TabsNavigatorParamList, 'profile'>
> = (props) => {
	return (
		<Screen backgroundColor={colors.palette.offWhite} preset="scroll">
			<ProfileHeader />

			<ProfileList />

			<Block justify="center" align="center" style={{ marginTop: 40 }}>
				<Button preset="outline" text="Log out" onPress={() => {}} />
			</Block>
		</Screen>
	);
}

const styles = StyleSheet.create({
});
