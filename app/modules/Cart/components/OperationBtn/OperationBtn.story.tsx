// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../storybook/views"
import { OperationBtn } from "./OperationBtn"

storiesOf("OperationBtn", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <OperationBtn type="Decrement" />
      </UseCase>
      <UseCase text="Primary" usage="The primary.">
        <OperationBtn type="Increment" />
      </UseCase>
    </Story>
  ))
