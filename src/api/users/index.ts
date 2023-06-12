import { userApiClient } from '..'

export type LoginResponse = {
  message: string
  access_token: string
  user: {
    id: number
    username: string
    email: string
    profile_img_url: string
  }
}

export async function login(email: string, password: string) {
  const response = await userApiClient.post<LoginResponse>('/users/login', {
    email,
    password,
  })
  return response
}

export type RegisterRequest = {
  username: string
  email: string
  password: string
  profile_img_url: string
}

export type RegisterResponse = {
  message: string
  access_token: string
  user: {
    id: number
    username: string
    email: string
    profile_img_url: string
  }
}

export async function register(params: RegisterRequest) {
  const response = await userApiClient.post<RegisterResponse>(
    '/users/register',
    params,
  )
  return response
}

export type MeResponse = {
  id: number
  username: string
  email: string
  profile_img_url: string
}

export async function me() {
  const response = await userApiClient.get<MeResponse>('/users/me')
  return response
}
