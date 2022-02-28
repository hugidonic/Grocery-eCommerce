// React and packages
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
// Types and utils
import { TabsNavigatorParamList } from "../../navigators"
import { colors, spacing } from "../../theme"
// Components
import { Screen, Text, Block, Button } from "../../components"
import { CartList } from "../../components/cart-list/cart-list"

type CartScreenProps = StackScreenProps<TabsNavigatorParamList, "cart">

export const CartScreen: FC<CartScreenProps> = observer(function CartScreen() {
  return (
    <>
			<Screen backgroundColor={colors.palette.offWhite} preset="scroll">
      <Block justify="center" row style={{ marginVertical: 30 }}>
				<Text black title>
					My Cart
				</Text>
			</Block>

			<CartList />	

			</Screen>
			<Block
				justify="center"
				row
				style={{ position: 'absolute', bottom: 25, right: 0, left: 0 }}
			>
				<Button shadow text="Go to checkout" onPress={() => {}} />
			</Block>
		</>
  )
})


const styles = StyleSheet.create({
})