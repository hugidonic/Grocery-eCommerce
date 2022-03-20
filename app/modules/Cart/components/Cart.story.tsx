// React
import React from 'react';
// StoryBook
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../../storybook/views';
// Utils
import { data } from '../../../utils/data';
// Components
import { CartList } from './CartList/CartList';
import { CartListItem } from './CartListItem/CartListItem';
import { Block, Button } from '../../../components';
import { Checkout } from './Checkout/Checkout';
import { Dimensions } from 'react-native';
import { OperationBtn } from './OperationBtn/OperationBtn';

storiesOf('CartList', module)
	.addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
	.add('CartList', () => (
		<Story>
			<UseCase text="Cart list in Cart Screen">
				<CartList
					cartItems={data.products.fruits.map((product) => ({
						count: 1,
						product
					}))}
				/>
			</UseCase>
		</Story>
	))
  .add("CartListItem", () => (
    <Story>
      <UseCase style={{paddingVertical: 20}} text="Cart list Item">
        <CartListItem cartItem={{count: 1, product: data.products.fruits[0]}}  />
      </UseCase>
    </Story>
  ))
  .add("Checkout", () => <CheckoutStory />)
  .add("OperationBtn", () => (
    <Story>
      <UseCase text="Primary">
        <OperationBtn type="Decrement" />
      </UseCase>
      <UseCase text="Primary">
        <OperationBtn type="Increment" />
      </UseCase>
    </Story>
  ))


const {height} = Dimensions.get('screen')

const CheckoutStory = () => {
  const ref = React.useRef(null)

  const openSheet = () => {
    ref.current.snapTo(1)
  }

  return (
    <Block flex style={{height}}>
      <Button text="Open" onPress={openSheet}  />
      <Checkout sheetRef={ref} initialPos={0} />
    </Block>
  )
}
