// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { CartListItem } from ".."
import { Story, StoryScreen, UseCase } from "../../../../../storybook/views"

storiesOf("CartListItem", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <CartListItem  />
      </UseCase>
    </Story>
  ))
