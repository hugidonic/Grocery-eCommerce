// React and packages
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// Theme
import { colors } from '../../../../theme';
// Components

export interface OperationBtnProps {
	type?: 'Decrement' | 'Increment';
	func?: () => void;
}

const SIZE_BUTTON = 35

export const OperationBtn = ({
	type = 'Increment',
	func = () => {}
}: OperationBtnProps) => {
	return (
		<Pressable style={styles.btn} onPress={func}>
			<Feather
				name={type == 'Decrement' ? 'minus' : 'plus'}
				size={22}
				color={type == 'Decrement' ? colors.dim : colors.primary}
			/>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	btn: {
		borderWidth: 1,
		borderColor: colors.palette.black,
		borderRadius: 12,
		width: SIZE_BUTTON,
		height: SIZE_BUTTON,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
