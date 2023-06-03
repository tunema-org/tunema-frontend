import { httpClient } from '..'

type LoginResponse = {
  message: string
  access_token: string
}

export async function login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  const response = await httpClient.post<LoginResponse>('/users/login', {
    email,
    password,
  })
  return response.data
}
