import React from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { Text } from '..';
import { colors, spacing } from '../../theme';
import Feather from 'react-native-vector-icons/Feather';

// the base styling for the container
const CONTAINER: ViewStyle = {
	marginVertical: spacing[1],
	borderBottomColor: colors.dim,
	borderBottomWidth: 1
};

// the base styling for the TextInput
const INPUT: TextStyle = {
	flex: 1,
	borderTopLeftRadius: 8,
	borderTopRightRadius: 8,

	color: colors.text,
	paddingHorizontal: spacing[2],
	minHeight: 36,
	fontSize: 16
	// backgroundColor: colors.palette.lighterGrey,
};

const PRESETS: { [name: string]: ViewStyle } = {
	default: {}
};

export interface TextFieldProps extends TextInputProps {
	/**
   * The Placeholder text
   */
	placeholder?: string;

	/**
   * Secure input with eye icon
   */
	isPassword?: boolean;

	/**
   * The color of the eye icon if the text field type is password 
   */
	eyeIconColor?: string;

	/**
   * The label text
   */
	label?: string;

	/**
   * Optional container style overrides useful for margins & padding.
   */
	style?: StyleProp<ViewStyle>;

	/**
   * Optional style overrides for the input.
   */
	inputStyle?: StyleProp<TextStyle>;

	/**
   * Various look & feels.
   */
	preset?: keyof typeof PRESETS;

	forwardedRef?: any;
}
/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
	const {
		placeholder,
		label,
		preset = 'default',
		style: styleOverride,
		inputStyle: inputStyleOverride,
		forwardedRef,
		isPassword = false,
		eyeIconColor = colors.dim,
		...rest
	} = props;

	const containerStyles = [ CONTAINER, PRESETS[preset], styleOverride ];
	const inputStyles = [ INPUT, inputStyleOverride ];

	const [ isVisible, setIsVisible ] = React.useState(isPassword);

	// TODO: input onFocus styles

	return (
		<View style={containerStyles}>
			<Text preset="fieldLabel" text={label} />
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<TextInput
					secureTextEntry={isVisible}
					placeholder={placeholder}
					placeholderTextColor={colors.palette.grey}
					underlineColorAndroid={colors.transparent}
					{...rest}
					style={inputStyles}
					ref={forwardedRef}
				/>

				{isPassword && (
					<Feather
						onPress={() => setIsVisible((vis) => !vis)}
						size={22}
						color={eyeIconColor}
						name={!isVisible ? 'eye' : 'eye-off'}
					/>
				)}
			</View>
		</View>
	);
}
