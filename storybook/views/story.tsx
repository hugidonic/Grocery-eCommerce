import * as React from "react"
import { ScrollView, View, ViewStyle } from "react-native"

export interface StoryProps {
  children?: React.ReactNode,
  border?: boolean
}

export const Story = (props: StoryProps) => {
  return (
    <View style={{ flex: 1, borderWidth: props.border? 1 : 0 }}>
      <ScrollView keyboardShouldPersistTaps="handled">{props.children}</ScrollView>
    </View>
  )
}
