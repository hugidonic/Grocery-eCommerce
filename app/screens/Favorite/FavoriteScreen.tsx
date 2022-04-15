// React and packages
import React, { FC } from "react"

import { StackScreenProps } from "@react-navigation/stack"
// Types and utils
import { TabsNavigatorParamList } from "../../navigators"
import { colors } from "../../theme"
// Components
import { Screen, Text, Block, Button, Loading } from "../../components"
import { FavoriteList } from "../../modules"
import { useTypedSelector } from "../../redux/hooks/useTypedSelector"
import { useActions } from "../../redux/hooks/useActions"

type FavoriteScreenProps = StackScreenProps<TabsNavigatorParamList, "favorite">

export const FavoriteScreen: FC<FavoriteScreenProps> = (props) => {
	const {favoriteItems, isLoading} = useTypedSelector(state => state.FavoriteStore)
	
	const {loadFavoriteItems} = useActions()

	React.useEffect(() => {
		loadFavoriteItems()
	}, [])
	
	if (isLoading) {
		return <Loading />
	}

  return (
    <>
			<Screen backgroundColor={colors.palette.offWhite} preset="scroll">
				<Block justify="center" row style={{ marginVertical: 30 }}>
					<Text weight='black' size='title'>
						Favorite products
					</Text>
				</Block>

				<FavoriteList favoriteItems={favoriteItems} />	
			</Screen>


			{favoriteItems.length > 0 && (
				<Block
					justify="center"
					row
					style={{ position: 'absolute', bottom: 25, right: 0, left: 0 }}
				>
					<Button shadow text="Add all to cart" onPress={() => {}} />
				</Block>
			)}
		</>
  )
}
