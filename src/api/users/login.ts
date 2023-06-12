import type { AxiosResponse } from 'axios'
import { httpClient } from '..'

type LoginResponse = {
  message: string
  access_token: string
  user: {
    id: number
    username: string
    email: string
    profile_img_url: string
  }
}

export async function login(
  email: string,
  password: string,
): Promise<AxiosResponse<LoginResponse, any>> {
  const response = await httpClient.post<LoginResponse>('/users/login', {
    email,
    password,
  })
  return response
}
