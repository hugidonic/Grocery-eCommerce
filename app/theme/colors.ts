import { palette } from "./palette"

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.green,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.darkerGreen,
  /**
   * The main tinting color, but lighter.
   */
  primaryLighter: palette.lightenGreen,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.black,
  /**
   * The default color of text in many components.
   */
  text: palette.black,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.red,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.white,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,
}
