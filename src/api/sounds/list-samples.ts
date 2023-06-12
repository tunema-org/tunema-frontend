import { soundApiClient } from '..'

type Sample = {
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

type ListSampleItem = {
  data: Sample
  tags: string[]
  artist_name: string
  sold: number
}

export type ListSamplesResponse = {
  items: ListSampleItem[]
  message: string
  total_items: number
}

export async function listSamples(): Promise<ListSamplesResponse> {
  const response = await soundApiClient.get<ListSamplesResponse>('/sounds')
  return response.data
}
