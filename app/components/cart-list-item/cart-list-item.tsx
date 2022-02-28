// React and packages
import React from "react"
import { StyleSheet, StyleProp, ViewStyle, Pressable, Image } from "react-native"
import { observer } from "mobx-react-lite"
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
// Types and utils
import { colors } from "../../theme"
// Components
import { Text, Block } from ".."
import { ProductType } from "../../models"
import { OpertaionBtn } from "../operation-btn/operation-btn"

export interface CartListItemProps {
  cartItem: {
    product: ProductType,
    count: number
  }
  style?: StyleProp<ViewStyle>
}

export const CartListItem = observer(function CartListItem(props: CartListItemProps) {
  const { style, cartItem } = props
  const styles = Object.assign({}, st, style)

  const [ count, setCount ] = React.useState<number>(cartItem.count);

	const decrement = () => {
		if (count > 0) setCount((count) => count - 1);
	};
	const increment = () => {
		setCount((count) => count + 1);
	};

  return (
    <Block row color='#fff' shadow bRadius={20} style={styles.container}>
    <Image
      // @ts-ignore
      source={cartItem.product.pictureUri}
      style={{
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 20
      }}
    />
    <Block>
      <Block style={{ marginBottom: 8 }}>
        <Text black large>
          {cartItem.product.name}
        </Text>
        <Text color={colors.dim}>{cartItem.product.description}</Text>
      </Block>
      <Block row>
        <OpertaionBtn func={decrement} type="Decrement" />
        <Block
          style={{ width: 40, height: 40 }}
          justify="center"
          align="center"
        >
          <Text bold large>
            {count}
          </Text>
        </Block>
        <OpertaionBtn func={increment} type="Increment" />
      </Block>
    </Block>

    <Pressable style={styles.deleteIcon}>
      <Entypo name="cross" size={36} color="black" />
    </Pressable>
  </Block>
  )
})

const st = StyleSheet.create({
  container: {
    position: "relative",
    padding: 15,
    marginHorizontal: 20,
  },
  deleteIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
  },

})