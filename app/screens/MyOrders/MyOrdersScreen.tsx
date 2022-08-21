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
	Header,
	Block,
	Text,
} from '../../components';
import { ProfileNavigatorParamList } from '../../navigators';
import { FilterOrders } from '../../modules/Orders';

interface MyOrdersScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'myOrders'> {

}

export const MyOrdersScreen = (props: MyOrdersScreenProps) => {

  return (
    <Screen style={[styles.container]} preset="fixed">
			<Header title="My orders"/>
			{/* Filter orders */}	
			<FilterOrders />

			{/* Orders */}
    </Screen>
  )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		paddingVertical: spacing[6]
	},
});

