import { userApiClient } from '..'

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

export async function login(email: string, password: string) {
  const response = await userApiClient.post<LoginResponse>('/users/login', {
    email,
    password,
  })
  return response
}

type MeResponse = {
  id: number
  username: string
  email: string
  profile_img_url: string
}

export async function me() {
  const response = await userApiClient.get<MeResponse>('/users/me')
  return response
}
