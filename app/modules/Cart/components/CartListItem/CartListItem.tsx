// React and packages
import React from "react"
import { StyleSheet, StyleProp, ViewStyle, Pressable, Image } from "react-native"
import { observer } from "mobx-react-lite"
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
// Types and utils
import { colors } from "../../../../theme"
import { CartItemType } from "../../../../models"
// Components
import { OperationBtn } from ".."
import { Block, Text } from './../../../../components';

export interface CartListItemProps {
  cartItem: CartItemType
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
    <Block color='#fff' row shadow bRadius={20} style={styles.container}>
      <Block flex={1}>
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
      </Block>

      <Block flex={2}>
        <Block  flex row justify="space-between">
          <Block style={{ marginBottom: 8 }}>
            <Text weight='black' size="large">
              {cartItem.product.name}
            </Text>
            <Text color={colors.dim}>{cartItem.product.description}</Text>
          </Block>
          <Pressable>
            <Entypo name="cross" size={36} color="black" />
          </Pressable>
        </Block>

        <Block row justify="space-between" align="center">
          <Block row>
            <OperationBtn func={decrement} type="Decrement" />
            <Block
              style={{ width: 40, height: 40 }}
              justify="center"
              align="center"
            >
              <Text weight="bold" size="large">
                {count}
              </Text>
            </Block>
            <OperationBtn func={increment} type="Increment" />
          </Block>
          <Text weight='black' size="large">{cartItem.product.price}$</Text>
        </Block>
      </Block>
      
    </Block>
  )
})

const st = StyleSheet.create({
  container: {
    position: "relative",
    padding: 15,
    marginHorizontal: 20,
  },
})