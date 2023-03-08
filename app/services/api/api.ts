import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { CategoryType } from '../../modules/Categories';
import { ProductType } from '../../modules/Products';
import { ApiConfig, DEFAULT_API_CONFIG } from './api.config';
import * as ApiTypes from './api.types';
import { getGeneralApiProblem } from './apiProblem';

/**
 * Manages all requests to the API.
 */
export class API {
	/**
   * The underlying apisauce instance which performs the requests.
   */
	apisauce: ApisauceInstance;

	/**
   * Configurable options.
   */
	config: ApiConfig;

	/**
   * Creates the api.
   * @param config The configuration to use.
   */

	constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
		this.config = config;
	}

	/**
   * Sets up the API. This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   */
	setup() {
		// construct the apisauce instance
		this.apisauce = create({
			baseURL: this.config.url,
			timeout: this.config.timeout,
			headers: {
				Accept: 'application/json'
			}
		});
	}

  /**
   * Returns products from local server
   */
  async getProducts(): Promise<ApiTypes.GetProductsResult> {
    const response: ApiResponse<any> = await this.apisauce.get('/products');

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }


    // transform the data into the format we are expecting
    const convertProducts = (rawProduct) => ({
      productId: rawProduct.id,
      name: rawProduct.name,
      type: rawProduct.type, 
      description: rawProduct.description,
      richDescription: rawProduct.richDescription,
      price: rawProduct.price,

      pictureUri: rawProduct.pictureUri,
    })
    
    try {
      const rawProducts = response.data
      const resultProducts: ProductType[] = rawProducts.map(convertProducts)
      return { kind: "ok", products: resultProducts }
    } catch {
      return { kind: "bad-data" }
    }
  }

  /**
   * @param id The id of the product
   * @returns Single Product object with requested id
   */
  async getProduct(id: string): Promise<ApiTypes.GetProductResult> {
    const response: ApiResponse<any> = await this.apisauce.get(`/products/${id}`);

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    
    // transform the data from api into the format we are expecting
    const convertProduct = (rawProduct) => ({
      productId: rawProduct.id,
      name: rawProduct.name,
      type: rawProduct.type,
      description: rawProduct.description,
      richDescription: rawProduct.richDescription,
      price: rawProduct.price,

      pictureUri: rawProduct.pictureUri,
    })
    
    try {
      const rawProduct = response.data
      const resultProduct: ProductType = convertProduct(rawProduct)

      return { kind: "ok", product: resultProduct }
    } catch {
      return { kind: "bad-data" }
    }
  }

  /**
   * Returns Category list from local server 
   */
  async getCategories(): Promise<ApiTypes.GetCategoriesResult> {
    const response: ApiResponse<any> = await this.apisauce.get('/categories')
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    } 

    // transform the data from api into the format we are expecting
    const convertCategories = (rawCat): CategoryType => ({
      categoryId: rawCat.id,
      color: rawCat.color,
      name: rawCat.name,
      pictureUri: rawCat.pictureUri,
    })

    try {
      const rawCategories = response.data
      const categories: CategoryType[] = rawCategories.map(convertCategories)
      return {
        kind: "ok",
        categories: categories
      }
    } catch (error) {
      return {
        kind: 'bad-data',
      }
    }
  }
  
}
