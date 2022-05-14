// React and packages
import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// Types and utils
import { colors } from '../../../../theme';
// Components

export interface OperationBtnProps {
	
	type?: 'Decrement' | 'Increment';
	func?: () => void;
}

export const OperationBtn = ({
	type = 'Increment',
	func = () => {}
}: OperationBtnProps) => {
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
