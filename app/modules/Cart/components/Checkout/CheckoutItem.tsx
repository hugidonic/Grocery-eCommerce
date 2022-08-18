// React components
import React from 'react';
import { TouchableOpacity } from 'react-native';
// Components
import { Block, Text, Divider } from '../../../../components';
// Theme
import { colors,  } from '../../../../theme';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';
// Prop Types
import { CheckoutItemProps } from './Checkout.props';


export const CheckoutItem = (props: CheckoutItemProps) => {
	const { title, subtitleComponent, withChevron = true, onPress } = props;

	return (
		<React.Fragment>
			<Block row justify="space-between" align="center" marginVertical={10}>
				<Text size="large" weight="medium" color={colors.dim}>
					{title}
				</Text>
				<TouchableOpacity
					disabled={!withChevron}
					onPress={onPress}
					style={{ flexDirection: 'row', alignItems: 'center' }}
				>
					{subtitleComponent}
					{withChevron ? (
						<Entypo
							style={{ marginLeft: 15 }}
							name="chevron-right"
							size={26}
							color={colors.palette.black}
						/>
					) : null}
				</TouchableOpacity>
			</Block>
			<Divider />
		</React.Fragment>
	);
};

