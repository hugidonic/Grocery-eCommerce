// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { GroupList } from "./GroupList/GroupList"
import { GroupListItem } from "./GroupListItem/GroupListItem"
import { data } from "../../../utils/data"

storiesOf("Groups (HS)", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("GroupList", () => (
    <Story>
      <UseCase text="Group list in the Home screen">
        <GroupList />
      </UseCase>
    </Story>
  ))
  .add("GroupListItem", () => (
    <Story>
      <UseCase text="Single group item in the Home screen">
        <GroupListItem group={data.groups[0]} />
      </UseCase>
    </Story>
  ))
