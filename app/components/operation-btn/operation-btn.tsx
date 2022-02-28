// React and packages
import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, Pressable } from 'react-native';
// Types and utils
import { colors } from '../../theme';
// Components
import Feather from 'react-native-vector-icons/Feather';

export interface OperationBtnProps {
	style?: StyleProp<ViewStyle>;
	type: 'Decrement' | 'Increment';
	func: () => void;
}

export const OpertaionBtn = ({ type, func }: OperationBtnProps) => {
	return (
		<Pressable style={styles.btn} onPress={func}>
			<Feather
				name={type == 'Decrement' ? 'minus' : 'plus'}
				size={26}
				color={type == 'Decrement' ? colors.dim : colors.primary}
			/>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	btn: {
		borderWidth: 1,
		borderColor: colors.palette.black,
		borderRadius: 14,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
