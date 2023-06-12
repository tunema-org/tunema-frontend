import { AxiosError } from 'axios'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '../api'
import { User } from '../api/models'
import { RegisterRequest } from '../api/users'

export type AuthState = {
  isAuthenticated: boolean
  accessToken: string
  error: string
  user: User
}

export type AuthAction = {
  login(email: string, password: string): Promise<void>
  register(params: RegisterRequest): Promise<void>
  logout(): void
}

export const useAuthStoreName = 'auth-storage'

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: '',
      error: '',
      user: {},
      async login(email: string, password: string) {
        const { data, status } = await api.login(email, password)

        if (status === 401) {
          set((state) => ({
            ...state,
            error: data['message'],
          }))
          return
        }

        set((state) => ({
          ...state,
          isAuthenticated: true,
          accessToken: data['access_token'],
          user: {
            id: data['user']['id'],
            username: data['user']['username'],
            email: data['user']['email'],
            profileImageUrl: data['user']['profile_img_url'],
          },
          error: '',
        }))
      },
      async register(params: RegisterRequest) {
        try {
          const { data, status } = await api.register(params)

          if (status !== 201) {
            set((state) => ({
              ...state,
              error: data['message'],
            }))
            return
          }

          set((state) => ({
            ...state,
            isAuthenticated: true,
            accessToken: data['access_token'],
            user: {
              id: data['user']['id'],
              username: data['user']['username'],
              email: data['user']['email'],
              profileImageUrl: data['user']['profile_img_url'],
            },
            error: '',
          }))
        } catch (error) {
          if (error instanceof AxiosError) {
            const errMessage = error.response?.data['message']
            set((state) => ({
              ...state,
              error: errMessage,
            }))
          }
        }
      },
      logout() {
        set((state) => ({
          ...state,
          isAuthenticated: false,
          accessToken: '',
          user: {},
        }))
      },
    }),
    {
      name: useAuthStoreName,
    },
  ),
)
