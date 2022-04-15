// React
import React from "react"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { CategoriesList } from "./CategoriesList/CategoriesList"
import { CategoryItem } from './CategoryItem';
import { data } from "../../../utils/data";

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
        <CategoryItem category={data.categories[1]} />
      </UseCase>
    </Story>
  ))
