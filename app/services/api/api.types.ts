import { CategoryType } from "../../modules/Categories";
import { ProductType } from "../../modules/Products";
import { GeneralApiProblem } from "./apiProblem";

export type GetProductsResult = { kind: "ok"; products: ProductType[] } | GeneralApiProblem
export type GetProductResult = { kind: "ok"; product: ProductType } | GeneralApiProblem

export type GetCategoriesResult = { kind: "ok"; categories: CategoryType[] } | GeneralApiProblem
 