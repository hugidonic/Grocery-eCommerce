// React and packages
import React from "react"
import { StyleProp, ViewStyle, FlatList, Dimensions } from "react-native"
import { observer } from "mobx-react-lite"
// Types and utils
import { colors } from "../../../../theme"
import { ProductType } from "../../../../models"
// Components
import { Block, Text } from "../../../../components"
import { Product } from '..';

export interface ProductListProps {
  title?: string,
  productsList?: ProductType[]
  style?: StyleProp<ViewStyle>
}

const {width} = Dimensions.get('screen')

export const ProductList = observer(function ProductList(props: ProductListProps) {
  const { productsList = [], title = '' } = props

  return (
    <Block>
			<Block row justify="space-between" align="center" style={{ marginVertical: 8 }}>
				<Text size="large" weight='medium'>
					{title}
				</Text>
				{/* TODO: Make this a Link comoponent */}
				<Text color={colors.primary}>See more</Text>
			</Block>

			<FlatList
				data={productsList}
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