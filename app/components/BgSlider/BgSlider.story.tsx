// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { BgSlider } from "./BgSlider"

storiesOf("BgSlider", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase noPad text="Primary" usage="The primary.">
        <BgSlider />
      </UseCase>
    </Story>
  ))
