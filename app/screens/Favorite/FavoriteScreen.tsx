// React and packages
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
// Types and utils
import { TabsNavigatorParamList } from "../../navigators"
import { colors } from "../../theme"
import { useStores } from "../../models"
import { data } from "../../utils/data"
// Components
import { Screen, Text, Block, Button } from "../../components"
import { FavoriteList } from "../../modules"

type FavoriteScreenProps = StackScreenProps<TabsNavigatorParamList, "favorite">

export const FavoriteScreen: FC<FavoriteScreenProps> = observer(function FavoriteScreen() {

	const { UserStore } = useStores()

	React.useEffect(() => {
		data.products.vegetables.map(product => UserStore.favoriteItems.addToFavorite(product))
	}, [])
	
  return (
    <>
			<Screen backgroundColor={colors.palette.offWhite} preset="scroll">
				<Block justify="center" row style={{ marginVertical: 30 }}>
					<Text weight='black' size='title'>
						Favorite products
					</Text>
				</Block>

				<FavoriteList />	
			</Screen>


			<Block
				justify="center"
				row
				style={{ position: 'absolute', bottom: 25, right: 0, left: 0 }}
			>
				<Button shadow text="Add all to cart" onPress={() => {}} />
			</Block>
		</>
  )
})
