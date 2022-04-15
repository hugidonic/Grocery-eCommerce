import { BaseInitialState } from '../../redux/store';

export interface CategoryStateType extends BaseInitialState {
	categories: CategoryType[];
}

export enum CategoriesTypes {
	LOAD_CATEGORIES = 'LOAD_CATEGORIES',
	SET_CATEGORIES = 'SET_CATEGORIES',
	ERROR_CATEGORIES = 'ERROR_CATEGORIES'
}

interface LoadCategoriesAction {
	type: CategoriesTypes.LOAD_CATEGORIES;
}
interface SetCategoriesAction {
	type: CategoriesTypes.SET_CATEGORIES;
	payload: CategoryType[];
}
interface ErrorCategoriesAction {
	type: CategoriesTypes.ERROR_CATEGORIES;
	payload: string;
}

export type CategoriesActions =
	| LoadCategoriesAction
	| SetCategoriesAction
	| ErrorCategoriesAction;

export type CategoryType = {
	categoryId: string;
	name: string;
	color: string;
	picture: ReturnType<typeof require>;
};
