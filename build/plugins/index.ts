import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { configMockPlugin } from './mock'
import { configUnplugin } from './unplugin'
import { fullImportPlugin } from './elplusFullImport'
import { resolve } from 'node:path'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    svgLoader({
      svgoConfig: {
        multipass: true
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
  // unplugin
  vitePlugins.push(configUnplugin(isBuild))
  // fullImportPlugin
  !isBuild && vitePlugins.push(fullImportPlugin())
  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(VITE_USE_MOCK))

  return vitePlugins
}
