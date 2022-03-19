// React and packages
import React from "react"
import { StyleProp, ViewStyle, FlatList, Dimensions } from "react-native"
import { observer } from "mobx-react-lite"
// Types and utils
import { colors } from "../../theme"
import { ProductType } from "../../models"
// Components
import { Product, Text, Block } from ".."

export interface ProductListProps {
  title: string,
  data: ProductType[]
  style?: StyleProp<ViewStyle>
}

const {width} = Dimensions.get('screen')

export const ProductList = observer(function ProductList(props: ProductListProps) {
  const { data, title } = props

  return (
    <Block>
			<Block row justify="space-between" align="center" style={{ marginVertical: 8 }}>
				<Text size="large" weight='black'>
					{title}
				</Text>
				{/* TODO: Make this a Link comoponent */}
				<Text color={colors.primary}>See more</Text>
			</Block>

			<FlatList
				data={data}
				renderItem={({ item }) => (
					<Product product={item} />
				)}
				keyExtractor={(item, idx) => idx.toString()}
				horizontal
				style={{
					marginLeft: -20,
					width
				}}
				ListHeaderComponent={() => <Block style={{ width: 10 }} />}
				ListFooterComponent={() => <Block style={{ width: 10 }} />}
				showsHorizontalScrollIndicator={false}
			/>
		</Block>
  )
})