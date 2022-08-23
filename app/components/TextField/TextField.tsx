import React from "react"
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { Text } from ".."
import { colors, spacing } from "../../theme"

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  borderBottomWidth: 3,
  borderBottomColor: colors.primary,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,

  color: colors.text,
  paddingHorizontal: spacing[2],
  minHeight: 40,
  fontSize: 18,
  backgroundColor: colors.palette.lighterGrey,
}

const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

export interface TextFieldProps extends TextInputProps {
  /**
   * The Placeholder text
   */
  placeholder?: string

  /**
   * The label text
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS

  forwardedRef?: any
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholder,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props

  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride]
  const inputStyles = [INPUT, inputStyleOverride]

  return (
    <View style={containerStyles}>
      <Text preset="fieldLabel" text={label} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.palette.grey}
        underlineColorAndroid={colors.transparent}
        {...rest}
        style={inputStyles}
        ref={forwardedRef}
      />
    </View>
  )
}
