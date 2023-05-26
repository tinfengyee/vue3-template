/// <reference types="vite/client" />

interface ViteEnv {
  ViteEnv: string
  VITE_APP_BASE_API: string
  VITE_PUBLIC_PATH: string
  VITE_PORT: number
  VITE_USE_MOCK: boolean
  // 更多环境变量
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
