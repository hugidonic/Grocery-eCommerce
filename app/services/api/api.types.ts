import { ProductType } from '../../modules/Products';
import { GeneralApiProblem } from './api-problem';

export type GetProductsResult = {
	kind: 'ok';
	products: ProductType[] 
} | GeneralApiProblem
