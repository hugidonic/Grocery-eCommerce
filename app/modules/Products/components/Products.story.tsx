// React
import React from 'react'
import { Dimensions } from 'react-native';
// Storybook
import { storiesOf } from '@storybook/react-native';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';
// Stories
import { ProductComponent } from './Product/Product.component';
import { ProductDetailsInfo } from './ProductDetailsInfo/ProductDetailsInfo';
// Components
import { Block } from '../../../components';
import { data } from '../../../utils/data';

const {height} = Dimensions.get('screen')

storiesOf('Products', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Product", () => (
    <Story>
      <UseCase text="Single Product">
        <ProductComponent product={data.products.all[0]} />
      </UseCase>
    </Story>
  ))
  .add("Product Details info", () => <ProductDetailsInfoStory />)

const ProductDetailsInfoStory = () => {
  return (
    <Block style={{height}}>
      <ProductDetailsInfo product={data.products.all[0]} />
    </Block>
  )
}