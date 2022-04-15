// React and packages
import React, { FC } from 'react';

import { Dimensions, Image, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Types and utils
import { NavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Block, Screen } from '../../components';
import { ProductDetailsHeader, ProductDetailsInfo } from '../../modules';

const {height} = Dimensions.get('screen')

export const ProductDetailsScreen: FC<
	StackScreenProps<NavigatorParamList, 'productDetails'>
> = (props) => {

  const {product} = props.route.params

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
          source={product.picture}
          style={styles.picture}
        />
      </Block>

      <ProductDetailsInfo product={product} />
    </Screen>
  )
}
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
