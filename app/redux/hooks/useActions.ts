import { bindActionCreators } from 'redux';
import { useAppDispatch } from './useTypedSelector';
import * as ProductActionCreators from '../../modules/Products/products.actions';
import * as CategoriesActionCreators from '../../modules/Categories/categories.actions';

export const useActions = () => {
	const dispatch = useAppDispatch();
	return bindActionCreators(
		{ ...ProductActionCreators, ...CategoriesActionCreators },
		dispatch
	);
};
