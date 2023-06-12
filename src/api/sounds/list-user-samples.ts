import { soundApiClient } from '..'

type UserSampleItem = {
  data: {
    id: number
    user_id: number
    name: string
    bpm: number
    key: string
    key_scale: string
    time: number
    file_url: string
    cover_url: string
    price: number
    created_at: string
  }
  tags: string[]
  artist_name: string
  sold: number
}

export type ListUserSamplesResponse = {
  items: UserSampleItem[]
  message: string
  total_items: number
}

export async function listUserSamples(
  userId: number,
): Promise<ListUserSamplesResponse> {
  const response = await soundApiClient.get<ListUserSamplesResponse>(
    `/sounds/users/${userId}`,
  )
  return response.data
}
