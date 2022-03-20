// React
import React from "react"
import { Dimensions } from "react-native"
// StoryBook
import { storiesOf } from "@storybook/react-native"
import { StoryScreen } from "../../../../../storybook/views"
import { Checkout } from "./Checkout"
// Components
import { Block, Button, Text } from "../../../../components"
import BottomSheet from 'react-native-bottomsheet-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';

const {height} = Dimensions.get('screen')

storiesOf("Checkout", module)
  .addDecorator((story) => <StoryScreen>{story()}</StoryScreen>)
  .add("Main", () => <Story />)

const Story = () => {
  const ref = React.useRef(null)

  const openSheet = () => {
    ref.current.snapTo(1)
  }

  return (
    <Block flex style={{height}}>
      <Button text="Open" onPress={openSheet}  />
      <Checkout sheetRef={ref} initialPos={0} />
    </Block>
  )
}