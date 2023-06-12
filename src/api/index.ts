import axios from 'axios'

import { listSamples } from './sounds/list-samples'
import { login } from './users/login'

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_DEV_TUNEMA_API_BASE_URL,
  // baseURL: import.meta.env.VITE_STAGING_TUNEMA_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
})

export default {
  login,
  listSamples,
}
