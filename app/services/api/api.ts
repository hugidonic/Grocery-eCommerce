import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"

export type CreateApiType = ReturnType<typeof createAPI>

export const createAPI = (config: ApiConfig = DEFAULT_API_CONFIG) => {
  const api = create({
    baseURL: config.url,
    timeout: config.timeout,
    headers: {
      Accept: "application/json",
    },
  })

  const getProducts = async (): Promise<Types.GetProductsResult> => {
    const response: ApiResponse<any> = await api.get('/products')
    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    return { kind: "ok", products: response.data } as Types.GetProductsResult
  }

  return {
    getProducts
  }
}

