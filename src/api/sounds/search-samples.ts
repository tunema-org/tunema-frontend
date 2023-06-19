import { soundApiClient } from '..'

type SearchSampleItem = {
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

export type SearchSamplesResponse = {
  items: SearchSampleItem[]
  message: string
  total_items: number
}

type SearchSamplesParams = {
  name?: string
  tags?: number[]
  order_by?: 'created_at' | 'price' | 'sold'
}

export async function searchSamples({
  name,
  tags,
  order_by,
}: SearchSamplesParams): Promise<SearchSamplesResponse> {
  const params = new URLSearchParams()

  if (name) {
    params.append('name', name)
  }

  if (tags) {
    params.append('tags', tags.join(','))
  }

  if (order_by) {
    params.append('order_by', order_by)
  }

  const response = await soundApiClient.get<SearchSamplesResponse>(
    `/sounds/search?${params}`,
  )
  return response.data
}
