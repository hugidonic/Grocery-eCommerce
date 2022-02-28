// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { colors } from "../../theme"
import { Block } from "./block"

storiesOf("Block", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <Block style={{ backgroundColor: colors.error }} />
      </UseCase>
    </Story>
  ))
