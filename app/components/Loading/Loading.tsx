// React and packages
import React from "react"
// Types and utils
// Components
import { Text, Block, Screen } from ".."

export const Loading = () => {

  return (
    <Screen preset="fixed">
      <Block flex justify="center" align="center">
        <Text size='title'>Loading...</Text>
      </Block>
    </Screen>
  );
}