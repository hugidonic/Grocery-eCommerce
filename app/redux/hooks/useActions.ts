import { bindActionCreators } from 'redux';
import { useAppDispatch } from './useTypedSelector';
// Action Creators
import * as ProductActionCreators from '../../modules/Products/products.actions';
import * as CategoriesActionCreators from '../../modules/Categories/categories.actions';
import * as CartActionCreators from '../../modules/Cart/cart.actions';
import * as FavoriteActionCreators from '../../modules/Favorite/favorite.actions';

export const useActions = () => {
	const dispatch = useAppDispatch();
	return bindActionCreators(
		{ ...ProductActionCreators, ...CategoriesActionCreators, ...CartActionCreators, ...FavoriteActionCreators },
		dispatch
	);
};
