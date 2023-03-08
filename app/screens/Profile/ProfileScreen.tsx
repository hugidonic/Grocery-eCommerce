// React and packages
import React from 'react';
// Theme
import { colors } from '../../theme';
// Navigation types
import { StackNavigationProp } from '@react-navigation/stack';
import { TabsNavigatorParamList } from '../../navigators';
// Components
import { Screen, Block, Button } from '../../components';
// Profile module
import { ProfileHeader, ProfileList } from '../../modules/Profile';
// Redux
import { useActions } from './../../redux/hooks/useActions';

interface ProfileScreenProps extends StackNavigationProp<TabsNavigatorParamList, 'profile'> {}

export const ProfileScreen = (props: ProfileScreenProps) => {
	const { clearCartList } = useActions();

	return (
		<Screen backgroundColor={colors.palette.offWhite} preset="scroll">
			<ProfileHeader />

			<ProfileList />

			<Block justify="center" align="center" style={{ marginTop: 40 }}>
				<Button preset="secondary" text="Log out" onPress={clearCartList} />
			</Block>
		</Screen>
	);
};
