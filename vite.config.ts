import { fileURLToPath, URL } from 'node:url'
import { loadEnv, type UserConfigExport, type ConfigEnv } from 'vite'

// import { defineConfig } from 'vite'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/plugins'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd()
  const isBuild = command === 'build'
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  const { VITE_PUBLIC_PATH, VITE_PORT } = viteEnv
  return {
    base: VITE_PUBLIC_PATH,
    server: {
      cors: true,
      port: VITE_PORT,
      host: '0.0.0.0',
      proxy: {
        '^/api|management/.*': {
          target: 'http://localhost:8080'
          // changeOrigin: true
          // secure: false
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: fileURLToPath(new URL('./src/', import.meta.url))
        },
        {
          find: /#\//,
          replacement: fileURLToPath(new URL('./src/', import.meta.url))
        }
      ]
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  }
}
