/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STAGING_TUNEMA_API_BASE_URL: string
  readonly VITE_DEV_TUNEMA_API_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
