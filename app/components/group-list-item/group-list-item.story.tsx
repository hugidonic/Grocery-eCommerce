// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { GroupListItem } from "./group-list-item"
import { data } from "../../utils/data"

storiesOf("GroupListItem", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <GroupListItem group={data.groups[0]} />
      </UseCase>
    </Story>
  ))
