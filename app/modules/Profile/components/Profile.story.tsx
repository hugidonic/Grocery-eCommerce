import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Story, StoryScreen, UseCase } from '../../../../storybook/views'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'
import { ProfileList } from './ProfileList/ProfileList'


storiesOf('Profile', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Profile Header", () => (
    <Story>
      <UseCase text="Header of the Profile screen">
        <ProfileHeader />
      </UseCase>
    </Story>
  ))
  .add("Profile List", () => (
    <Story>
      <UseCase text="Profile list items">
        <ProfileList />
      </UseCase>
    </Story>
  ))