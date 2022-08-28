import { bindActionCreators } from 'redux';
import { useAppDispatch } from './useTypedSelector';
// Action Creators
import * as ProductActionCreators from '../../modules/Products/products.actions';
import * as CategoriesActionCreators from '../../modules/Categories/categories.actions';
import * as CartActionCreators from '../../modules/Cart/cart.actions';
import * as FavoriteActionCreators from '../../modules/Favorite/favorite.actions';
import * as DeliveryAddressActionCreators from '../../modules/Delivery/delivery.actions';
import * as OrderActionCreators from '../../modules/Orders/order.actions'
import * as PaymentActionCreators from '../../modules/Payment/payment.actions'

export const useActions = () => {
	const dispatch = useAppDispatch();
	return bindActionCreators(
		{
			...ProductActionCreators,
			...CategoriesActionCreators,
			...CartActionCreators,
			...FavoriteActionCreators,
			...DeliveryAddressActionCreators,
			...OrderActionCreators,
			...PaymentActionCreators
		},
		dispatch
	);
};
