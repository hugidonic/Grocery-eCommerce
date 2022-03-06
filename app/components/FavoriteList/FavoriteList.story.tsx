// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { FavoriteList } from "./favorite-list"

storiesOf("FavoriteList", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <FavoriteList />
      </UseCase>
    </Story>
  ))
