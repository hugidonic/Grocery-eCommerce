// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { data } from "../../../utils/data"
import { FavoriteList } from "./FavoriteList/FavoriteList"
import { FavoriteListItem } from "./FavoriteListItem/FavoriteListItem"

storiesOf("Favorite", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("FavoriteList", () => (
    <Story>
      <UseCase text="Favorite list of items" >
        <FavoriteList favoriteItems={data.products.vegetables} />
      </UseCase>
    </Story>
  ))
  .add("FavoriteListItem", () => (
    <Story>
      <UseCase text="Favorite item from list">
        <FavoriteListItem product={data.products.vegetables[0]} />
      </UseCase>
    </Story>
  ))
