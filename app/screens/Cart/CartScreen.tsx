// React and packages
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
// Types and utils
import { TabsNavigatorParamList } from "../../navigators"
import { colors } from "../../theme"
// Components
import { Screen, Text, Block, Button, CartList } from "../../components"
import { useStores } from "../../models"
import { data } from "../../utils/data"

type CartScreenProps = StackScreenProps<TabsNavigatorParamList, "cart">

export const CartScreen: FC<CartScreenProps> = observer(function CartScreen() {
	const {UserStore} = useStores()
	
	React.useEffect(() => {
		data.products.fruits.map(product => UserStore.cartItems.addToCart(product))
	}, [])

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