// React and packages
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Types and utils
import { NavigatorParamList } from '../../navigators';
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { colors, spacing } from '../../theme';
// Components
import { Block, Screen } from '../../components';
import { data } from '../../utils/data';
import { ProductDetailsHeader, ProductDetailsInfo } from '../../modules';

const {height} = Dimensions.get('screen')

export const ProductDetailsScreen: FC<
	StackScreenProps<NavigatorParamList, 'productDetails'>
> = observer(function ProductDetailsScreen(props) {

  const {productId} = props.route.params
  const product = data.products.all.find(p => p.productId === productId)

  React.useEffect(() => {
    if (!product) {
      props.navigation.navigate('TabsStack', {screen: 'home'})
      return null
    } 
  }, [product])
  
  
  return (
    <Screen preset='fixed' style={styles.container}>
      <ProductDetailsHeader goBack={props.navigation.goBack} />
      
      <Block justify="center" align="center" style={{marginVertical: 15}}>
        <Image
          // @ts-ignore
          source={(product.pictureUri) ?? {uri:  'https://imallpenza.ru/img/nophoto400.jpg'}}
          style={styles.picture}
        />
      </Block>

      <ProductDetailsInfo product={product} />
    </Screen>
  )
});

const PictureSize = height*0.25

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
    paddingVertical: spacing[2]
	},
	picture: {
		width: PictureSize,
		height: PictureSize,
		resizeMode: 'contain'
	},

});
