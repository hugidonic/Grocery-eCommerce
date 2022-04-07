// Use this import if you want to use "env.js" file
// const { API_URL } = require("../../config/env")
// Or just specify it directly like this:
const API_URL = "http://localhost:5000/api"
const IMAGES_URL = "https://disk.yandex.ru/d/z4DXHna-dCJjqQ"

/**
 * The options used to configure the API.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string


  /**
   * The URL of the images storage
   */
  imagesUrl: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL,
  imagesUrl: IMAGES_URL,
  timeout: 10000,
}
