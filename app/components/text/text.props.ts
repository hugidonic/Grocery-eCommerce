import { StyleProp, TextProps as TextProperties, TextStyle } from "react-native"
import { TextPresets } from "./text.presets"

export interface TextProps extends TextProperties {
  /**
   * Text content but without children.
   */
   text?: string
  /**
   * Children components.
   */
  children?: React.ReactNode
  
  /**
   * Color of the text
  */
  color?: string,
  /**
   * Font weight
   */
  light?: boolean;
  /**
   * Font weight
   */
  bold?: boolean;
  /**
   * Font weight
   */
	black?: boolean;

  /**
   * Font size: 26
   */
  title?: boolean;
  /**
   * Font size: 22
   */
	large?: boolean;
  /**
   * Font size: 18
   */
	medium?: boolean;
  /**
   * Font size: 14
   */
	small?: boolean;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets
}
