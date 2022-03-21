// React
import React from 'react'
import { Dimensions } from 'react-native';
// Storybook
import { storiesOf } from '@storybook/react-native';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';
// Stories
import { ProductUI } from './Product/Product';
import { ProductDetailsInfo } from './ProductDetailsInfo/ProductDetailsInfo';
// Components
import { Block } from '../../../components';
// Utils
import { data } from '../../../utils/data';

storiesOf('Products', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Product", () => (
    <Story>
      <UseCase text="Single Product">
        <ProductUI product={data.products.fruits[0]} />
      </UseCase>
    </Story>
  ))
  .add("Product Details info", () => <ProductDetailsInfoStory />)

const {height} = Dimensions.get('screen')
const ProductDetailsInfoStory = () => {
  return (
    <Block style={{height}}>
      <ProductDetailsInfo product={data.products.fruits[0]} />
    </Block>
  )
}