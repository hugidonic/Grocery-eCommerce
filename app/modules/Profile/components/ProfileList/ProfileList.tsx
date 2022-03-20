// React and packages
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
// Types and utils
import { NavigatorScreenProps } from '../../../../navigators';
// Components
import { ProfileListItem } from '..';
import { Block } from '../../../../components';

export interface ProfileListProps {
	style?: StyleProp<ViewStyle>;
}

export const ProfileList = observer(function ProfileList(
	props: ProfileListProps
) {
	// const nav = useNavigation<NavigatorScreenProps>();
	const nav = {
		navigate: (name: string, obj: any) => {}
	}
	return (
		<Block>
			<ProfileListItem
				title="Orders"
				iconType="Ionicons"
				iconName="ios-receipt-outline"
				func={() => nav.navigate('ProfileStack', { screen: 'orders' })}
			/>
			<ProfileListItem
				title="My Details"
				iconType="Ionicons"
				iconName="person-outline"
				func={() =>
					nav.navigate('ProfileStack', { screen: 'myDetails' })}
			/>
			<ProfileListItem
				title="Delivery Address"
				iconType="SimpleLineIcons"
				iconName="location-pin"
				func={() =>
					nav.navigate('ProfileStack', { screen: 'deliveryAddress' })}
			/>
			<ProfileListItem
				title="Payment Methods"
				iconType="Ionicons"
				iconName="ios-card-outline"
				func={() =>
					nav.navigate('ProfileStack', { screen: 'paymentMethods' })}
			/>
			<ProfileListItem
				title="Promo Cards"
				iconType="Ionicons"
				iconName="md-gift-outline"
				func={() =>
					nav.navigate('ProfileStack', { screen: 'promoCards' })}
			/>
			<ProfileListItem
				title="Notifications"
				iconType="Ionicons"
				iconName="notifications-outline"
				func={() =>
					nav.navigate('ProfileStack', { screen: 'notifications' })}
			/>
			<ProfileListItem
				title="Help"
				iconType="SimpleLineIcons"
				iconName="question"
				func={() => nav.navigate('ProfileStack', { screen: 'help' })}
			/>
			<ProfileListItem
				title="About"
				iconType="SimpleLineIcons"
				iconName="exclamation"
				func={() => nav.navigate('ProfileStack', { screen: 'about' })}
			/>
		</Block>
	);
});
