// React and packages
import React from "react"
import { FlatList, Dimensions } from "react-native"

// Types and utils
import { ProductListContainerProps } from "./ProductList.container";
import { colors } from "../../../../theme"
// Components
import { Block, Button, Text } from "../../../../components"
import { Product } from '..';
// Constants
const {width} = Dimensions.get('screen')

export interface ProductListProps extends ProductListContainerProps {
	OnPressSeeMore: () => void;
}

export const ProductListComponent = (props: ProductListProps) => {
  const { productsList = [], title = '', OnPressSeeMore = () => {} } = props
	
  return (
    <Block>
			<Block row justify="space-between" align="center" style={{ marginVertical: 8 }}>
				<Text size="large" weight='medium'>
					{title}
				</Text>
				{/* TODO: Make this a Link comoponent */}
				<Button preset="link" onPress={OnPressSeeMore} text="See more" />
			</Block>

			<FlatList
				data={productsList}
				renderItem={({ item }) => (
					<Product product={item} />
				)}
				keyExtractor={(item) => item.productId}
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
}