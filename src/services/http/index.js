import axios from 'axios'

/**
 * HTTP Instance. Create as many instances
 * as you wish.
 * Also set here all your axios instance options.
 */
export const http = axios.create({
  baseURL: 'https://5c3c998d29429300143fe514.mockapi.io/api',
  timeout: 30000
})
