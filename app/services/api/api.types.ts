import { CategoryType } from '../../modules';
import { ProductType } from '../../modules/Products';
import { GeneralApiProblem } from './api-problem';

export type GetProductsResult = {
	kind: 'ok';
	products: ProductType[] 
} | GeneralApiProblem

export type GetCategoriesResult = {
	kind: 'ok';
	categories: CategoryType[]
} | GeneralApiProblem
