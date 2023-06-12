import { soundApiClient } from '..'

export type ListTagsAndCategoriesResponse = {
  items: {
    category: string
    tags: {
      id: number
      name: string
    }[]
  }[]
  message: string
  total_items: number
}

export async function listTagsAndCategories(): Promise<ListTagsAndCategoriesResponse> {
  const response = await soundApiClient.get<ListTagsAndCategoriesResponse>(
    '/sounds/tags',
  )
  return response.data
}
