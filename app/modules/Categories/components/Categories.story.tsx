// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { data } from "../../../utils/data"
import { CategoriesList } from "./CategoriesList/CategoriesList"
import { CategoriesListItem } from './CategoriesListItem/CategoriesListItem';

storiesOf("Categories (HS)", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("CategoriesList", () => (
    <Story>
      <UseCase text="Category list in the Home screen">
        <CategoriesList />
      </UseCase>
    </Story>
  ))
  .add("CategoriesListItem", () => (
    <Story>
      <UseCase text="Single category item in the Home screen">
        <CategoriesListItem category={data.categories[0]} />
      </UseCase>
    </Story>
  ))
