import { CategoriesActions, CategoriesTypes } from './categories.types';
import { Dispatch } from 'redux';
import { API } from '../../redux/store';

export const loadCategories = () => async (dispatch: Dispatch<CategoriesActions>) => {
  dispatch({type: CategoriesTypes.LOAD_CATEGORIES})

  const response = await API.getCategories()
  if (response.kind === 'ok') {
    dispatch({
      type: CategoriesTypes.SET_CATEGORIES,
      payload: response.categories
    })
  } else {
    dispatch({
      type: CategoriesTypes.ERROR_CATEGORIES,
      payload: response.kind
    })
  }
};
