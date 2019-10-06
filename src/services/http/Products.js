import { http } from './index'
import axios from 'axios'

/**
 * This cancel token lets you cancel request on demand
 * @type {CancelTokenStatic|*}
 */
const CancelToken = axios.CancelToken
let cancelations = []

class Products {
  static getProducts = async payload => {
    try {
      const res = await http.get('/v1/products', {
        cancelToken: new CancelToken(function executor (c) {
          cancelations.push(c)
        })
      })
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export {
  Products,
  cancelations
}
