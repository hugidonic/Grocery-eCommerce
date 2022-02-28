// React and packages
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
// Types and utils
import { TabsNavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { colors } from "../../theme"
// Components
import { Screen, Text } from "../../components"

export const FavoriteScreen: FC<StackScreenProps<TabsNavigatorParamList, "favorite">> = observer(function FavoriteScreen() {
  return (
    <Screen style={styles.container} preset="scroll">
      <Text preset="header">favorite</Text>
    </Screen>
  )
})


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.black,
    flex: 1,
  }
})