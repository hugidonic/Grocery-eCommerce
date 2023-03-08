import { TextStyle } from 'react-native';
import { colors } from '../../theme';

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
	color: colors.text,
	fontSize: 16
};

/**
 * All the variations of text styling within the app.
 */
export const presets = {
	/**
   * The default text styles.
   */
	default: BASE,
	/**
   * Large headers.
   */
	header: { ...BASE, fontSize: 24, fontWeight: 'bold' } as TextStyle,

	/**
   * Field labels that appear on forms above the inputs.
   */
	fieldLabel: { ...BASE, fontSize: 13, color: colors.dim, marginBottom: 4} as TextStyle,

	/**
   * A smaller piece of secondary information.
   */
	secondary: { ...BASE, fontSize: 9, color: colors.dim } as TextStyle
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
