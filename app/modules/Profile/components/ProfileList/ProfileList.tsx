// React and packages
import React from 'react';
// Navigation
import { useAppNavigation } from '../../../../navigators';
// Theme
// Components
import { ProfileListItem } from '..';
import { Block } from '../../../../components';

export interface ProfileListProps {
	
}

export const ProfileList = (
	props: ProfileListProps
) => {
	const nav = useAppNavigation();


	return (
		<Block>
			<ProfileListItem
				title="My orders"
				iconType="Ionicons"
				iconName="ios-receipt-outline"
				onPress={() => nav.navigate('ProfileStack', {screen: 'myOrders'})}
			/>
			<ProfileListItem
				title="My Details"
				iconType="Ionicons"
				iconName="person-outline"
				onPress={() =>
					nav.navigate('ProfileStack', { screen: 'myDetails' })}
			/>
			<ProfileListItem
				title="Delivery Address"
				iconType="SimpleLineIcons"
				iconName="location-pin"
				onPress={() =>
					nav.navigate('ProfileStack', { screen: 'deliveryAddress' })}
			/>
			<ProfileListItem
				title="Payment Methods"
				iconType="Ionicons"
				iconName="ios-card-outline"
				onPress={() =>
					nav.navigate('ProfileStack', { screen: 'paymentMethods' })}
			/>
			<ProfileListItem
				title="Promo Cards"
				iconType="Ionicons"
				iconName="md-gift-outline"
				onPress={() =>
					nav.navigate('ProfileStack', { screen: 'promoCards', params: {fromScreenName: "profile"} } )}
			/>
			<ProfileListItem
				title="Notifications"
				iconType="Ionicons"
				iconName="notifications-outline"
				onPress={() =>
					nav.navigate('ProfileStack', { screen: 'notifications' })}
			/>
			<ProfileListItem
				title="Help"
				iconType="SimpleLineIcons"
				iconName="question"
				onPress={() => nav.navigate('ProfileStack', { screen: 'help' })}
			/>
			<ProfileListItem
				title="About"
				iconType="SimpleLineIcons"
				iconName="exclamation"
				onPress={() => nav.navigate('ProfileStack', { screen: 'about' })}
			/>
		</Block>
	);
};
