import React from 'react'
import { storiesOf } from '@storybook/react-native';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';
import { Product } from './Product/Product';
import { data } from '../../../utils/data';
import { ProductList } from './ProductList/ProductList';
import { ProductDetailsInfo } from './ProductDetailsInfo/ProductDetailsInfo';
import { Dimensions } from 'react-native';
import { Block, Button } from '../../../components';

storiesOf('Products', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Products List", () => (
    <Story>
      <UseCase text="List of products">
        <ProductList title="Fruits" productsList={data.products.fruits} />
      </UseCase>
    </Story>
  ))
  .add("Product", () => (
    <Story>
      <UseCase text="Single Product">
        <Product product={data.products.fruits[0]} />
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