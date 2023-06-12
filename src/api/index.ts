import axios from 'axios'

import { listSamples } from './sounds/list-samples'
import { login, me, register } from './users'

export const userApiClient = axios.create({
  baseURL: import.meta.env.VITE_DEV_TUNEMA_API_USER,
  // baseURL: import.meta.env.VITE_STAGING_TUNEMA_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
})

export const soundApiClient = axios.create({
  baseURL: import.meta.env.VITE_DEV_TUNEMA_API_SOUND,
  // baseURL: import.meta.env.VITE_STAGING_TUNEMA_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
})

export default {
  userApiClient,
  soundApiClient,
  login,
  register,
  me,
  listSamples,
}
