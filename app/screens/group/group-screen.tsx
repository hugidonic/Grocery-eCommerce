// React and packages
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
// Types and utils
import { NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { colors, spacing } from '../../theme';
// Components
import { Product, ProductDetailsHeader, Screen, Text } from "../../components"
import { data } from "../../utils/data"

export const GroupScreen: FC<StackScreenProps<NavigatorParamList, "group">> = observer(function GroupScreen(props) {

  const {groupId} = props.route.params
  const group = data.groups.find(p => p.groupId === groupId)

  React.useEffect(() => {
    if (!group) {
      props.navigation.navigate('TabsStack', {screen: 'explore'})
    }
  }, [])
  
    
  return (
    <Screen style={styles.container} preset="fixed">
      <ProductDetailsHeader goBack={props.navigation.goBack} />
      <FlatList
      // TODO: MAKE THIS RIGHT
				data={data.products.all}
				renderItem={({ item }) => (
					<Product product={item} />
				)}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item, idx) => idx.toString()}
				style={{
					paddingHorizontal: 20
				}}
				columnWrapperStyle={{
					justifyContent: 'space-between',
				}}
			/>
    </Screen>
  )
})


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.offWhite,
  }
})