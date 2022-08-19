import { ViewStyle, TextStyle } from 'react-native';
import { colors, spacing } from '../../theme';

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
	paddingVertical: spacing[2],
	paddingHorizontal: spacing[2],
	borderRadius: 40,
	justifyContent: 'center',
	alignItems: 'center'
};

export const SHADOW: ViewStyle = {
  shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.6,
		shadowRadius: 4.65,

		elevation: 8
}

const BASE_TEXT: TextStyle = {
	paddingHorizontal: spacing[3],
  fontSize: 18,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
	/**
   * A primary button
   */
	primary: {
		...BASE_VIEW,
		backgroundColor: colors.palette.green,
		borderRadius: spacing[4],
    paddingVertical: spacing[4],
    width: '80%'
	} as ViewStyle,

	secondary: {
		...BASE_VIEW,
		backgroundColor: colors.palette.lighterGrey,
		width: '80%',
		paddingVertical: spacing[4],
		paddingHorizontal: spacing[2],
	} as ViewStyle,

	
	outline: {
		...BASE_VIEW,
		backgroundColor: colors.palette.lightenGreen,
		borderWidth: 1,
		borderColor: colors.palette.lighterGrey,
		borderRadius: spacing[4],
    paddingVertical: spacing[4],
		paddingHorizontal: spacing[2],
    width: '80%'
	} as ViewStyle,

	/**
   * A button without extras.
   */
	link: {
		...BASE_VIEW,
		paddingHorizontal: 0,
		paddingVertical: 0,
		alignItems: 'flex-start'
	} as ViewStyle
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
	primary: {
		...BASE_TEXT,
		color: colors.palette.white
	} as TextStyle,

	secondary: {
		...BASE_TEXT,
		fontWeight: 'bold',
		color: colors.primary
	} as TextStyle,
	
	outline: {
		...BASE_TEXT,
		color: colors.palette.black,
		fontWeight: 'bold',
	} as ViewStyle,
	link: {
		...BASE_TEXT,
		color: colors.primary,
		paddingHorizontal: 0,
		paddingVertical: 0
	} as TextStyle
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets;
