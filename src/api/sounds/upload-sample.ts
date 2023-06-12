import { soundApiClient } from '..'

export type UploadParamsRequest = {
  name: string
  bpm: number
  key: string
  keyScale: string
  price: number
  tagIds: number[]
  audioFile: File | null
  coverFile: File | null
}

export type UploadParamsResponse = {
  message: string
  sample_id: number
}

export async function uploadSample(params: UploadParamsRequest) {
  const form = new FormData()

  form.append('name', params.name)
  form.append('bpm', String(params.bpm))
  form.append('key', params.key)
  form.append('key_scale', params.keyScale)
  form.append('time', String(1))
  form.append('price', String(params.price))

  for (const tag of params.tagIds) {
    form.append('tag_ids[]', String(tag))
  }

  form.append('audio_file', params.audioFile as File)
  form.append('cover_file', params.coverFile as File)

  const response = await soundApiClient.post<UploadParamsResponse>(
    '/sounds',
    form,
  )

  return response
}
