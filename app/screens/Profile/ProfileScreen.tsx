// React and packages
import React from 'react';
// Types and utils
import { StackNavigationProp } from '@react-navigation/stack';
import { TabsNavigatorParamList } from '../../navigators';
import { colors } from '../../theme';
// Components
import { Screen, Block, Button,  } from '../../components';
import { ProfileHeader, ProfileList } from '../../modules';
// Redux
import { useActions } from './../../redux/hooks/useActions';

interface ProfileScreenProps extends StackNavigationProp<TabsNavigatorParamList, 'profile'> {}

export const ProfileScreen = (props: ProfileScreenProps) => {
	const {clearCartList} = useActions()
	
	return (
		<Screen backgroundColor={colors.palette.offWhite} preset="scroll">
			<ProfileHeader />

			<ProfileList />

			<Block justify="center" align="center" style={{ marginTop: 40 }}>
				<Button preset="outline" text="Log out" onPress={clearCartList} />
			</Block>
		</Screen>
	);
}
